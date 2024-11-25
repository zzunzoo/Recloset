"use client"; // 클라이언트 컴포넌트로 지정

import TabBar from "@/components/tab-bar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-black">
      {/* 폰트 설정 */}
      <style jsx global>{`
        @font-face {
          font-family: 'SBAggroB';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      {/* 로고 영역: 가운데 정렬, "Re: closet" 크기 확대 */}
      <header className="w-full relative mt-10">
        {/* Re: closet과 지속가능한 패션 문구를 수직으로 붙이기 */}
        <div className="flex flex-col items-center justify-center space-y-0">
          {/* Re: closet 텍스트 */}
          <h1 className="text-4xl font-light text-black font-[SBAggroB] text-center">
            Re: closet
          </h1>

          {/* 지속가능한 패션, 지속가능한 지구 문구 */}
          <h2 className="text-xl font-light text-black italic mt-0">
            지속가능한 패션, 지속가능한 지구
          </h2>
        </div>
      </header>

      {/* 로고와 사진들 사이에 공백 추가 */}
      <div className="mt-10">
        {/* 페이지 콘텐츠 */}
        <main className="mb-40">{children}</main>
      </div>

      {/* TabBar 컴포넌트 유지 */}
      <TabBar />
    </div>
  );
}
