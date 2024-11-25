
import { notFound } from "next/navigation";
import DeleteModal from "@/components/modal";

export default async function Page({ params }: { params: { id: string[] } }) {
    const { id } = await params;
    const productId = Number(Array.isArray(id) ? id[0] : id);
    
    if (isNaN(productId)) {
      return notFound();
    }
  
    return <DeleteModal productId={productId} />;
  }