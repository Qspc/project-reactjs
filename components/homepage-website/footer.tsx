export default function FooterContent() {
  const data = [
    {
      title: 'Asana',
      icon: ['Home', 'Product', 'Pricing', 'Starter', 'Advanced', 'Enterprise', 'Customer Success', 'Asana Templates', 'Trust & Security', 'Status'],
    },
    {
      title: 'About Us',
      icon: ['Company', 'Leadership', 'Customers', 'Diversity', 'Careers', 'Press', 'Wavelength', 'Inside Asana', 'Investor Relations', 'Sitemap', 'Modern Slavery Transparency Statement'],
    },
    {
      title: 'Workflow Solutions',
      icon: ['Project Management', 'Goal Management', 'Agile Management', 'Task Management', 'Increase Productivity', 'Work Management', 'Project Planning', 'To Do Lists', 'See All Uses', 'See All Teams'],
    },
    {
      title: 'Resources',
      icon: ['Help Center', 'Forum', 'Support', 'App Directory', 'Developers & API', 'Partners', 'Asana Community', 'Events', 'Asana for Nonprofits', 'Asana for Education', 'Accessibility'],
    },
    {
      title: 'Learn',
      icon: [
        '11 Leadership Styles',
        '110 Icebreaker Questions',
        'Executive Summary Tips',
        'Impostor Syndrome Tips',
        'Prevent Team Burnout',
        'SWOT Analysis Tips',
        'What are OKRs?',
        'What are SMART Goals?',
        'What is Scope Creep?',
        'See All resources',
      ],
    },
  ];
  const iconFooter = ['© 2024 Asana, Inc.', 'English', 'Terms & Privacy'];
  const socialMedia = ['/images/twitter.svg', '/images/linkedin.svg', '/images/instagram.svg', '/images/facebook.svg', '/images/youtube.svg'];

  return (
    <>
      <div className="py-[80px] bg-[#690031] text-[#ffeaec] px-[80px] flex ">
        <div className="w-[100px]">
          <img width={24} height={22} src="https://logo.uplead.com/amazon.com" alt="amazon logo" />
        </div>
        {data.map((item, index) => (
          <div key={index} className="px-[16px] w-[204px] flex flex-col gap-[32px]">
            <div>{item.title}</div>
            <div className="flex flex-col text-[#e1bbc7] gap-[14px] ">
              {item.icon.map((content, index) => (
                <div className="cursor-pointer hover:undeline " key={index}>
                  {content}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="py-[40px] bg-[#710c3a] text-[#e1bbc7] items-center flex gap-[5%] justify-center ">
        {iconFooter.map((item, index) => (
          <div className="cursor-pointer " key={index}>
            {item}
          </div>
        ))}
        <div className="flex gap-1">
          {socialMedia.map((item, index) => (
            <div className="bg-white hover:bg-gray-400 rounded-full flex items-center p-2 " key={index}>
              <img key={index} src={item} alt="imgSocmed" />
            </div>
          ))}
        </div>
        <div className="flex gap-1 ">
          <img src="https://luna1.co/Google_Play_EN.svg" alt="img1" />
          <img src="https://luna1.co/Download_App_Store_Badge_US.svg" alt="img2" />
        </div>
      </div>
    </>
  );
}
