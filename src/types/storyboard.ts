export interface StoryboardCard {
  id: string;
  mode: 'new' | 'existing';
  presetTags: string[];
  durationSec: number;
  scenes: Array<{
    index: number;
    title: string;
    copy: string;
    thumbnailUrl: string;
    camera?: 'pan' | 'dolly' | 'zoom' | 'handheld' | null;
  }>;
  brandFitScore?: number;
}

export interface PresetFilter {
  id: string;
  label: string;
  active: boolean;
}