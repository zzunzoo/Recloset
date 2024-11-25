"use client"; // Add this line at the top

import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { getUploadUrl, uploadProduct } from "./actions";
import { useActionState } from "react";

export default function AddProduct() {  
  const [preview, setPreview] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const [photoId, setPhotoId] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [rentalPrice, setRentalPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [productId, setProductId] = useState(() => {
    const params = { id: window.location.pathname.split('/').pop() || '' };
    return Number(Array.isArray(params.id) ? params.id[0] : params.id);
  });

  // 이미지 변경 처리
  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = { id: window.location.pathname.split('/').pop() || '' };
    const productId = Number(Array.isArray(params.id) ? params.id[0] : params.id);
    const { target: { files } } = event;
    if (!files) return;

    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
    const { success, result } = await getUploadUrl();
    if (success) {
      const { id, uploadURL } = result;
      setUploadUrl(uploadURL);
      setPhotoId(id);
    }
  };

  // 새상품 가격과 렌탈 가격으로 할인률 계산
  const calculateDiscount = () => {
    if (price > 0 && rentalPrice > 0) {
      const discountPercentage = ((price - rentalPrice) / price) * 100;
      setDiscount(discountPercentage);
    }
  };

  // 폼 제출 처리
  const interceptAction = async (_: any, formData: FormData) => {
    const file = formData.get("photo");
    if (!file) return;

    const cloudflareForm = new FormData();
    cloudflareForm.append("file", file);
    const response = await fetch(uploadUrl, {
      method: "post",
      body: cloudflareForm,
    });

    if (response.status !== 200) return;
    const photoUrl = `https://imagedelivery.net/yJM4XEUMW1iEPFK9VtyCSw/${photoId}`;
    formData.set("photo", photoUrl);

    // 새상품 가격과 렌탈 가격을 폼 데이터에 추가
    formData.set("price", price.toString());
    formData.set("rentalPrice", rentalPrice.toString());

    return uploadProduct(formData);
  };

  const [, action] = useActionState(interceptAction, null);

  return (
    <div>
      <form action={action} className="p-5 flex flex-col gap-5">
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex items-center justify-center flex-col text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          {preview === "" ? (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-neutral-400 text-sm">
                사진을 추가해주세요.
              </div>
            </>
          ) : null}
        </label>
        <input
          onChange={onImageChange}
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          className="hidden"
        />

        <Input name="title" required placeholder="제목" type="text" />

        {/* 새상품 가격 입력 */}
        <Input
          name="price"
          type="number"
          required
          placeholder="새상품 가격"
          value={price || ""}  // 가격이 0일 때는 빈 문자열로 표시
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <Input
          name="rentalPrice"
          type="number"
          required
          placeholder="렌탈 가격"
          value={rentalPrice || ""}  // 렌탈 가격도 0일 때 빈 문자열로 표시
          onChange={(e) => setRentalPrice(Number(e.target.value))}
        />

        {/* 할인률 계산 */}
        {/* <div className="mt-2 text-xl">
          {discount > 0 && (
            <span className="font-semibold text-green-500">
              할인률: {discount.toFixed(2)}%
            </span>
          )}
        </div> */}
        <Input
          name="description"
          type="text"
          required
          placeholder="자세한 설명"
        />
        <input type="hidden" name="id" value={productId} />

        <Button text="작성 완료" />
      </form>
    </div>
  );
}
