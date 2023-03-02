import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../Navbar';
type PropsWithChildren = {
  children: React.ReactNode
}

import styles from './MainLayout.module.css';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
          
          <Head>
            <title>Home - Diana Rut</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <Navbar />
    
          <main className={styles.main}>
    
            { children }
    
          </main>     
        </div>
      )
};
