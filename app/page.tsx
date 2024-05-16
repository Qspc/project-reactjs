'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const data = Array.from('marsupilamia');
  const path = 'https://picsum.photos/300/200';
  return (
    <div>
      <div className="px-20 py-10 ">
        <div>Project React X Next Section</div>
        <div>konten</div>
        {/* card */}
        <div>
          <div className="flex justify-between w-full gap-10 flex-wrap">
            {data.map((value, index) => (
              <div className=" w-[20%] h-80 border-2 flex flex-col" key={index}>
                <div className=" border h-[140px] relative ">
                  <Image fill={true} loader={() => path} src={path} alt="image" className="" />
                </div>
                <div className="py-2 px-2">
                  <div>Folder page</div>
                  <div>make folder page system lik ein googe drive</div>
                  <button onClick={() => router.push('/folder-page')}>more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
