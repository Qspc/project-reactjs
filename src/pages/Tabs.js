import { useState } from 'react';

export default function Tabs() {
  const tabs = [
    {
      title: 'Tajikistan',
      content:
        'Tajikistan is a landlocked country located in Central Asia, bordered by Afghanistan, China, Kyrgyzstan, and Uzbekistan. It has a population of over 9 million people and is known for its stunning mountain landscapes, ancient history, and unique culture. Tajikistan gained independence from the Soviet Union in 1991 and has since faced many challenges, including political instability, poverty, and limited access to resources. However, the country has made progress in recent years towards improving its infrastructure, education, and healthcare systems. Tajikistan is also home to many talented artisans, musicians, and athletes, and has a rich cultural heritage that is celebrated around the world.',
    },
    {
      title: 'Nigeria',
      content:
        'Nigeria is a country located in West Africa with a population of over 211 million people. It is known for its diverse cultures, languages, and religions, as well as its rich history and natural resources. Nigeria gained independence from British colonial rule in 1960 and has since experienced periods of political instability, ethnic tensions, and economic challenges. However, it remains one of the largest economies in Africa, with a vibrant music, film, and fashion industry, and is home to many talented individuals in various fields.',
    },
    {
      title: 'Haiti',
      content:
        'Haiti is a small island nation located in the Caribbean Sea, sharing the island of Hispaniola with the Dominican Republic. It has a population of over 11 million people and is known for its vibrant culture, history, and natural beauty. Haiti was the first independent black nation in the world, having gained independence from France in 1804. However, it has since faced many challenges, including political instability, economic difficulties, and natural disasters such as earthquakes and hurricanes. Despite these challenges, the Haitian people have a strong sense of community and resilience, and the country continues to make progress towards a better future.',
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <h1>Do you know?</h1>
      <div className="flex" style={{ justifyContent: 'flex-start', position: 'relative', margin: '5rem 15rem', flexWrap: 'nowrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '200px' }}>
          {tabs.map((tab, index) => (
            <div style={{ padding: '1rem 3rem' }} key={index} className={index === activeTab ? 'active' : ''} onClick={() => handleTabClick(index)}>
              {tab.title}
            </div>
          ))}
        </div>
        <div style={{ padding: '1rem 3rem', border: '1px solid black', lineHeight: '2rem', backgroundColor: '#F6F7C1' }}>{tabs[activeTab].content}</div>
      </div>
    </>
  );
}
