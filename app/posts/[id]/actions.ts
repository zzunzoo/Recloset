// actions.ts
export const getUploadUrl = async () => {
    // 파일 업로드 URL을 생성하는 로직
    return { success: true, result: { id: "some_id", uploadURL: "https://example.com/upload" } };
  };
  
  export const uploadProduct = async (formData: FormData) => {
    // 상품 업로드 처리 로직
    return { success: true };
  };
  