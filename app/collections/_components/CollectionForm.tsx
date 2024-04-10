"use client";
import { uploadImage } from "@/actions/cloundinary/uploadImage";
import collectionActions from "@/actions/collection/collection";
import imageActions from "@/actions/image";
import { revalidatePage } from "@/actions/revalidatePage";
import Form from "@/components/form";
import useDialog from "@/hooks/useDialog";
import { Collection } from "@/types/Collection";
import { createImageEntryData } from "@/utilities/createImageEntryData";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  image: FileList;
};
const CollectionForm = () => {
  const form = useForm<Inputs>();
  const { resetDialogContext } = useDialog();

  const { data: session } = useSession();

  const handleSubmit = async (data: Inputs) => {
    if (data.image.length === 0) {
      console.log("no image");
      return;
    }

    const formData = new FormData();
    formData.append("file", data.image[0]);

    const uploadData = await uploadImage(formData);

    const imageEntry = await imageActions.create(
      createImageEntryData(
        uploadData,
        "collection",
        session?.user?.id as string
      )
    );

    const collectionData: Collection = {
      userId: session?.user?.id,
      name: data.name,
      imageId: imageEntry.id,
    };

    await collectionActions.create(collectionData);

    revalidatePage("/collections");
    resetDialogContext();
  };

  return (
    <Form.Root form={form} onSubmit={handleSubmit}>
      <Form.Text form={form} fieldName="name" label="Name" required={true} />
      <Form.FileUpload
        form={form}
        fieldName="image"
        label="Image"
        required={true}
      />
      <Form.ActionRow form={form} />
    </Form.Root>
  );
};

export default CollectionForm;

// const { public_id, asset_id, etag, secure_url, width, height } =
// result as any;

// const createData = {
// userId: "44bfe97e-7192-4c15-9319-bd4b4c08f8e5",
// tag: "collection",
// publicId: public_id,
// assetId: asset_id,
// etag,
// url: secure_url,
// width,
// height,
// };

// imageActions.create(createData);
