import Link from "next/link";
import { formatToTimeAgo, formatToWon } from "@/lib/utils";
import { useState, useEffect } from "react";

interface ListProductProps {
  title: string;
  price: number;
  created_at: number;
  photo: string;
  id: number;
}

export default function ListProduct({
  title,
  price,
  created_at,
  photo,
  id,
}: ListProductProps) {
  const [timeAgo, setTimeAgo] = useState<string>(formatToTimeAgo(created_at));
  const [countdownDuration, setCountdownDuration] = useState(created_at); // eslint-disable-line

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownDuration((prev) => {
        const updatedDuration = prev - 1000; // 1000ms 감소
        setTimeAgo(formatToTimeAgo(updatedDuration)); // 감소된 값으로 format 호출
        return updatedDuration; // 새로운 상태
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link href={`/products/${id}`} className="flex gap-5">
      <div className="relative size-20 rounded-md overflow-hidden">
        <img src={photo} alt={title} className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="text-sm">{timeAgo}</span>
        <span className="text-lg font-semibold">{formatToWon(price)}원</span>
      </div>
    </Link>
  );
}
