"use client";

import { useState } from "react";
import Link from "next/link";


export default function ModalDemo() {
    const [isSecondComponentVisible, setSecondComponentVisible] = useState(false);
  
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
                <h2 className="text-xl font-bold mb-4">구매 전 유의사항</h2>
                <p className="text-gray-700 mb-6">
                  보증금 ~~
                </p>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
                  onClick={() => setSecondComponentVisible(true)}
                >
                  동의 후 구매하시겠습니까?
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">물 얼마~</h2>
                <p className="text-gray-700 mb-6">
                  북극곰 뭐~
                </p>
                <Link href="/home">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
                  onClick={() => setSecondComponentVisible(false)}
                >
                  메인으로 가기
                </button>
                </Link>
                
              </>
            )}
          </div>
        </div>
      </div>
    );
  }