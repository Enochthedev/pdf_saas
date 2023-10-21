/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useDropzone } from "react-dropzone";
import React from "react";
import { Inbox } from "lucide-react";
import { uploadToS3 } from "@/lib/s3";

const fileUpload = () => {

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      console.log(acceptedFiles);
      const file = acceptedFiles[0];
      //check file size
      if (file.size> 10 * 1024 * 1024){
        alert("File is too big, a higher limit will be available in the future, please upload a smaller file")
        return;
      }
      try {
      const data = await uploadToS3(file)
      console.log(data)
      }
      catch (error){
        console.log(error)
      }
    },
  });
  return (
    <div className="p-2 bg-white rounded-xl">
      <div
        {...getRootProps({
          className:
            "border-dashed border-2 rounded-x1 cursor-pointer bg-grey py-8 flex justify-content item-center flex-col rounded-xl",
        })}
      >
        <input {...getInputProps()} />
        <div className="flex items-center justify-center flex-col">
          <Inbox className="w-10 h-10 text-black-400" />
          <p className="mt-2 text-sm text-slate-400">Your PDF goes here</p>
        </div>
      </div>
    </div>
  );
};
export default fileUpload;

