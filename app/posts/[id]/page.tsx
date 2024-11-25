import db from "@/lib/prisma";
import getSession from "@/lib/session";
import { formatToWon } from "@/lib/Calcdate";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

// 세션을 이용해서 게시물 소유자 확인
async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === userId;
  }
  return false;
}

// 게시물과 작성자 정보 가져오기
async function getProduct(id: number) {
  const product = await db.post.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true, // 작성자의 이름을 가져옴
        },
      },
    },
  });
  return product;
}

export default async function ProductDetail({ params }: { params: { id: string[] } }) {
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
    <div className="bg-white pb-40">
      {/* 상품 이미지 */}
      <div className="relative aspect-square my-6">
        <Image
          fill
          src={post.photo.startsWith("http") ? post.photo : `/uploads/${post.photo}`} 
          alt={post.title}
          className="object-cover rounded-lg"
        />
      </div>

      {/* 작성자 및 상품 제목 */}
      <div className="p-5 border-b border-neutral-700">
        <span className="text-lg font-semibold text-gray-700">{post.user.username}</span>
      </div>

      {/* 상품 제목 */}
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{post.title}</h1>
      </div>

      {/* 가격 */}
      <div className="p-5">
        <p className="text-lg font-semibold text-gray-700">
          가격: {formatToWon(post.price)}원
        </p>
      </div>

      {/* 상세설명 */}
      <div className="p-5 border-t border-neutral-700">
        <h3 className="text-lg font-semibold text-gray-700">상세설명</h3>
        <p className="mt-3 text-lg text-gray-600">{post.description}</p>
      </div>

      {/* 가격 및 버튼 */}
      <div className="p-5 fixed w-full bottom-0 bg-white flex justify-between items-center max-w-screen-sm">
      <Link href='/home'>
            <button className="bg-green-500 px-5 py-2.5 rounded-md text-white font-semibold">
              돌아가기
            </button>
          </Link>
        {isOwner ? (
          <Link href={`/delete/${id}`}>
            <button className="bg-green-500 px-5 py-2.5 rounded-md text-white font-semibold">
              수정/삭제 하기
            </button>
          </Link>
        ) : (
          <Link href={`/buy/${id}`}>
            <button className="bg-green-500 px-5 py-2.5 rounded-md text-white font-semibold">
              지금 렌탈하기
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}