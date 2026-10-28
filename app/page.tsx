import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProblemStatement } from '@/components/ProblemStatement';
import { ProposedSolution } from '@/components/ProposedSolution';
import { Features } from '@/components/Features';
import { Walkthrough } from '@/components/Walkthrough';
import { Gallery } from '@/components/Gallery';
import { TechnicalArchitecture } from '@/components/TechnicalArchitecture';
import { PrivacySection } from '@/components/PrivacySection';
import { SocialImpact } from '@/components/SocialImpact';
import { ProjectInfo } from '@/components/ProjectInfo';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <ProblemStatement />
        <ProposedSolution />
        <Features />
        <Walkthrough />
        <Gallery />
        <TechnicalArchitecture />
        <PrivacySection />
        <SocialImpact />
        <ProjectInfo />
      </main>
      <Footer />
    </div>
  );
}
