'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const path = 'https://picsum.photos/300/200';

  const data = [
    {
      image: path,
      title: 'Folder system',
      description: 'Creating a folder system similar to Google Drive or the file storage system on a PC',
      link: '/folder-page',
    },
    {
      image: path,
      title: 'Homepage Company',
      description: 'Homepage a business website for a company',
      link: '/homepage-website',
    },
  ];
  return (
    <div>
      <div className="px-20 py-10 flex flex-col gap-10 ">
        <div className="h-20">
          <h1 className="font-bold text-[20px] uppercase ">Web Developing journal</h1>
        </div>
        <div className="w-full border-shadow-custom rounded-full">
          <div className="flex h-[2rem] py-2 px-4 justify-between ">
            <div></div>
            <div></div>
          </div>
        </div>
        {/* card */}
        <div>
          <div className="flex w-full gap-10 flex-wrap">
            {data.map((value, index) => (
              <div className="w-[20%] h-80 flex flex-col group rounded-md border-shadow-custom gradient-background-custom " key={index}>
                <div className=" h-[140px] m-[5px] rounded-md relative overflow-hidden">
                  <Image className="rounded-md transform transition-transform duration-300 ease-in-out group-hover:scale-110" fill={true} loader={() => value.image} src={value.image} alt="image" />
                </div>
                <div className="py-2 px-2 flex flex-col gap-1 h-[55%] ">
                  <div className="text-[20px] font-semibold capitalize ">{value.title}</div>
                  <div className="text-[14px] font-light h-[45%] overflow-y-hidden ">
                    {value.description.substring(0, 70)}
                    {value.description.length > 70 ? '...' : ''}
                  </div>
                  <button className="button-primer py-[6px] rounded-md font-semibold capitalize hover:bg-blue-400 " onClick={() => router.push(`${value.link}`)}>
                    view
                  </button>
                </div>
              </div>
            ))}
            <div className="w-[20%] h-80 flex flex-col group rounded-md border-shadow-custom gradient-background-custom ">
              <div className=" h-[140px] m-[5px] rounded-md relative overflow-hidden">
                <Image className="rounded-md transform transition-transform duration-300 ease-in-out group-hover:scale-110" fill={true} loader={() => path} src={path} alt="image" />
              </div>
              <div className="py-2 px-2 flex h-[55%] justify-center items-center text-gray-600 font-bold ">SOON</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
