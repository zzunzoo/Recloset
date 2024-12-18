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
  const [price, setPrice] = useState<number>(0); // 가격 입력
  const [size, setSize] = useState<string>(""); // 사이즈 입력
  const [isRental, setIsRental] = useState<boolean>(false); // 렌탈 여부 선택

  // 이미지 변경 처리
  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { files } } = event;
    if (!files) return;
  
    const file = files[0];
    const url = URL.createObjectURL(file); // 이미지 미리보기 URL 생성
    setPreview(url); // 프리뷰에 표시
    const { success, result } = await getUploadUrl(); // Cloudflare 업로드 URL 요청
    if (success) {
      const { id, uploadURL } = result; // ID와 업로드 URL 가져오기
      setUploadUrl(uploadURL); // 업로드 URL 저장
      setPhotoId(id); // Photo ID 저장
    }
  };
  // 폼 제출 처리
  const interceptAction = async (_: any, formData: FormData) => {
    const file = formData.get("photo");
    if (!file) return;
  
    const cloudflareForm = new FormData();
    cloudflareForm.append("file", file);
    const response = await fetch(uploadUrl, {
      method: "POST",
      body: cloudflareForm,
    });
  
    if (response.status !== 200) return;
  
    // Cloudflare에서 반환된 이미지 URL 생성
    const photoUrl = `https://imagedelivery.net/yJM4XEUMW1iEPFK9VtyCSw/${photoId}/public`;
    formData.set("photo", photoUrl);
  
    // 추가적인 데이터를 폼에 설정
    formData.set("price", price.toString());
    formData.set("rentalPrice", price.toString());
  
    return uploadProduct(formData); // 업로드 실행
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
              <div className="text-neutral-400 text-sm">사진을 추가해주세요.</div>
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

        {/* 가격 입력 */}
        <Input
          name="price"
          type="number"
          required
          placeholder="가격"
          value={price || ""}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        {/* 사이즈 입력 */}
        <Input
          name="size"
          type="text"
          placeholder="사이즈 (예: S, M, L)"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />

        

        <Input
          name="description"
          type="text"
          required
          placeholder="자세한 설명"
        />

        <Button text="작성 완료" />
      </form>
    </div>
  );
}
