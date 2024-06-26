'use client';
// import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { useEffect, useState } from 'react';

export default function NavbarPage() {
  const contentNav = ['Features', 'Solutions', 'Resources', 'Enterprise', 'Pricing'];
  const rightContent = ['Content sales', 'Log In'];
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`fixed bg-white font-semibold top-0 px-[80px] w-full h-[56px] text-[14px]  ${shadow ? 'shadow-md duration-200' : ''} text-[#727272] flex justify-between items-center `}>
      <div className="flex gap-[32px] items-center ">
        <div className="flex gap-1 items-center text-black font-bold text-[16px] ">
          <img width={24} height={22} src="https://logo.uplead.com/amazon.com" alt="amazon logo" />
          ASANA
        </div>
        <div className="flex items-center ">
          {contentNav.map((item, index) => (
            <a href="#" className="px-[14px] hover:text-black " key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <a href="#" className="pr-[24px] pl-[15px] ">
          <FontAwesomeIcon width={20} height={20} className="hover:text-black" icon={faGlobe} />
        </a>
        <div>|</div>
        {rightContent.map((item, index) => (
          <a href="#" key={index} className="px-[12px] hover:text-black">
            {item}
          </a>
        ))}
        <button className="bg-black ml-[20px]  rounded hover:bg-red-500 text-white hover:text-black px-[16px] h-[36px] duration-100 ">Get started</button>
      </div>
    </div>
  );
}
