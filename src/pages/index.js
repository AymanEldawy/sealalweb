import Banner from '@/components/Banner/Banner';
import { CompaniesSection } from '@/components/CompaniesSection/CompaniesSection';
import CompaniesBanner from '@/components/HomeComponents/CompaniesBanner/CompaniesBanner';
import { PopularProducts } from '@/components/HomeComponents/PopularProducts/PopularProducts';
import { Layout } from '@/components/Layout/Layout';
import SubMenu from '@/components/Menu/SubMenu/SubMenu';
import { fetchWord } from '@/lang/fetchWord';
import Head from 'next/head';
import { useContext } from 'react';

import Sidebar from './../components/Sidebar/Sidebar';
import { LanguageContext } from './../context/LangContext';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BestSellerSection } from '@/components/HomeComponents/BestSellerSection/BestSellerSection';
import { FlashSaleBanner } from '@/components/HomeComponents/FlashSaleBanner/FlashSaleBanner';
import Image from 'next/image';
import { Collection } from '@/components/HomeComponents/Collection/Collection';

export default function Home() {
  const { lang } = useContext(LanguageContext);

  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout hideSubMenu>
        <div className='container'>
          <div className='flex gap-4'>
            <Sidebar />
            <div className='flex-1'>
              <SubMenu />
              <Banner />
            </div>
          </div>
          <CompaniesSection />
          <PopularProducts title={fetchWord('popular_products', lang)} />
          <CompaniesBanner />
          <PopularProducts title={fetchWord('opportunity_products', lang)} />
          <BestSellerSection />
        </div>
        <div className='relative z-10 mt-[170px]'>
          <Image src="/images/backdrop-banner.png" alt="Flash sale" height={600} width={1440} className='absolute top-0 left-0 h-full w-screen object-cover' />
          <div className='container relative z-[12]'>
            <FlashSaleBanner />
            <Collection />
          </div>
        </div>
      </Layout>
    </>
  );
}
