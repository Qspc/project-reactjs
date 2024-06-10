import Image from 'next/image';
export default function PartnerContent() {
  const sourceImages = ['/images/amazon.svg', '/images/McKesson.svg', '/images/Johnson.svg'];
  return (
    <div className="pb-[40px] w-full flex flex-col items-center gap-[24px] justify-center">
      <div className="text-[30px] font-semibold ">85% of Fortune 100 companies choose Asana¹</div>
      <div className="flex justify-center ">
        {sourceImages.map((item, index) => (
          <div className="m-[24px] min-w-[150px] " key={index}>
            <img src={item} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}
