'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function CategoriesContent() {
  const icons = ['Marketing', 'Operations', 'IT', 'Product', 'Company-wide'];
  const [select, setSelect] = useState(0);
  const dataCategories: { image: string; title: string; description: string[]; button: string }[] = [
    {
      image: 'https://assets.asana.biz/transform/fb6b5fb5-8a08-4232-aa6c-0f1515e78d57/home24-marketing-team-en-ui?io=transform:fill,width:1440&format=webp',
      title: 'Meet campaign goals',
      description: ['Streamline campaign management', 'Enhance creative production', 'Manage events and editorial calendars'],
      button: 'Explore marketing',
    },
    {
      image: 'https://assets.asana.biz/transform/d06c5984-1ba8-478f-af99-b71be0f7fd61/home24-operations-team-ui?io=transform:fill,width:1440&format=webp',
      title: 'Drive operational efficiency',
      description: ['Track work and see progress in real time', 'Enhance creative production', 'Unblock teams to hit revenue goals'],
      button: 'Explore operations',
    },
    {
      image: 'https://assets.asana.biz/transform/9462b0f2-6173-42e0-ba08-bb731ea3d24d/home24-it-team-ui?io=transform:fill,width:1440&format=webp',
      title: 'Prioritize and streamline IT requests',
      description: ['Automate and scale your workflows', 'Enhance creative production', 'Allocate resources more effectively'],
      button: 'Explore IT',
    },
    {
      image: 'https://assets.asana.biz/transform/070f1abb-5a90-477c-8b90-b5eb6ba3a3f9/home24-product-team-ui?io=transform:fill,width:1440&format=webp',
      title: 'Launch better products faster',
      description: ['Keep product development on track', 'Centralize launch information', 'Tie your product roadmap to your strategy'],
      button: 'Explore product',
    },
    {
      image: 'https://assets.asana.biz/transform/8e33dc5e-f177-43c6-891a-60c1e5a5d789/home24-company-team-ui?io=transform:fill,width:1440&format=webp',
      title: 'Operationalize goals',
      description: ['Connect work to company goals', 'Enhance creative production', 'Report on progress and address bottlenecks'],
      button: 'See how it works',
    },
  ];

  return (
    <div className="bg-[#f3f3f3] w-full pb-[80px] ">
      <div className="px-[80px]">
        <div className="pt-[80px] pb-[40px] text-[60px] font-medium w-[70%] leading-tight tracking-tighter ">See how Asana connects work across different departments</div>
        <div className="flex flex-col gap-[48px] ">
          <div className="flex gap-[16px]  ">
            {/* #690031 */}
            {icons.map((item, index) => (
              <div
                className={`text-[20px] px-[24px] py-[18px] rounded-full border font-medium duration-150 ${
                  index === select ? 'bg-[#f7dee3] border-[#f7dee3] text-[#690031]' : 'bg-none hover:border-[#0d0d0d] border-[#cfcfcf] text-[#3d3d3d]'
                } `}
                key={index}
                onClick={() => setSelect(index)}
              >
                {item}
              </div>
            ))}
          </div>
          {dataCategories.map((data, index) => (
            <div key={index} className={` ${index === select ? 'flex' : 'hidden'} gap-[40px] `}>
              <img width="570" height="470" alt="cover" src={data.image} />
              <div className="flex flex-col gap-[24px] w-full text-[#0d0d0d] ">
                <div className="text-[30px] ">{data.title}</div>
                <ul className={'list-disc list-inside'}>
                  {data.description.map((item, index) => (
                    <li key={index} className="mb-1 text-[20px] ">
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <button className="bg-black border-black border rounded hover:bg-black/80 hover:border-black/80 text-white font-medium px-[24px] py-[11px] duration-200 ease-in-out">{data.button}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
