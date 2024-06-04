import Image from 'next/image';

export default function PartnerContent() {
  return (
    <div className="pb-[40px] w-full flex flex-col items-center gap-[24px] justify-center">
      <div className="text-[30px] font-semibold ">85% of Fortune 100 companies choose Asana¹</div>
      <div className="flex justify-center ">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index}>
            halo
            {/* <Image key={index} alt="gambar" width={150} height={40} src="favicon.ico" className="p-[24px] text-center " /> */}
          </div>
        ))}
      </div>
      {/* <img src="https://assets.asana.biz/transform/b7caf1f0-4364-46eb-bb5a-dcc641984bc6/HOME24-web-integrations-2x-en?io=transform:fill,width:1440&format=webp" alt="aa" /> */}
    </div>
  );
}
