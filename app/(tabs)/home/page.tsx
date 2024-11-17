import PostList from "@/components/post-list";

async function getInitialPosts() {
  const posts = [
    {
      id: 1,
      title: "Product 1",
      price: 1000,
      created_at: 60 * 1000,
      photo:
        "https://godomall.speedycdn.net/55d8a5028758a6df7fc148848c817bfe/goods/1000000841/image/detail/1000000841_detail_07.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      price: 2000,
      created_at: 60 * 1000,
      photo:
        "https://godomall.speedycdn.net/55d8a5028758a6df7fc148848c817bfe/goods/1000000841/image/detail/1000000841_detail_07.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      price: 3000,
      created_at: 60 * 1000,
      photo:
        "https://godomall.speedycdn.net/55d8a5028758a6df7fc148848c817bfe/goods/1000000841/image/detail/1000000841_detail_07.jpg",
    },
    {
      id: 4,
      title: "Product 4",
      price: 4000,
      created_at: 60 * 1000,
      photo:
        "https://godomall.speedycdn.net/55d8a5028758a6df7fc148848c817bfe/goods/1000000841/image/detail/1000000841_detail_07.jpg",
    },
    {
      id: 5,
      title: "Product 5",
      price: 5000,
      created_at: 60 * 60 * 1000,
      photo:
        "https://godomall.speedycdn.net/55d8a5028758a6df7fc148848c817bfe/goods/1000000841/image/detail/1000000841_detail_07.jpg",
    },
    {
      id: 6,
      title: "Product 6",
      price: 6000,
      created_at: 60 * 1000,
      photo:
        "https://godomall.speedycdn.net/55d8a5028758a6df7fc148848c817bfe/goods/1000000841/image/detail/1000000841_detail_07.jpg",
    },
  ];
  return posts;
}

export interface InitialPosts {
  id: number;
  title: string;
  price: number;
  created_at: number;
  photo: string;
}

export default async function Home() {
  const initialPosts = await getInitialPosts();
  return (
    <div>
      <PostList initialPosts={initialPosts} />
    </div>
  );
}
