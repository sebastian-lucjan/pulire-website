import Header from 'components/Header';
import ViewWrapper from 'components/ViewWrapper';
import Footer from 'components/Footer';
import PageWrapper from 'components/PageWrapper';
import ScrollTop from 'components/ScrollTop';
import MobileNavigation from 'components/MobileNavigation';
import { PageContext } from 'data/pageContext';
import useMobileNav from 'hooks/useMobileNav';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Router } from 'next/router';
import PuffLoader from 'react-spinners/PuffLoader';
import useCurrentY from 'hooks/useCurrentY';
import useOnScreen from 'hooks/useOnScreen';
import paths from 'data/paths';
import useCookie from 'hooks/useCookie';
import Cookies from 'components/Cookies';

export default function BaseLayout({ children, currentPageUrl = '/' }) {
  const { isTablet, isMobileMenuActive, isDesktop, toggleMenuActive } = useMobileNav();
  const [isLoading, setIsLoading] = useState(false);
  const currentPositionY = useCurrentY();
  const ref = useRef();
  const onScreen = useOnScreen(ref, '-50px');
  const { isActiveCookiePopUp, handleCookiesPolicyAgree, handleDismissCookiesPopUp } = useCookie();

  const providedData = useMemo(
    () => ({
      currentPage: currentPageUrl,
      isMobileMenuActive,
      toggleMenuActive,
      isTablet,
      handleCookiesPolicyAgree,
      handleDismissCookiesPopUp,
    }),
    [
      currentPageUrl,
      isMobileMenuActive,
      toggleMenuActive,
      isTablet,
      handleCookiesPolicyAgree,
      handleDismissCookiesPopUp,
    ],
  );

  useEffect(() => {
    const startLoaded = () => setIsLoading(true);
    const completeLoaded = () => setIsLoading(false);

    Router.events.on('routeChangeStart', startLoaded);
    Router.events.on('routeChangeComplete', completeLoaded);

    return () => {
      Router.events.off('routeChangeStart', startLoaded);
      Router.events.off('routeChangeComplete', completeLoaded);
    };
  }, [isLoading]);

  return (
    <PageContext.Provider value={providedData}>
      <PageWrapper>
        <Header />
        {isLoading && !isDesktop ? (
          <div className="flex fix top-0 left-0 overflow-hidden justify-center items-center w-screen h-screen bg-white">
            <PuffLoader size={120} />
          </div>
        ) : (
          <ViewWrapper>{children}</ViewWrapper>
        )}
        {!isTablet && isMobileMenuActive ? <MobileNavigation setIsLoading={setIsLoading} /> : null}
        {isTablet && isMobileMenuActive ? null : <Footer ref={ref} />}
        {currentPositionY > 100 && currentPageUrl !== paths.contact ? <ScrollTop white={onScreen} /> : null}
        {isActiveCookiePopUp ? <Cookies /> : null}
      </PageWrapper>
    </PageContext.Provider>
  );
}
