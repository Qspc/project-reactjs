import { useState } from 'react';

export default function Tabs() {
  const tabs = [
    {
      title: 'Inggris',
      content: 'Negara di Britania Raya yang berada si suatu pulau. Hint : Football, Queen Elizabeth, London',
    },
    {
      title: 'Nigeria',
      content: 'Negara berpenduduk terbanyak di Afrika. Hint : Lagos, People, African',
    },
    {
      title: 'Haiti',
      content: 'Salah satu negara miskin di America latin. Hint : Island, Earthquake, mafia',
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="flex" style={{ justifyContent: 'flex-start', position: 'relative', margin: '5rem 15rem', flexWrap: 'nowrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '200px' }}>
          {tabs.map((tab, index) => (
            <div style={{ padding: '1rem 3rem' }} key={index} className={index === activeTab ? 'active' : ''} onClick={() => handleTabClick(index)}>
              {tab.title}
            </div>
          ))}
        </div>
        <div style={{ padding: '1rem 3rem', border: '1px solid black', lineHeight: '2rem', backgroundColor: '#F6F7C1' }}>
          {tabs[activeTab].content} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
    </>
  );
}
