'use client';

import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import AsideNav from './components/AsideNav';
import AddFriendModel from '@/components/AddFriendModel';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from '../redux/store';
import ReactQueryProvider from './ReactQueryProvider';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Provider store={store}>
              <section className='grid grid-cols-12 row-span-1 h-screen'>
                <div className='col-span-2 '>
                  <AsideNav />
                </div>

                <div className='col-span-10 h-full'>{children}</div>
              </section>
            </Provider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
