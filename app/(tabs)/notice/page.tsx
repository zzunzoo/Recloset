export default function Notice() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-green-50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
        <h1
          className="text-2xl font-bold text-center text-green-800 mb-6"
          style={{ fontFamily: "RIDIBatang" }}
        >
          "RE:CLOSET 과 함께, 더 나은 세상을 만들어요."
        </h1>

        <ol
          className="text-lg text-gray-800 space-y-6"
          style={{ fontFamily: "RIDIBatang", lineHeight: "1.8" }}
        >
          <li>
            <strong>1. 지금까지 의류렌탈 플랫폼 RE:CLOSET을 통해 절약한 물 사용량, 줄어든 탄소 배출량</strong>
            <ul className="mt-2 text-gray-700 text-sm">
              <li>
                지금까지 15벌의 의류를 렌탈해 약 45000L의 물을 절약했어요! 옷을 렌탈하면서 탄소배출을 67.5kg 줄였습니다.
              </li>
            </ul>
            <p className="mt-2 text-green-600 text-sm">
              사용자의 작은 행동과 관심이 큰 변화를 만들고 있습니다.
            </p>
          </li>
          <br />

          <li>
            <strong>2. 기부로 함께하기</strong>
            <p className="mt-2 text-gray-700 text-sm">
              현재까지 적립한 렌탈 포인트로 환경보호 단체를 후원할 수 있습니다.
            </p>
            
            <p className="mt-2 text-green-600 text-sm">기부 참여 후 디지털 배지를 얻어보세요.</p>
          </li>
          <br />

          <li>
            <strong>3. 더 나은 세상을 위한 팁</strong>
            <p className="mt-2 text-gray-700 text-sm">
              "작은 실천이 지구를 살립니다! 친환경 세탁, 에너지 절약, 지속가능한 브랜드를 선택해 더 나은 세상을 함께
              만들어가요."
            </p>
          </li>
          <br />

          <li>
            <strong>4. 약속드립니다</strong>
            <p className="mt-2 text-gray-700 text-sm">
              "RE:CLOSET은 지구를 위한 여정을 함께하며, 모든 환경 보호 실천을 투명하게 공유합니다. 지구를 지키는 여정에
              여러분의 참여가 필요합니다."
            </p>
          </li>
          <br />
        </ol>

        <div className="mt-10 flex justify-center">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-green-700"
            style={{ fontFamily: "RIDIBatang" }}
          >
            참여하세요
          </button>
        </div>
      </div>
    </div>
  );
}
