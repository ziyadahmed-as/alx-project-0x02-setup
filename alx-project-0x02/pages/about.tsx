// pages/about.tsx
import React from "react";
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p className="text-gray-600">Below are examples of our reusable Button component:</p>

      <div className="flex gap-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default AboutPage;
