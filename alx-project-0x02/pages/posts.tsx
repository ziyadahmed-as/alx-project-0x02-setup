// pages/posts.tsx
import React from "react";
import Header from "@/components/layout/Header";

const PostsPage = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="text-gray-600 mt-2">Here you can view all posts.</p>
      </main>
    </div>
  );
};

export default PostsPage;
