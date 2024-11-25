"use client";

import Link from "next/link";
import {
  NewspaperIcon as OutlineNewspaperIcon,
  HomeIcon as OutlineHomeIcon,
  UserIcon as OutlineUserIcon,
  DocumentIcon as OutlineDocumentIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as SolidHomeIcon,
  UserIcon as SolidUserIcon,
  NewspaperIcon as SolidNewspaperIcon,
  DocumentIcon as SolidDocumentIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full mx-auto max-w-screen-sm grid grid-cols-4 border-neutral-600 border-t px-4 py-2 text-white bg-neutral-800">
      {/* 홈 버튼 */}
      <Link href="/home" className="flex flex-col items-center">
        {pathname === "/home" ? (
          <SolidHomeIcon className="w-6 h-6" />
        ) : (
          <OutlineHomeIcon className="w-6 h-6" />
        )}
        <span className="text-sm">홈</span>
      </Link>

      {/* ABOUT 버튼 */}
      <Link href="/about" className="flex flex-col items-center">
        {pathname === "/about" ? (
          <SolidDocumentIcon className="w-6 h-6" />
        ) : (
          <OutlineDocumentIcon className="w-6 h-6" />
        )}
        <span className="text-sm">정보</span>
      </Link>

      {/* NOTICE 버튼 */}
      <Link href="/notice" className="flex flex-col items-center">
        {pathname === "/notice" ? (
          <SolidNewspaperIcon className="w-6 h-6" />
        ) : (
          <OutlineNewspaperIcon className="w-6 h-6" />
        )}
        <span className="text-sm">공지 사항</span>
      </Link>

      {/* 나의 계정 버튼 */}
      <Link href="/profile" className="flex flex-col items-center">
        {pathname === "/profile" ? (
          <SolidUserIcon className="w-6 h-6" />
        ) : (
          <OutlineUserIcon className="w-6 h-6" />
        )}
        <span className="text-sm">나의 계정</span>
      </Link>
    </div>
  );
}
