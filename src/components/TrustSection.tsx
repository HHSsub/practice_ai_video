import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Users, Award } from 'lucide-react';

const trustMetrics = [
  {
    icon: Zap,
    title: '생성 속도',
    value: '평균 2-5분',
    description: '스토리보드 선택 후 완성까지'
  },
  {
    icon: Shield,
    title: '보안 인증',
    value: 'SOC 2 준수',
    description: '브랜드 자산 안전 보장'
  },
  {
    icon: Users,
    title: '활성 사용자',
    value: '10,000+',
    description: '전 세계 브랜드가 신뢰'
  },
  {
    icon: Award,
    title: '품질 보장',
    value: '4K 해상도',
    description: '프리미엄 영상 품질'
  }
];

const brandLogos = [
  'Startup A', 'Agency B', 'Brand C', 'Company D', 'Studio E', 'Agency F'
];

export default function TrustSection() {
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
            신뢰와 성능
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            검증된 기술력과 안정성
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            전 세계 브랜드들이 신뢰하는 AI 영상 생성 플랫폼입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full bg-slate-50 dark:bg-slate-800 border-0">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-blue-600 rounded-full w-fit mx-auto">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {metric.value}
                    </h3>
                    <p className="font-semibold text-slate-700 dark:text-slate-300">
                      {metric.title}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {metric.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-8">
            신뢰받는 파트너들
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brandLogos.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg"
              >
                <span className="text-slate-600 dark:text-slate-400 font-medium">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}