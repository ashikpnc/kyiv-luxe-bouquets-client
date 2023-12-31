import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.scss";
import MainSection from "@/components/MainSection";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyiv LuxeBouquets</title>
        <meta name="description" content="Flowers selling ecom app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection />
    </>
  );
}
