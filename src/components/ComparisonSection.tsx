import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Building2, Zap, Target, Palette, Settings } from 'lucide-react';

export default function ComparisonSection() {
  const newBrandFeatures = [
    { icon: TrendingUp, title: '트렌드 분석', desc: '최신 UGC 및 상업용 트렌드 반영' },
    { icon: Zap, title: '빠른 시작', desc: '카테고리 선택만으로 즉시 생성' },
    { icon: Target, title: '채널 최적화', desc: 'SNS 플랫폼별 맞춤 최적화' }
  ];

  const existingBrandFeatures = [
    { icon: Building2, title: '브랜드 일관성', desc: '기존 가이드라인 완벽 준수' },
    { icon: Palette, title: '커스터마이징', desc: '로고, 컬러, 폰트 자동 적용' },
    { icon: Settings, title: '고급 제어', desc: '톤앤매너 및 레퍼런스 기반 생성' }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            두 가지 접근 방식
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            트렌드 vs 브랜드 최적화
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            신규 브랜드와 기존 브랜드 각각에 맞는 최적의 스토리보드 생성 방식을 제공합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-900 dark:text-blue-100">
                      신규 브랜드
                    </CardTitle>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      트렌드 추종 모드
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {newBrandFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <feature.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    입력 요소
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['키워드', '카테고리', '타겟 채널', '영상 길이'].map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-600 rounded-lg">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-purple-900 dark:text-purple-100">
                      기존 브랜드
                    </CardTitle>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      브랜드 최적화 모드
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {existingBrandFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <feature.icon className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    입력 요소
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['로고', '브랜드 컬러', '폰트', '레퍼런스 URL', '톤앤매너'].map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}