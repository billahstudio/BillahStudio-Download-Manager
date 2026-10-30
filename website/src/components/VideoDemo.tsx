import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/translations';

interface VideoDemoProps {
  currentLang: Language;
}

export function VideoDemo({ currentLang }: VideoDemoProps) {
  const t = content[currentLang].videoDemo || {
    badge: currentLang === 'en' ? "Product Walkthrough" : "প্রোডাক্ট ডেমো",
    title: currentLang === 'en' ? "Watch BillahStudio DM in Action" : "লাইভ ভিডিওতে দেখুন কীভাবে কাজ করে",
    subtitle: currentLang === 'en' 
      ? "Experience high-speed parallel transfers, seamless video sniffing, and clean interface in this quick walkthrough."
      : "১৬-থ্রেড স্পিড এক্সিলারেশন, ব্রাউজার ভিডিও স্নাইপার ও ক্লিন ইন্টারফেসের বাস্তব অভিজ্ঞতা দেখুন।"
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="demo-video" className="py-16 md:py-24 relative bg-[#090D16] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Video Player Card */}
        <div className="relative mx-auto rounded-2xl p-1 bg-gradient-to-b from-teal-500/30 via-white/10 to-transparent shadow-2xl shadow-teal-950/50">
          <div className="relative rounded-xl overflow-hidden bg-[#060A12] border border-white/10 aspect-video group">
            
            <video
              ref={videoRef}
              src="/promo.mp4"
              className="w-full h-full object-contain bg-black"
              controls={isPlaying}
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Overlay Button (when paused) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity group-hover:bg-black/30"
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 rounded-full bg-teal-500/20 animate-ping" />
                  <div className="w-18 h-18 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-xl shadow-teal-500/30 group-hover:scale-105 transition-transform">
                    <Play className="w-8 h-8 ml-1 fill-white" />
                  </div>
                </div>
              </div>
            )}

            {/* Custom Overlay Controls (Visible on hover when playing) */}
            {isPlaying && (
              <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-auto">
                <button
                  onClick={toggleMute}
                  type="button"
                  className="p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-teal-400" />}
                </button>
                <button
                  onClick={handleFullscreen}
                  type="button"
                  className="p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 cursor-pointer"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4 text-slate-200" />
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

