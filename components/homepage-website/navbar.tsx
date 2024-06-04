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
        LOGO
        <div className="flex items-center ">
          {contentNav.map((item, index) => (
            <div className="px-[14px] hover:text-black " key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <div className="pr-[24px] pl-[15px] ">
          <FontAwesomeIcon width={20} height={20} className="hover:text-black" icon={faGlobe} />
        </div>
        <div>|</div>
        {rightContent.map((item, index) => (
          <div key={index} className="px-[12px] hover:text-black">
            {item}
          </div>
        ))}
        <button className="bg-black ml-[20px]  rounded hover:bg-red-500 text-white hover:text-black px-[16px] h-[36px] duration-100 ">Get started</button>
      </div>
    </div>
  );
}
