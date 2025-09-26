// pages/home.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

const HomePage: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  return (
    <>
      <Head>
        <title>Home | ALX Project</title>
      </Head>

      <Header title="ALX Project 0x02" />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Home Page</h1>

        {/* Button to open modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add New Post
        </button>

        {/* Display posts */}
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        {/* Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
};

export default HomePage;
