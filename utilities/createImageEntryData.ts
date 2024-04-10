// creates the object that will be used to create a new image entry in the database




export const createImageEntryData =  (result: any, tag: string, userId: string) => {
  

  const { public_id, asset_id, etag, secure_url, width, height } = result as any;
  return {
    userId,
    tag,
    publicId: public_id,
    assetId: asset_id,
    etag,
    url: secure_url,
    width,
    height,
  };
};