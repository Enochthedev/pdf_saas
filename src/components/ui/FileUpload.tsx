/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import {useDropzone} from 'react-dropzone';
import React from 'react';
import { Inbox } from 'lucide-react';



const fileUpload = () => {
    const {getRootProps, getInputProps} = useDropzone({
        accept: {'application/pdf':['.pdf']},
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles);
        }
    });
    return ( 
        <div className='p-2 bg-white rounded-xl'>
            <div {...getRootProps({
                className: 'border-dashed border-2 rounded-x1 cursor-pointer bg-grey py-8 flex justify-content item-center flex-col rounded-xl'
            })}>
                <input {...getInputProps()} />
                <>
                    <Inbox className='w-10 h-10  text-silver-400  margin="auto" self-center'/>
                    <p className='mt-2 text-sm text-slate-400'>Your PDF goes here</p>
                </>
                </div>
                </div>
    );
}
export default fileUpload;