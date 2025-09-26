// pages/home.tsx
import React from "react";
import Header from "@/components/layout/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p className="text-gray-600 mt-2">This is the home section of our app.</p>
      </main>
    </div>
  );
};

export default HomePage;
