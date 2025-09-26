// pages/home.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ALX Project</title>
      </Head>

      <Header title="ALX Project 0x02" />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <p className="text-lg text-gray-700">
          This is the home page, created as part of the basic routing task in Next.js.
        </p>
      </main>
    </>
  );
};

export default HomePage;
