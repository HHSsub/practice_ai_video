import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react';

const footerLinks = {
  product: {
    title: '제품',
    links: [
      { label: '기능', href: '#features' },
      { label: '요금제', href: '#pricing' },
      { label: '템플릿', href: '#templates' },
      { label: 'API', href: '#api' }
    ]
  },
  company: {
    title: '회사',
    links: [
      { label: '소개', href: '#about' },
      { label: '블로그', href: '#blog' },
      { label: '채용', href: '#careers' },
      { label: '파트너십', href: '#partners' }
    ]
  },
  support: {
    title: '지원',
    links: [
      { label: '도움말', href: '#help' },
      { label: '문의하기', href: '#contact' },
      { label: '상태 페이지', href: '#status' },
      { label: '커뮤니티', href: '#community' }
    ]
  },
  legal: {
    title: '법적 고지',
    links: [
      { label: '개인정보처리방침', href: '#privacy' },
      { label: '이용약관', href: '#terms' },
      { label: '쿠키 정책', href: '#cookies' },
      { label: '라이선스', href: '#license' }
    ]
  }
};

const socialLinks = [
  { icon: Github, href: '#github', label: 'GitHub' },
  { icon: Twitter, href: '#twitter', label: 'Twitter' },
  { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  { icon: Mail, href: '#email', label: 'Email' }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AI Video Studio</span>
              </div>
              <p className="text-slate-300 max-w-md">
                AI가 제안하는 6개의 스토리보드로 시작하는 
                차세대 영상 제작 플랫폼입니다.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white hover:bg-slate-800"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="my-8 bg-slate-700" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-400 text-sm">
            © 2024 AI Video Studio. 모든 권리 보유.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <span>한국어</span>
            <Separator orientation="vertical" className="h-4 bg-slate-600" />
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-auto p-0">
              English
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}