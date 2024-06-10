import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons/faCircleArrowLeft';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight';

export default function Testimony() {
  const contentData = [
    {
      title: 'Overstock',
      image: 'https://assets.asana.biz/transform/f55aec7c-911f-4002-90cf-fa911835ac7b/card-overstock-asana-customer?io=transform:fill,width:1440&format=webp',
      description: 'Overstock manages hundreds of partner relationships with Asana.',
    },
    {
      title: 'Hubspot',
      image: 'https://assets.asana.biz/transform/5162af5c-dc51-40b1-a6c5-762ac5893b0e/card-hubspot?io=transform:fill,width:1440&format=webp',
      description: 'Increased production of advertising campaigns for clients by 50% each month.',
    },
    {
      title: 'Figma',
      image: 'https://assets.asana.biz/transform/df2510ec-14de-4e4e-80a1-cfe041bd142b/card-figma-asana-customer?io=transform:fill,width:1440&format=webp',
      description: 'Figma`s product team reduced meeting time by 50% with Asana.',
    },
    {
      title: 'Zoom',
      image: 'https://assets.asana.biz/transform/2fb67d4b-da8f-4720-a97e-194a511f4503/card-zoom-1x?io=transform:fill,width:1440&format=webp',
      description: 'Zoom saves 133 work weeks per year with Asana.',
    },
  ];

  return (
    <div className="px-[80px] pt-[80px] pb-[40px] bg-[#f3f3f3] flex flex-col gap-[40px] ">
      <div className="text-[60px] w-[60%] font-medium leading-tight tracking-tighter ">The world’s top companies trust Asana</div>
      <div className="flex flex-col gap-[16px]">
        <a href="#" className="flex items-center gap-[8px] font-semibold ">
          See all case studies
          <FontAwesomeIcon width={11} height={11} icon={faArrowRight} />
        </a>
        <div className="flex gap-[24px] ">
          {contentData.map((item, index) => (
            <div key={index} className="w-[365px] h-[350px] border border-gray-300 ease-in-out duration-200 hover:border-gray-600 bg-white flex flex-col group overflow-hidden cursor-pointer ">
              <img className="w-full transform transition-all duration-300 group-hover:-translate-y-10 group-hover:h-3/4" src={item.image} alt="image" />
              <div className="p-[24px] h-[400px] flex flex-col gap-[8px] justify-between group-hover:-translate-y-10 ease-in-out duration-300  ">
                <div className="text-[20px] font-medium ">{item.title}</div>
                <div className="text-[16px] ">{item.description} </div>
                <div className="flex items-center gap-[8px] text-[14px] font-semibold ease-in-out duration-300 opacity-0 transform translate-y-4 transition-all group-hover:translate-y-0 group-hover:opacity-100 ">
                  Read case studies
                  <FontAwesomeIcon width={11} height={11} icon={faArrowRight} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 ">
          <FontAwesomeIcon className="w-[32px] h-[32px] cursor-pointer" icon={faCircleArrowLeft} />
          <FontAwesomeIcon className="w-[32px] h-[32px] cursor-pointer" icon={faCircleArrowRight} />
        </div>
      </div>
    </div>
  );
}
