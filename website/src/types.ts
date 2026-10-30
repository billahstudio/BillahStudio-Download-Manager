export type Language = 'en' | 'bn';

export interface DownloadTask {
  id: string;
  name: string;
  sizeMB: number;
  downloadedMB: number;
  speedMBs: number;
  status: 'downloading' | 'paused' | 'completed' | 'queued';
  segments: {
    id: number;
    progress: number; // 0 to 100
    color: string;
  }[];
  format: string;
  category: 'video' | 'software' | 'archive' | 'game';
}

export interface FaqItem {
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
  category: 'general' | 'performance' | 'extension' | 'security';
}
