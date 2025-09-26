// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ALX Project — Home</title>
        <meta name="description" content="Starter Next.js app with TypeScript, ESLint and Tailwind CSS" />
      </Head>

      <Header title="ALX Project 0x02" />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to ALX Project</h1>
        <p className="text-lg text-gray-700">
          This project is scaffolded with Next.js + TypeScript + ESLint + Tailwind CSS.
          Use this starter to build your pages and components.
        </p>
      </main>
    </>
  );
};

export default Home;
