import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from "framer-motion";

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid min-w-min grid-cols-12 gap-6 my-10 px-20 m:px-10"> {/*style={{ height: 'calc(100vh - 5rem)' }}*/}
        <div className="h-full bg-white dark:bg-dark-500 2xl:col-span-3 xl:col-span-4 lg:col-span-5 md:col-span-5 col-span-12 rounded-2xl p-4 text-center shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="bg-white dark:bg-dark-500 flex flex-col min-w-min 2xl:col-span-9 xl:col-span-8 lg:col-span-7 md:col-span-7 col-span-12 rounded-2xl overflow-hidden shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;