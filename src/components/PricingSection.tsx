import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: '스타터',
    description: '개인 크리에이터를 위한',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      '월 5개 스토리보드 생성',
      '기본 프리셋 템플릿',
      '720p HD 해상도',
      '기본 음원 라이브러리',
      '워터마크 포함'
    ],
    popular: false,
    cta: '무료 시작하기'
  },
  {
    name: '프로',
    description: '소규모 비즈니스를 위한',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      '월 50개 스토리보드 생성',
      '모든 프리셋 + 고급 템플릿',
      '4K UHD 해상도',
      '프리미엄 음원 라이브러리',
      '워터마크 제거',
      '브랜드 컬러 적용',
      '우선 처리'
    ],
    popular: true,
    cta: '프로 시작하기'
  },
  {
    name: '엔터프라이즈',
    description: '대규모 팀을 위한',
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      '무제한 스토리보드 생성',
      '커스텀 브랜드 템플릿',
      '8K 초고해상도',
      '전용 음원 라이브러리',
      '완전한 브랜드 커스터마이징',
      '팀 협업 도구',
      '전담 고객 지원',
      'API 접근'
    ],
    popular: false,
    cta: '상담하기'
  }
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            요금제
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            모든 규모의 비즈니스를 위한 플랜
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            개인부터 기업까지, 필요에 맞는 최적의 요금제를 선택하세요.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>
              월간 결제
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={`text-sm ${isYearly ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>
              연간 결제
            </span>
            <Badge variant="secondary" className="ml-2">
              2개월 무료
            </Badge>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full ${plan.popular ? 'border-blue-500 border-2 shadow-2xl scale-105' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-900`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                    <Star className="w-4 h-4 mr-1" />
                    가장 인기
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {plan.description}
                  </p>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-slate-900 dark:text-white">
                        ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        /월
                      </span>
                    </div>
                    {isYearly && plan.yearlyPrice > 0 && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        연간 ${plan.yearlyPrice} (${plan.monthlyPrice * 12 - plan.yearlyPrice} 절약)
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="pt-6">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}