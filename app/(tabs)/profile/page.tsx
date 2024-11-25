import db from "@/lib/prisma";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
}

export default async function Profile() {
  const user = await getUser();
  const logOut = async () => {
    "use server";
    const session = await getSession();
    await session.destroy();
    redirect("/");
  };
  return (
    <div>
      <h1 className="text-2xl">안녕하세요! {user?.username}!</h1>
      <form action={logOut}>
        <button className="mt-5 h-10 primary-btn">로그 아웃하기</button>
      </form>
    </div>
  );
}
