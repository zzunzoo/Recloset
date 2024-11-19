import db from "@/lib/prisma";
import getSession from "@/lib/session";
import { formatToWon } from "@/lib/Calcdate";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";  // Add this import
import React from "react";  // Add this at the top with other imports

type Params = Promise<{ id: string[] }>;


async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === userId;
  }
  return false;
}

async function getProduct(id: number) {
  const product = await db.post.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
  return product;
}

export default async function ProductDetail({ params }: { params: Params }) {
  const { id } = await params;
  const productId = Number(Array.isArray(id) ? id[0] : id);
  if (isNaN(productId)) {
    return notFound();
  }
  const post = await getProduct(productId);
  if (!post) {
    return notFound();
  }
  const isOwner = await getIsOwner(post.userId);
  return (
    <div className="pb-40">
      <div className="relative aspect-square">
        <Image
          fill
          src={`${post.photo}/public`}
          alt={post.title}
          className="object-cover"
        />
      </div>
      <div className="p-5 flex items-center gap-3 border-b border-neutral-700">
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{post.title}</h1>
        <p>{post.description}</p>
      </div>
      <div className="fixed w-full bottom-0 p-5 pb-10 bg-white-800 flex justify-between items-center max-w-screen-sm">
        <span className="font-semibold text-xl">
          {formatToWon(post.price)}원
        </span>
        {isOwner ? (
          <button className="bg-green-500 px-5 py-2.5 rounded-md text-white font-semibold">
            글 지우기 
          </button>
          
        ) : <Link href={`/buy/${id}`}><button className="bg-green-500 px-5 py-2.5 rounded-md text-white font-semibold">
        지금 렌탈하기
      </button></Link>}
       

      </div>
    </div>
  );
}
