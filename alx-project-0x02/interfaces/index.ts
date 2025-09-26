// interfaces/index.ts

// Already existing interface
export interface HeaderProps {
  title?: string;
}

// New CardProps interface
export interface CardProps {
  title: string;
  content: string;
}

// interfaces/index.ts
export interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
