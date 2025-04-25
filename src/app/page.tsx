import { LanguageProvider } from '@/contexts/LanguageContext';
import ProblemStatement from '@/components/layouts/landing/ProblemStatement';
import Features from '@/components/layouts/landing/Features';
import Landing from '@/components/layouts/landing/landing';
export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Landing />
        {/* <ProblemStatement /> */}
        {/* <Features /> */}
      </main>
    </LanguageProvider>
  );
}
