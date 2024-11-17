import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center p-6 min-h-screen">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🌏</span>
        <h1 className="text-4xl">옷 렌탈서비스</h1>
        <h2 className="text-2xl">탄소 저감에 기여하세요!</h2>
      </div>
      <div className="flex flex-col gap-3 items-center w-full">
        <Link href="/home" className="primary-btn text-lg py-2.5">
          시작하기
        </Link>
      </div>
    </div>
  );
}
