import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Check, Zap, Server, Activity, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/translations';

interface LiveSimulatorProps {
  currentLang: Language;
}

interface SampleFile {
  id: string;
  name: string;
  sizeMB: number;
  type: string;
}

const SAMPLE_FILES: SampleFile[] = [
  { id: '4k', name: 'Cinematic-4K-Master-Render.mp4', sizeMB: 1200, type: 'Video' },
  { id: 'iso', name: 'Ubuntu-Desktop-24.04-x64.iso', sizeMB: 4600, type: 'OS Image' },
  { id: 'assets', name: 'BillahStudio-Production-Pack.zip', sizeMB: 850, type: 'Archive' },
];

export function LiveSimulator({ currentLang }: LiveSimulatorProps) {
  const t = content[currentLang].simulator;

  const [selectedFile, setSelectedFile] = useState<SampleFile>(SAMPLE_FILES[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [downloadedMB, setDownloadedMB] = useState(0);
  const [speedMBs, setSpeedMBs] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // 16 parallel thread segments progress array
  const [segments, setSegments] = useState<number[]>(Array(16).fill(0));
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetSimulation = () => {
    setIsRunning(false);
    setIsCompleted(false);
    setDownloadedMB(0);
    setSpeedMBs(0);
    setElapsedSeconds(0);
    setSegments(Array(16).fill(0));
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleSelectFile = (file: SampleFile) => {
    setSelectedFile(file);
    resetSimulation();
  };

  const toggleRun = () => {
    if (isCompleted) {
      resetSimulation();
      setIsRunning(true);
      return;
    }
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    if (!isRunning) {
      if (timerRef.current) clearInterval(timerRef.current);
      setSpeedMBs(0);
      return;
    }

    timerRef.current = setInterval(() => {
      setElapsedSeconds((sec) => sec + 0.2);

      // Random network speed jitter between 44 and 52 MB/s
      const currentSpeed = 44 + Math.random() * 8.5;
      setSpeedMBs(Number(currentSpeed.toFixed(1)));

      setDownloadedMB((prev) => {
        const next = prev + currentSpeed * 0.2;
        if (next >= selectedFile.sizeMB) {
          setIsCompleted(true);
          setIsRunning(false);
          setSegments(Array(16).fill(100));
          return selectedFile.sizeMB;
        }

        // Advance individual 16 segments with realistic minor deviations
        const overallFraction = next / selectedFile.sizeMB;
        setSegments(() => {
          return Array.from({ length: 16 }, (_, idx) => {
            const baseProg = (overallFraction * 16) - idx;
            if (baseProg <= 0) return 0;
            if (baseProg >= 1) return 100;
            return Math.min(100, Math.floor(baseProg * 100));
          });
        });

        return Number(next.toFixed(1));
      });
    }, 200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, selectedFile]);

  const progressPercent = Math.min(100, Math.floor((downloadedMB / selectedFile.sizeMB) * 100));

  return (
    <section id="simulator" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0A0E18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-teal-400 tracking-wider uppercase mb-2">
            {t.badge}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Simulator Dashboard Container */}
        <div className="max-w-4xl mx-auto rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-white/10 shadow-xl">
          
          {/* File Picker row */}
          <div className="mb-6">
            <label className="block text-xs font-medium text-slate-300 mb-2">
              {t.selectFile}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SAMPLE_FILES.map((file) => (
                <button
                  key={file.id}
                  onClick={() => handleSelectFile(file)}
                  type="button"
                  className={`flex flex-col text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    selectedFile.id === file.id
                      ? 'border-teal-500/80 bg-teal-500/10 text-white shadow-sm shadow-teal-500/20'
                      : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-slate-200 hover:border-white/20'
                  }`}
                >
                  <span className="text-xs font-semibold text-white truncate">{file.name}</span>
                  <span className="text-[11px] text-teal-400/90 mt-1 font-mono-numbers">
                    {file.sizeMB} MB · {file.type}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Real-Time Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#070B14] border border-white/5 mb-6 font-mono-numbers">
            <div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Activity className="w-3 h-3 text-teal-400" />
                <span>{t.speedLabel}</span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-teal-300 mt-0.5">
                {speedMBs} MB/s
              </div>
            </div>

            <div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Server className="w-3 h-3 text-cyan-400" />
                <span>{t.threadsLabel}</span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-cyan-300 mt-0.5">
                {isRunning ? '16 Sockets' : isCompleted ? '16 Verified' : 'Ready'}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-400" />
                <span>{t.progressLabel}</span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {downloadedMB} / {selectedFile.sizeMB} MB
              </div>
            </div>

            <div>
              <div className="text-[11px] text-slate-400">Time Elapsed</div>
              <div className="text-lg sm:text-xl font-bold text-slate-300 mt-0.5">
                {elapsedSeconds.toFixed(1)}s
              </div>
            </div>
          </div>

          {/* 16 Parallel Range Streams Visualization */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-medium text-slate-300">16 Parallel HTTP Range Streams</span>
              <span className="font-mono-numbers text-teal-400">{progressPercent}%</span>
            </div>

            {/* Individual Slices Bar */}
            <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5 p-2 bg-[#060A12] rounded-xl border border-white/5">
              {segments.map((prog, idx) => (
                <div key={idx} className="flex flex-col gap-1 items-center">
                  <div className="w-full h-12 bg-white/5 rounded overflow-hidden flex flex-col justify-end">
                    <div
                      className={`w-full transition-all duration-200 ${
                        prog === 100
                          ? 'bg-gradient-to-t from-teal-500 to-cyan-400'
                          : 'bg-teal-400/80 animate-pulse'
                      }`}
                      style={{ height: `${prog}%` }}
                    />
                  </div>
                  <span className="text-[9px] font-mono-numbers text-slate-500">#{idx + 1}</span>
                </div>
              ))}
            </div>

            {/* Overall Aggregate Bar */}
            <div className="w-full bg-[#060A12] h-2.5 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-sky-400 transition-all duration-200"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Completion state notification */}
          {isCompleted && (
            <div className="p-3.5 mb-6 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-400" />
                <span className="font-medium">{t.statusComplete}</span>
              </div>
              <span className="font-mono-numbers text-[11px] text-teal-400">SHA-256: 8f4c...3e1a [MATCH]</span>
            </div>
          )}

          {/* Interactive Controls Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleRun}
                type="button"
                className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-md ${
                  isRunning
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                    : 'bg-teal-500 text-white hover:bg-teal-400 shadow-teal-500/20'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>{t.pauseBtn}</span>
                  </>
                ) : isCompleted ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t.resetBtn}</span>
                  </>
                ) : downloadedMB > 0 ? (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>{t.resumeBtn}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>{t.startBtn}</span>
                  </>
                )}
              </button>

              <button
                onClick={resetSimulation}
                type="button"
                className="flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-slate-400 hover:text-white rounded-xl border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.resetBtn}</span>
              </button>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <span>Try pausing to verify byte-range preservation</span>
              <ArrowRight className="w-3 h-3 text-teal-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
