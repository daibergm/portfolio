'use client';
import { ThemeProvider } from 'next-themes';
import { Header, Hero, Seo } from '@/components';

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
        <Seo pageTitle="Home" />
        {/* End Head for Seo */}

        <Header />
        {/* End  Header */}

        <Hero />
        {/* End  hero */}

        {/* End preview page */}
      </div>
    </ThemeProvider>
  );
}
