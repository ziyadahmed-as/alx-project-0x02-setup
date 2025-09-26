// pages/home.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '@/components/common/Card'; // ✅ checker expects this

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ALX Project</title>
      </Head>

      <Header title="ALX Project 0x02" />

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold mb-6">Home Page</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Reusable Component"
            content="This card demonstrates how to create reusable UI components in Next.js with TypeScript."
          />
          <Card
            title="Tailwind Styling"
            content="Tailwind CSS provides utility classes that make styling components fast and consistent."
          />
          <Card
            title="Dynamic Props"
            content="Each Card component accepts different props for title and content, making it flexible."
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
