import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import StoryboardGrid from '../components/StoryboardGrid';
import ComparisonSection from '../components/ComparisonSection';
import PresetGallery from '../components/PresetGallery';
import TrustSection from '../components/TrustSection';
import PricingSection from '../components/PricingSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { StoryboardCard } from '../types/storyboard';

export default function Index() {
  const [selectedMode, setSelectedMode] = useState<'new' | 'existing'>('new');
  const [storyboards, setStoryboards] = useState<StoryboardCard[]>([]);
  const [showStoryboards, setShowStoryboards] = useState(false);

  const handleGenerateStoryboards = async (input: string, mode: 'new' | 'existing') => {
    setShowStoryboards(true);
    // Mock API call - in real implementation, this would call the actual API
    const mockStoryboards = await generateMockStoryboards(mode, input);
    setStoryboards(mockStoryboards);
  };

  const generateMockStoryboards = (mode: 'new' | 'existing', input: string): Promise<StoryboardCard[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const baseStoryboards: StoryboardCard[] = mode === 'new' ? [
          {
            id: '1',
            mode: 'new',
            presetTags: ['UGC', 'Trendy'],
            durationSec: 15,
            scenes: [
              { index: 1, title: '오프닝 후크', copy: '놀라운 제품 등장', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' },
              { index: 2, title: '문제 제시', copy: '일상의 불편함', thumbnailUrl: '/api/placeholder/400/300', camera: 'pan' },
              { index: 3, title: '솔루션 소개', copy: '제품 기능 설명', thumbnailUrl: '/api/placeholder/400/300', camera: 'dolly' }
            ],
            brandFitScore: 85
          },
          {
            id: '2',
            mode: 'new',
            presetTags: ['Commercial', 'Professional'],
            durationSec: 30,
            scenes: [
              { index: 1, title: '브랜드 인트로', copy: '전문적인 시작', thumbnailUrl: '/api/placeholder/400/300', camera: 'pan' },
              { index: 2, title: '제품 쇼케이스', copy: '제품 디테일', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' },
              { index: 3, title: '고객 혜택', copy: '가치 제안', thumbnailUrl: '/api/placeholder/400/300', camera: null }
            ],
            brandFitScore: 92
          },
          {
            id: '3',
            mode: 'new',
            presetTags: ['Talking Avatar', 'Personal'],
            durationSec: 20,
            scenes: [
              { index: 1, title: '아바타 인사', copy: '친근한 시작', thumbnailUrl: '/api/placeholder/400/300', camera: null },
              { index: 2, title: '핵심 메시지', copy: '주요 포인트', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' },
              { index: 3, title: '행동 유도', copy: 'CTA 메시지', thumbnailUrl: '/api/placeholder/400/300', camera: 'pan' }
            ],
            brandFitScore: 78
          },
          {
            id: '4',
            mode: 'new',
            presetTags: ['VFX', 'Dynamic'],
            durationSec: 25,
            scenes: [
              { index: 1, title: '임팩트 오프닝', copy: '강렬한 시작', thumbnailUrl: '/api/placeholder/400/300', camera: 'dolly' },
              { index: 2, title: '제품 변화', copy: '비포 애프터', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' },
              { index: 3, title: '결과 강조', copy: '성과 시각화', thumbnailUrl: '/api/placeholder/400/300', camera: 'pan' }
            ],
            brandFitScore: 88
          },
          {
            id: '5',
            mode: 'new',
            presetTags: ['Camera Control', 'Cinematic'],
            durationSec: 35,
            scenes: [
              { index: 1, title: '시네마틱 오프닝', copy: '영화적 시작', thumbnailUrl: '/api/placeholder/400/300', camera: 'dolly' },
              { index: 2, title: '스토리 전개', copy: '감정적 연결', thumbnailUrl: '/api/placeholder/400/300', camera: 'pan' },
              { index: 3, title: '클라이맥스', copy: '절정 장면', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' }
            ],
            brandFitScore: 90
          },
          {
            id: '6',
            mode: 'new',
            presetTags: ['Action', 'Fast-paced'],
            durationSec: 18,
            scenes: [
              { index: 1, title: '빠른 시작', copy: '역동적 오프닝', thumbnailUrl: '/api/placeholder/400/300', camera: 'handheld' },
              { index: 2, title: '액션 시퀀스', copy: '제품 활용', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' },
              { index: 3, title: '강렬한 마무리', copy: '임팩트 엔딩', thumbnailUrl: '/api/placeholder/400/300', camera: 'dolly' }
            ],
            brandFitScore: 82
          }
        ] : [
          {
            id: '7',
            mode: 'existing',
            presetTags: ['Brand Optimized', 'Professional'],
            durationSec: 30,
            scenes: [
              { index: 1, title: '브랜드 일관성', copy: '브랜드 가이드 준수', thumbnailUrl: '/api/placeholder/400/300', camera: 'pan' },
              { index: 2, title: '핵심 가치', copy: '브랜드 메시지', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' },
              { index: 3, title: '고객 연결', copy: '타겟 어필', thumbnailUrl: '/api/placeholder/400/300', camera: 'dolly' }
            ],
            brandFitScore: 96
          },
          {
            id: '8',
            mode: 'existing',
            presetTags: ['Custom Style', 'Branded'],
            durationSec: 25,
            scenes: [
              { index: 1, title: '맞춤형 시작', copy: '브랜드 톤앤매너', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' },
              { index: 2, title: '제품 특화', copy: '브랜드 특성 반영', thumbnailUrl: '/api/placeholder/400/300', camera: 'pan' },
              { index: 3, title: '브랜드 강화', copy: '정체성 강조', thumbnailUrl: '/api/placeholder/400/300', camera: null }
            ],
            brandFitScore: 94
          },
          {
            id: '9',
            mode: 'existing',
            presetTags: ['Logo Integration', 'Corporate'],
            durationSec: 40,
            scenes: [
              { index: 1, title: '기업 소개', copy: '회사 정체성', thumbnailUrl: '/api/placeholder/400/300', camera: 'dolly' },
              { index: 2, title: '서비스 설명', copy: '전문성 강조', thumbnailUrl: '/api/placeholder/400/300', camera: 'pan' },
              { index: 3, title: '신뢰도 구축', copy: '기업 신뢰성', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' }
            ],
            brandFitScore: 98
          },
          {
            id: '10',
            mode: 'existing',
            presetTags: ['Color Matched', 'Consistent'],
            durationSec: 22,
            scenes: [
              { index: 1, title: '컬러 하모니', copy: '브랜드 컬러 활용', thumbnailUrl: '/api/placeholder/400/300', camera: 'pan' },
              { index: 2, title: '일관된 메시지', copy: '통합 커뮤니케이션', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' },
              { index: 3, title: '브랜드 완성', copy: '완벽한 마무리', thumbnailUrl: '/api/placeholder/400/300', camera: 'dolly' }
            ],
            brandFitScore: 93
          },
          {
            id: '11',
            mode: 'existing',
            presetTags: ['Reference Based', 'Optimized'],
            durationSec: 28,
            scenes: [
              { index: 1, title: '레퍼런스 기반', copy: '기존 스타일 반영', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' },
              { index: 2, title: '개선된 품질', copy: '최적화된 결과', thumbnailUrl: '/api/placeholder/400/300', camera: 'pan' },
              { index: 3, title: '완성도 극대화', copy: '브랜드 완벽 구현', thumbnailUrl: '/api/placeholder/400/300', camera: 'dolly' }
            ],
            brandFitScore: 97
          },
          {
            id: '12',
            mode: 'existing',
            presetTags: ['Advanced', 'Premium'],
            durationSec: 45,
            scenes: [
              { index: 1, title: '프리미엄 시작', copy: '고급스러운 오프닝', thumbnailUrl: '/api/placeholder/400/300', camera: 'dolly' },
              { index: 2, title: '세련된 전개', copy: '우아한 스토리텔링', thumbnailUrl: '/api/placeholder/400/300', camera: 'pan' },
              { index: 3, title: '완벽한 마무리', copy: '프리미엄 클로징', thumbnailUrl: '/api/placeholder/400/300', camera: 'zoom' }
            ],
            brandFitScore: 99
          }
        ];
        resolve(baseStoryboards);
      }, 1500);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Hero 
        selectedMode={selectedMode}
        onModeChange={setSelectedMode}
        onGenerate={handleGenerateStoryboards}
      />
      
      {showStoryboards && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <StoryboardGrid storyboards={storyboards} />
        </motion.div>
      )}
      
      <ComparisonSection />
      <PresetGallery />
      <TrustSection />
      <PricingSection />
      <FAQ />
      <Footer />
    </div>
  );
}