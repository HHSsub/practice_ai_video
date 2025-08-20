import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, TrendingUp, Building2 } from 'lucide-react';

interface HeroProps {
  selectedMode: 'new' | 'existing';
  onModeChange: (mode: 'new' | 'existing') => void;
  onGenerate: (input: string, mode: 'new' | 'existing') => void;
}

export default function Hero({ selectedMode, onModeChange, onGenerate }: HeroProps) {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setIsGenerating(true);
    await onGenerate(input, selectedMode);
    setIsGenerating(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10 animate-pulse" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Video Generation Platform
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent leading-tight">
            AI가 6개의 스토리보드를
            <br />
            먼저 제안합니다
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            신규 브랜드는 <span className="font-semibold text-blue-600">트렌드 최적화</span>, 
            기존 브랜드는 <span className="font-semibold text-purple-600">브랜드 가이드 준수</span>.
            <br />
            선택만 하면 영상이 완성됩니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Tabs value={selectedMode} onValueChange={(value) => onModeChange(value as 'new' | 'existing')}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="new" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                신규 브랜드
              </TabsTrigger>
              <TabsTrigger value="existing" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                기존 브랜드
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="new" className="space-y-4">
              <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="space-y-4 p-0">
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      트렌드 추종 모드
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      최신 UGC 트렌드와 상업용 모션 스타일을 반영한 스토리보드를 제안합니다.
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      placeholder="제품 키워드 또는 URL을 입력하세요"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1"
                      onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                    />
                    <Button 
                      onClick={handleGenerate}
                      disabled={!input.trim() || isGenerating}
                      className="px-6"
                    >
                      {isGenerating ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        '생성하기'
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['UGC', 'Commercial', 'Trending', 'Social Media'].map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="existing" className="space-y-4">
              <Card className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="space-y-4 p-0">
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      브랜드 최적화 모드
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      브랜드 가이드라인과 기존 자산을 분석하여 맞춤형 스토리보드를 제안합니다.
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      placeholder="브랜드명, 웹사이트 URL 또는 레퍼런스를 입력하세요"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1"
                      onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                    />
                    <Button 
                      onClick={handleGenerate}
                      disabled={!input.trim() || isGenerating}
                      className="px-6"
                    >
                      {isGenerating ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        '분석하기'
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Brand Optimized', 'Logo Integration', 'Color Matching', 'Style Consistent'].map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Button size="lg" className="mt-4 px-8 py-6 text-lg" onClick={handleGenerate} disabled={!input.trim() || isGenerating}>
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  스토리보드 생성 중...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  무료로 스토리보드 받아보기
                </>
              )}
            </Button>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              신용카드 불필요 • 즉시 체험 가능
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}