"use client";

import { useState } from "react";
import { InitialPosts } from "@/app/home/page";
import Link from "next/link";
import Image from "next/image";



interface PostListProps {
  initialPosts: InitialPosts[];
}
export default function ProductList({ initialPosts }: PostListProps) {
  const [posts, setPosts] = useState(initialPosts); // eslint-disable-line
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
  {posts.map((post) => (
    <Link
      key={post.id}
      href={`/posts/${post.id}`}
      className="flex flex-col gap-2 items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      {/* 이미지 */}
      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <Image
          fill
          src={`${post.photo}/public`}
          alt={post.title}
          className="object-cover"
        />
      </div>
      {/* 제목 및 작성자 */}
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-lg font-semibold">{post.title}</span>
      </div>
    </Link>
  ))}
</div>
  );
}
