"use client";

import { useState } from "react";
import { InitialPosts } from "@/app/(tabs)/home/page";
import Link from "next/link";
import Image from "next/image";

// PostListProps 타입 정의
interface PostListProps {
  initialPosts: InitialPosts[];
}

export default function ProductList({ initialPosts }: PostListProps) {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="bg-white py-10">
      <div className="grid grid-cols-2 gap-4 px-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="relative bg-[#E3F9ED] p-4 rounded-md"
          >
            {/* 이미지 크기를 키우기 위해 높이를 크게 설정 */}
            <div className="relative w-full h-80 aspect-w-4 aspect-h-6 rounded-none overflow-hidden">
              <Image
                src={post.photo.startsWith("http") ? post.photo : `/uploads/${post.photo}`}
                alt={post.title}
                layout="fill"
                className="object-cover"
              />
            </div>

            {/* 제목과 가격 */}
            <h2 className="text-m font-medium text-gray-800 mt-2">{post.title}</h2>
            <p className="text-lg text-gray-600 mt-1">
              {post.price.toLocaleString() + "원"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
