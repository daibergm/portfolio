'use client';
import { ThemeProvider } from 'next-themes';
import { About, Brand, Footer, Header, Seo, Service } from '@/components';

export default function AboutPage() {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
        <Seo pageTitle="About" />
        {/* End Head for Seo */}

        <Header />
        {/* End  Header */}

        <div className="container lg:rounded-2xl bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            {/* Start top about info */}
            <div className="py-12">
              <h2 className="after-effect after:left-52 mt-12 lg:mt-0 text-white">About Me</h2>
              {/* Page Title */}
              <About />
            </div>
            {/* End top about info */}

            {/* Start about service info */}
            <div className="pb-12 ">
              <h3 className="text-[35px] text-white font-medium pb-5">What I do!</h3>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                {/* Experience information  */}

                <Service />
              </div>
            </div>
            {/* End about service info */}

            {/* Start Client Slider */}
            <div className="bg-[#0D0D0D] max-w-full h-auto   py-10 rounded-xl">
              <h3 className="text-center text-white text-6xl mb-3 font-semibold ">Clients</h3>
              <Brand />
            </div>
            {/* End Client Slider */}

            {/* Start Common Footer  */}
            <Footer />
            {/* End Common Footer  */}
          </div>
          {/* End fade effect */}
        </div>
        {/* End container */}
      </div>
    </ThemeProvider>
  );
}
