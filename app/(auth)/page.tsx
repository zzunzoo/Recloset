import Link from "next/link";
import getSession from "@/lib/session";

export default async function Home() {
  const session = await getSession();
  return (
    <div className="flex flex-col justify-between items-center p-6 min-h-screen">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <h1 className="text-4xl font-stunning">Recloset</h1>
        <h2 className="text-2xl font-bmjua text-stone-700">지속 가능한 패션, 지속 가능한 지구</h2>
      </div>
      <div className="flex flex-col gap-3 items-center w-full">
        <Link href="/join" className="primary-btn text-lg py-2.5">
          시작하기
        </Link>
        <div className="flex gap-2">
          {session ?  (<div><span>이미 계정이 있나요?</span><Link href="/login" className="hover:underline">
            로그인
          </Link></div>) : null}
        </div>
      </div>
    </div>
  );
}
