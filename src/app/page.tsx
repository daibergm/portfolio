'use client';
import { ThemeProvider } from 'next-themes';
import Hero from '../components/hero/Hero';
import Seo from '../components/seo/Seo';
import Header from '@/components/header/Header';

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
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
