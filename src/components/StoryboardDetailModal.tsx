import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Clock, Camera, Star, Play, X } from 'lucide-react';
import { StoryboardCard } from '../types/storyboard';

interface StoryboardDetailModalProps {
  storyboard: StoryboardCard | null;
  onClose: () => void;
}

export default function StoryboardDetailModal({ storyboard, onClose }: StoryboardDetailModalProps) {
  if (!storyboard) return null;

  const getCameraIcon = (camera: string | null) => {
    switch (camera) {
      case 'pan': return '📹';
      case 'dolly': return '🎬';
      case 'zoom': return '🔍';
      case 'handheld': return '📱';
      default: return '📸';
    }
  };

  const getCameraLabel = (camera: string | null) => {
    switch (camera) {
      case 'pan': return '팬 카메라';
      case 'dolly': return '돌리 샷';
      case 'zoom': return '줌 인/아웃';
      case 'handheld': return '핸드헬드';
      default: return '고정 샷';
    }
  };

  return (
    <Dialog open={!!storyboard} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">스토리보드 상세보기</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {storyboard.presetTags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {storyboard.durationSec}초
            </div>
            <div className="flex items-center gap-1">
              <Camera className="w-4 h-4" />
              {storyboard.scenes.length}개 씬
            </div>
            {storyboard.brandFitScore && (
              <div className="flex items-center gap-1 text-amber-600">
                <Star className="w-4 h-4 fill-current" />
                브랜드 적합도 {storyboard.brandFitScore}%
              </div>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {storyboard.scenes.map((scene, index) => (
            <motion.div
              key={scene.index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border rounded-lg p-4 bg-slate-50 dark:bg-slate-800"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg" />
                  <div className="text-center z-10">
                    <Play className="w-12 h-12 mx-auto mb-2 text-slate-600 dark:text-slate-300" />
                    <p className="text-sm text-slate-600 dark:text-slate-300">씬 {scene.index} 미리보기</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                      {scene.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      {scene.copy}
                    </p>
                  </div>
                  
                  {scene.camera && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-lg">{getCameraIcon(scene.camera)}</span>
                      <span className="text-slate-600 dark:text-slate-300">
                        {getCameraLabel(scene.camera)}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      씬 {scene.index}
                    </Badge>
                    <span className="text-sm text-slate-500">
                      약 {Math.round(storyboard.durationSec / storyboard.scenes.length)}초
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-3 mt-8 pt-6 border-t">
          <Button variant="outline" onClick={onClose} className="flex-1">
            다른 보드 보기
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            이 스토리보드로 영상 제작하기
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}