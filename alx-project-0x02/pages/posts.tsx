// pages/posts.tsx
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
      const data = await res.json();
      const formattedPosts: PostProps[] = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));
      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PostsPage;
