"use client";

import { useState } from "react";
import { InitialPosts } from "@/app/(tabs)/home/page";
import ListProduct from "./list-post";

interface PostListProps {
  initialPosts: InitialPosts[];
}
export default function ProductList({ initialPosts }: PostListProps) {
  const [posts, setPosts] = useState(initialPosts); // eslint-disable-line
  // const [isLoading, setIsLoading] = useState(false);
  // const [page, setPage] = useState(0);
  // const [isLastPage, setIsLastPage] = useState(false);
  // const trigger = useRef<HTMLSpanElement>(null);
  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       async (
  //         entries: IntersectionObserverEntry[],
  //         observer: IntersectionObserver
  //       ) => {
  //         const element = entries[0];
  //         if (element.isIntersecting && trigger.current) {
  //           observer.unobserve(trigger.current);
  //           setIsLoading(true);
  //           const newProducts = await getMoreProducts(page + 1);
  //           if (newProducts.length !== 0) {
  //             setPage((prev) => prev + 1);
  //             setProducts((prev) => [...prev, ...newProducts]);
  //           } else {
  //             setIsLastPage(true);
  //           }
  //           setIsLoading(false);
  //         }
  //       },
  //       {
  //         threshold: 1.0,
  //       }
  //     );
  //     if (trigger.current) {
  //       observer.observe(trigger.current);
  //     }
  //     return () => {
  //       observer.disconnect();
  //     };
  //   }, [page]);
  //   const onLoadMoreClick = async () => {
  //     setIsLoading(true);
  //     const newProducts = await getMoreProducts(page + 1);
  //     setProducts((prev) => [...prev, ...newProducts]);
  //     setIsLoading(false);
  //   };
  return (
    <div className="p-5 flex flex-col gap-5">
      {posts.map((post) => (
        <ListProduct key={post.id} {...post} />
      ))}
      {/* {!isLastPage ? (
        <span
          ref={trigger}
          style={{
            marginTop: `${page + 1 * 900}vh`,
          }}
          className="mb-96 text-sm font-semibold bg-orange-500 w-fit mx-auto px-3 py-2 rounded-md hover:opacity-90 active:scale-95"
        >
          {isLoading ? "로딩 중" : "Load more"}
        </span>
      ) : null} */}
    </div>
  );
}
