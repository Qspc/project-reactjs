'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const data = [
    {
      image: 'https://picsum.photos/300/200',
      title: 'Folder system',
      description: 'make folder system like google drive',
      link: '/folder-page',
    },
    {
      image: 'https://picsum.photos/300/200',
      title: 'Home Page Company',
      description: 'make folder system like google drive',
      link: '/homepage-website',
    },
  ];
  const path = 'https://picsum.photos/300/200';
  return (
    <div>
      <div className="px-20 py-10 ">
        <div>Project React X Next Section</div>
        <div>konten</div>
        {/* card */}
        <div>
          <div className="flex w-full gap-10 flex-wrap">
            {data.map((value, index) => (
              <div className=" w-[20%] h-80 border border-gray-100 shadow-lg flex flex-col" key={index}>
                <div className=" border h-[140px] relative ">
                  <Image fill={true} loader={() => value.image} src={value.image} alt="image" className="" />
                </div>
                <div className="py-2 px-2 flex flex-col justify-between h-[55%] ">
                  <div>
                    <div className="text-[22px] font-light capitalize ">{value.title}</div>
                    <div className="text-[14px] font-semibold ">{value.description}</div>
                  </div>
                  <div>
                    <button className="text-gray-500 hover:text-black " onClick={() => router.push(`${value.link}`)}>
                      more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
