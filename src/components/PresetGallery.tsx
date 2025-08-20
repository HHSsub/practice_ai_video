import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Filter } from 'lucide-react';

const presetCategories = [
  { id: 'all', label: '전체', active: true },
  { id: 'ugc', label: 'UGC', active: false },
  { id: 'commercial', label: 'Commercial', active: false },
  { id: 'avatar', label: 'Talking Avatar', active: false },
  { id: 'vfx', label: 'VFX', active: false },
  { id: 'camera', label: 'Camera Control', active: false },
  { id: 'action', label: 'Action', active: false }
];

const presetSamples = [
  {
    id: 1,
    title: 'UGC 스타일 제품 소개',
    category: 'ugc',
    tags: ['UGC', 'Trendy', 'Social'],
    duration: '15초',
    advanced: false
  },
  {
    id: 2,
    title: '전문적인 서비스 홍보',
    category: 'commercial',
    tags: ['Commercial', 'Professional', 'B2B'],
    duration: '30초',
    advanced: true
  },
  {
    id: 3,
    title: 'AI 아바타 설명 영상',
    category: 'avatar',
    tags: ['Talking Avatar', 'Personal', 'AI'],
    duration: '20초',
    advanced: true
  },
  {
    id: 4,
    title: '임팩트 VFX 광고',
    category: 'vfx',
    tags: ['VFX', 'Dynamic', 'Impact'],
    duration: '25초',
    advanced: true
  },
  {
    id: 5,
    title: '시네마틱 브랜드 필름',
    category: 'camera',
    tags: ['Camera Control', 'Cinematic', 'Premium'],
    duration: '45초',
    advanced: true
  },
  {
    id: 6,
    title: '액션 스포츠 광고',
    category: 'action',
    tags: ['Action', 'Fast-paced', 'Energy'],
    duration: '18초',
    advanced: false
  }
];

export default function PresetGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSamples = selectedCategory === 'all' 
    ? presetSamples 
    : presetSamples.filter(sample => sample.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <Filter className="w-4 h-4 mr-2" />
            프리셋 갤러리
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            다양한 스타일의 영상 템플릿
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            업계별, 목적별로 최적화된 영상 스타일을 미리 확인하고 선택할 수 있습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {presetCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-200"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSamples.map((sample, index) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-900">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
                    <div className="text-center z-10 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-12 h-12 mx-auto mb-2 text-slate-600 dark:text-slate-300" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">샘플 재생</p>
                    </div>
                    {sample.advanced && (
                      <Badge className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500">
                        고급 기능
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {sample.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                      <span>{sample.duration}</span>
                      <span>{sample.tags.length}개 스타일</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {sample.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full mt-3" variant="outline">
                      이 스타일 사용하기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}