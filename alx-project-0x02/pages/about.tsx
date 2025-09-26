// pages/about.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | ALX Project</title>
      </Head>

      <Header title="ALX Project 0x02" />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <p className="text-lg text-gray-700">
          This page explains details about the ALX Project. It demonstrates routing in Next.js using the Pages Router.
        </p>
      </main>
    </>
  );
};

export default AboutPage;
