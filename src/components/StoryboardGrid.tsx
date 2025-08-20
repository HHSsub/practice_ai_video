import { useState } from 'react';
import { motion } from 'framer-motion';
import { StoryboardCard as StoryboardCardType } from '../types/storyboard';
import StoryboardCard from './StoryboardCard';
import StoryboardDetailModal from './StoryboardDetailModal';

interface StoryboardGridProps {
  storyboards: StoryboardCardType[];
}

export default function StoryboardGrid({ storyboards }: StoryboardGridProps) {
  const [selectedStoryboard, setSelectedStoryboard] = useState<StoryboardCardType | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            제안된 스토리보드
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            AI가 분석한 6개의 스토리보드 중 마음에 드는 것을 선택하세요. 
            각 스토리보드는 서로 다른 스타일과 접근 방식을 제공합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {storyboards.map((storyboard, index) => (
            <motion.div
              key={storyboard.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StoryboardCard
                storyboard={storyboard}
                onSelect={() => setSelectedStoryboard(storyboard)}
              />
            </motion.div>
          ))}
        </div>

        {selectedStoryboard && (
          <StoryboardDetailModal
            storyboard={selectedStoryboard}
            onClose={() => setSelectedStoryboard(null)}
          />
        )}
      </div>
    </section>
  );
}