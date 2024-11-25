"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ModalDemo() {
  const [isSecondComponentVisible, setSecondComponentVisible] = useState(false);
  const [waterSaved, setWaterSaved] = useState(0); // 물 절약 비율 초기화

  useEffect(() => {
    if (waterSaved < 27) {
      const interval = setInterval(() => {
        setWaterSaved((prev) => prev + 1); // 10%씩 증가
      }, 70); // 1초마다 10%씩 증가

      return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
    }
  }, [waterSaved]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            onClick={() => window.location.reload()} // Modal close
          >
            ✖
          </button>

          {/* Main Content */}
          {!isSecondComponentVisible ? (
            <>
              <h2 className="text-xl font-bold mb-4">렌탈 전 유의사항</h2>
              <div className="text-gray-700 mb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>렌탈 기간:</strong> 렌탈 의류는 대여 기간 동안만 사용 가능합니다. 기본적으로 대여 기간은 <strong>7일</strong>이며, 연장 시 사전 문의가 필요합니다.</li>
                  <li><strong>세탁 및 관리:</strong> 의류를 깨끗하게 관리하고, 반납 시 반드시 세탁되어야 하며 손상된 경우 수리비용이 청구됩니다.</li>
                  <li><strong>반납:</strong> 대여 기간 종료 후 의류를 반납해야 하며, 기한 내 반납하지 않으면 추가 요금이 부과됩니다.</li>
                  <li><strong>손상 및 분실:</strong> 의류가 손상되거나 분실된 경우, 사용자에게 수리비용 또는 구매비용이 부과될 수 있습니다.</li>
                  <li><strong>반품 및 환불:</strong> 사이즈나 스타일이 맞지 않을 경우 반품 및 환불이 어려운 점 양해 부탁드립니다.</li>
                  <li><strong>보험 옵션:</strong> 의류 손상 및 분실에 대비해 보험 옵션을 선택할 수 있습니다. 보험을 선택한 경우, 일부 비용이 보상됩니다.</li>
                </ul>
              </div>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
                onClick={() => setSecondComponentVisible(true)}
              >
                동의 후 진행하시겠습니까?
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-4">렌탈 완료!</h2>
              <p className="text-gray-700 mb-6">렌탈이 완료되었습니다! 지구를 지키는 지속 가능한 패션을 함께 해주셔서 정말 감사드립니다.</p>

              {/* 물 절약 이미지와 진행 상태 표시 */}
              <div className="flex justify-center mb-6">
                <div className="relative w-64 h-64">
                  {/* 물 절약 이미지와 비율 표시 */}
                  <img 
                    src="/water_safe.jpg"  // 절약한 물의 양을 나타내는 이미지 (progress bar 포함 가능)
                    alt="물 절약"
                    className="w-full h-full object-contain"
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-full bg-blue-500 opacity-50"
                    style={{ height: `${waterSaved}%` }}  // 물 절약 비율에 따라 물이 채워짐
                  ></div>
                </div>
              </div>
              <p className="text-lg text-gray-700">다음 목표량(10t)까지 절약한 물의 양: {waterSaved}%</p>

              <Link href="/home">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
                  onClick={() => setSecondComponentVisible(false)}
                >
                  돌아가기
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
