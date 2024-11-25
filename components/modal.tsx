"use client";

import { useState } from "react";
import Link from "next/link";
import { deleteProduct } from "@/app/(crud)/delete/[id]/actions";

export default function DeleteModal({ productId }: { productId: number }) {
  const [isSecondComponentVisible, setSecondComponentVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
          {/* Close Button */}

          {/* Main Content */}
          {!isSecondComponentVisible ? (
            <>
              <h2 className="text-xl font-bold mb-4">원하는 작업을 선택해주세요.</h2>
              <div className="text-gray-700 mb-6">
              </div>
              <Link href={`/edit/${productId}`}>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
              >
                수정하기
              </button>
              </Link>
              <button
                className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
                onClick={() => setSecondComponentVisible(true)}
              >
                삭제하기
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-4">정말로 삭제하시겠습니까?</h2>
            <button 
              onClick={() => deleteProduct(productId)} 
              className="bg-green-500 px-5 py-2.5 rounded-md text-white font-semibold"
            >
              삭제하기
            </button>

             
            </>
          )}
        </div>
      </div>
    </div>
  );
}


