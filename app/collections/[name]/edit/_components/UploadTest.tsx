"use client";
import { CldUploadButton, CldUploadWidget } from 'next-cloudinary';

const UploadTest = () => {
    return (
        <CldUploadWidget options={{
            styles: {
                theme: 'minimal',
                frame: {
                    background: 'none'
                }
            },
            sources: ['local', 'url', 'image_search'],
        }} signatureEndpoint="/api/sign-cloudinary-params" uploadPreset={'curate-and-critique'} >
            {({ open }) => {
                return (

                    <button onClick={() => open()}>
                        Upload an Image
                    </button>
                );
            }}
        </CldUploadWidget >

    )
}

export default UploadTest

