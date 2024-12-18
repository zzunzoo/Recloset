import PostList from "@/components/post-list";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/solid";
import db from "@/lib/prisma";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

async function getInitialPosts() {
  const posts = await db.post.findMany({
    select: {
      title: true,
      price: true,
      rentalPrice: true,
      created_at: true,
      photo: true,
      id: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return posts.map(post => ({
    ...post,
    created_at: post.created_at.getTime()
  }));
}

export interface InitialPosts {
  id: number;
  title: string;
  price: number;
  created_at: number;
  photo: string;
}

export default async function Home() {
  const initialPosts = await getInitialPosts();
  return (
    <div>
      <PostList initialPosts={initialPosts} />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-full pointer-events-none"> {/* max-w-full로 변경 */}
        <div className="relative w-full flex justify-end gap-4 px-4 pointer-events-auto">
          <Link
            href="/posts/add"
            className="bg-green-500 flex items-center justify-center rounded-full size-16 fixed bottom-24 right-8 text-white transition-colors hover:bg-green-400"
          >
            <PlusIcon className="size-10" />
          </Link>
        </div>
      </div>
    </div>
  );
}
  