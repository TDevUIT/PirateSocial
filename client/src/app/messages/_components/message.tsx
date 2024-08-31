'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegFilePdf } from "react-icons/fa6";

interface FileInfo {
  name: string;
  type: string;
  size: number;
}

interface MessageProps {
  text: string;
  time: string;
  file?: FileInfo | null;
}

const Message = ({ text, time, file }: MessageProps) => {
  const isImage = file && file.type.startsWith('image/');
  const isPDF = file && file.type === 'application/pdf';

  return (
    <div className="flex flex-col items-start">
      <div className="text-xs text-gray-500">{time}</div>
        <div className="flex gap-x-2">
          
          <div className='h-[28px] w-[28px] rounded-full bg-black mt-3'>
            
          </div>
          <div className='flex flex-col'>
            {file && (
                <div className="flex items-center mt-2 max-w-[512px] max-h-[512px]">
                  {isImage && (
                    <div className="relative  mr-2 max-w-[512px] max-h-[512px]">
                      <Image 
                        src='/pirate-ship-background.jpg' 
                        alt={file.name} 
                        width={320}
                        height={320}
                        className="object-cover rounded-lg  max-w-[512px] max-h-[512px]"
                      />
                    </div>
                  )}
                  {isPDF && (
                    <div className='flex justify-center items-center gap-x-2 mt-1 ml-1 bg-gray-200 p-4 rounded-lg'>
                      <FaRegFilePdf className='w-5 h-5'/> 
                      <Link href={URL.createObjectURL(new Blob([file.name]))} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mr-2">
                        {file.name} ({(file.size / 1024).toFixed(2)} KB)
                      </Link>
                    </div>
                  )}
                  {!isImage && !isPDF && (
                    <div className='flex justify-center items-center gap-x-2 mt-1 bg-gray-200 p-4 rounded-lg'>
                      <p className="ml-2">{file.name} ({(file.size / 1024).toFixed(2)} KB)</p>
                    </div>
                  )}
                </div>
              )}
            {text && 
              (<div className="bg-gray-200 rounded-lg p-4 mt-2 max-w-xs text-sm text-gray-800">
                {text}
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Message;
