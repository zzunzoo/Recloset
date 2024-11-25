"use server";
import { z } from "zod";
import db from "@/lib/prisma";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const PostSchema = z.object({
  id: z.string().transform((val) => val ? parseInt(val) : undefined).optional(),
  photo: z.string({
    required_error: "사진은 필수입니다.",
  }),
  title: z.string({
    required_error: "제목은 필수입니다.",
  }),
  description: z.string({
    required_error: "설명은 필수입니다.",
  }),
  price: z.coerce.number({
    required_error: "가격은 필수입니다.",
  }),
});

export async function uploadProduct(formData: FormData) {
  const data = {
    id: formData.get("id"),
    photo: formData.get("photo"),
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
  };

  const result = PostSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    if (session.id) {
      const post = await db.post.upsert({
        where: {
            id: result.data.id,
        },
        create: {
          title: result.data.title,
          description: result.data.description,
          price: result.data.price,
          photo: result.data.photo,
          user: {
            connect: {
              id: session.id,
            },
          },
        },
        update: {
          title: result.data.title,
          description: result.data.description,
          price: result.data.price,
          photo: result.data.photo,
          user: {
            connect: {
              id: session.id,
            },
          },
        },
      });
      redirect(`/posts/${post.id}`);
    }
  }
}

export async function getUploadUrl() {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
}
