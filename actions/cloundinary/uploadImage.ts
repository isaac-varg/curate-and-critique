"use server";

import cloudinary from "@/lib/cloudinary";
import imageActions from "../image";

export const uploadImage = async (formData: FormData) => {
  const file = formData.get("file") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          public_id: file.name,
          folder: "curate-and-critique",
          tags: "collection",
        },
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            resolve(result);
          }
        }
      )
      .end(buffer);
  });
};
