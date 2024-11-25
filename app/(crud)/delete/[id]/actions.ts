"use server";
import db from "@/lib/prisma";
import { redirect } from "next/navigation";


export async function deleteProduct(id: number) {

    const product = await db.post.delete({
      where: {
        id: id,
      }
    });

    redirect("/home");
  
}
