import BaseLayout from 'components/BaseLayout';
import Image from 'next/image';
import Title from 'components/Title';
import napkinsImg from 'public/images/napkins-pulire.jpeg';
import { useRouter } from 'next/router';
import head from 'data/head';
import HeadSection from 'components/HeadSection';
import home from 'data/home';
import { useEffect } from 'react';

const FourZeroFour = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/404');
  }, []);

  return (
    <>
      <HeadSection
        title={head.fourZeroFour.title}
        description={head.fourZeroFour.description}
        indexing={false}
        ogData={home.ogData}
        url={head.fourZeroFour.url}
      />
      <BaseLayout currentPageUrl={router.pathname}>
        <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-justify w-full min-h-pageView tall:min-h-[70vh] tallMobile:min-h-[calc(100vh-100px)] font-redHat">
          <div className="flex pt-6 flex-col w-full h-full justify-center items-center lg:w-2/5 text-base xs:text-lg tablet:text-xl">
            <Title title="404" />
            <p>Strona przez Ciebie wybrana nie istnieje.</p>
            <p>Proszę wybierz odpowiednią stronę z menu.</p>
          </div>
          <div className="p-2 py-8 lg:p-8 lg:w-1/2 lg:py-16">
            <Image priority src={napkinsImg} alt="Serwetki z logiem pulire" />
          </div>
        </section>
      </BaseLayout>
    </>
  );
};

export default FourZeroFour;
