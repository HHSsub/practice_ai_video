import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: '스토리보드 생성은 얼마나 걸리나요?',
    answer: '입력 후 평균 30초 내에 6개의 스토리보드 옵션을 제공합니다. 선택한 스토리보드를 기반으로 한 영상 생성은 2-5분 정도 소요됩니다.'
  },
  {
    question: '생성된 영상의 저작권은 누구에게 있나요?',
    answer: '생성된 모든 영상의 저작권은 사용자에게 있습니다. 상업적 용도로도 자유롭게 사용하실 수 있으며, 별도의 로열티나 추가 비용은 없습니다.'
  },
  {
    question: '브랜드 가이드라인은 어떻게 적용되나요?',
    answer: '기존 브랜드 모드에서는 로고, 브랜드 컬러, 폰트, 톤앤매너를 업로드하시면 AI가 자동으로 분석하여 일관된 브랜드 아이덴티티를 유지하는 영상을 생성합니다.'
  },
  {
    question: '어떤 해상도와 형식을 지원하나요?',
    answer: '스타터: 720p HD, 프로: 4K UHD, 엔터프라이즈: 8K까지 지원합니다. MP4, MOV, WebM 형식으로 다운로드 가능하며, 다양한 SNS 플랫폼에 최적화된 비율(16:9, 9:16, 1:1)을 제공합니다.'
  },
  {
    question: '음원과 배경음악은 어떻게 처리되나요?',
    answer: '모든 음원은 저작권이 클리어된 라이선스 음원을 사용합니다. 프리미엄 플랜에서는 더 다양한 음원 라이브러리에 접근할 수 있으며, 직접 음원을 업로드하여 사용할 수도 있습니다.'
  },
  {
    question: '팀 협업은 어떻게 진행하나요?',
    answer: '프로 이상 플랜에서는 팀 멤버를 초대하여 프로젝트를 공유하고, 댓글과 승인 워크플로를 통해 협업할 수 있습니다. 엔터프라이즈 플랜에서는 더 고급 협업 도구를 제공합니다.'
  },
  {
    question: '데이터 보안은 어떻게 보장되나요?',
    answer: 'SOC 2 Type II 인증을 받았으며, 모든 데이터는 암호화되어 저장됩니다. 업로드된 브랜드 자산과 생성된 콘텐츠는 철저히 보호되며, GDPR 및 개인정보보호 규정을 준수합니다.'
  },
  {
    question: '환불 정책은 어떻게 되나요?',
    answer: '첫 구매 후 14일 내에 만족하지 않으시면 100% 환불해드립니다. 무료 플랜으로 먼저 서비스를 체험해보신 후 결정하실 수 있습니다.'
  }
];

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            자주 묻는 질문
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            궁금한 것이 있으신가요?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            가장 자주 묻는 질문들에 대한 답변을 확인해보세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-200 dark:border-slate-700 rounded-lg px-6 bg-slate-50 dark:bg-slate-800"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}