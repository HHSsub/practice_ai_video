import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Eye, Camera, Star } from 'lucide-react';
import { StoryboardCard as StoryboardCardType } from '../types/storyboard';

interface StoryboardCardProps {
  storyboard: StoryboardCardType;
  onSelect: () => void;
}

export default function StoryboardCard({ storyboard, onSelect }: StoryboardCardProps) {
  const getCameraIcon = (camera: string | null) => {
    switch (camera) {
      case 'pan': return '📹';
      case 'dolly': return '🎬';
      case 'zoom': return '🔍';
      case 'handheld': return '📱';
      default: return '📸';
    }
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-wrap gap-1">
            {storyboard.presetTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          {storyboard.brandFitScore && (
            <div className="flex items-center gap-1 text-sm text-amber-600">
              <Star className="w-4 h-4 fill-current" />
              {storyboard.brandFitScore}%
            </div>
          )}
        </div>
        
        <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
          <div className="text-center z-10">
            <Eye className="w-8 h-8 mx-auto mb-2 text-slate-600 dark:text-slate-300" />
            <p className="text-sm text-slate-600 dark:text-slate-300">미리보기</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {storyboard.durationSec}초
          </div>
          <div className="flex items-center gap-1">
            <Camera className="w-4 h-4" />
            {storyboard.scenes.length}개 씬
          </div>
        </div>

        <div className="space-y-2">
          {storyboard.scenes.slice(0, 2).map((scene) => (
            <div key={scene.index} className="flex items-center gap-2 text-sm">
              <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                {scene.index}
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                {scene.title}
              </span>
              {scene.camera && (
                <span className="text-xs">
                  {getCameraIcon(scene.camera)}
                </span>
              )}
            </div>
          ))}
          {storyboard.scenes.length > 2 && (
            <p className="text-xs text-slate-500">
              +{storyboard.scenes.length - 2}개 씬 더 보기
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="w-full space-y-2">
          <Button 
            onClick={onSelect}
            className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all"
            variant="outline"
          >
            <Eye className="w-4 h-4 mr-2" />
            상세 보기
          </Button>
          <Button className="w-full" size="sm">
            이 보드로 시작하기
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}