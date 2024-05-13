'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  const data = Array.from('marsupilamia');
  return (
    <div>
      <div className="px-20 py-10 ">
        <div>Project React X Next Section</div>
        <div>konten</div>
        {/* card */}
        <div>
          <div className="flex justify-between w-full gap-10 flex-wrap">
            {data.map((value, index) => (
              <div className=" w-[20%] h-80 border-2 " key={index}>
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
