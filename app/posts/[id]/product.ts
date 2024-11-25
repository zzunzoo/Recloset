// /app/posts/[id]/product.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProductById = async (id: number) => {
  try {
    // findUnique 쿼리로 상품 조회
    const product = await prisma.post.findUnique({
      where: { id: id },
      select: {
        id: true,
        title: true,
        price: true,
        rentalPrice: true,
        description: true,
        user: {
          select: {
            username: true,
          },
        },
      },
    });

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};
