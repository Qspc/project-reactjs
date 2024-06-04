export default function ScaleContent() {
  return (
    <div className="p-[80px] flex flex-col gap-[40px] ">
      <div className="text-[60px] font-medium">A smarter way to scale</div>
      <div className="bg-[#222875] rounded-lg ">
        <div className="flex gap-[24px] px-[32px] py-[48px] justify-evenly ">
          <div className="flex flex-col gap-[24px] w-[40%] text-white ">
            <div className="text-[30px] font-medium ">Enterprise-grade security</div>
            <div className="text-[20px] ">Ensure your company&apos;s data is completely secure and that you&apos;re in compliance with the latest standards.</div>
            <div className="">
              <button className="bg-none font-medium border-white border rounded  px-[24px] py-[11px] hover:text-black hover:bg-[#f06a6a] hover:border-[#f06a6a] duration-200 ease-in-out">Explore Security</button>
            </div>
          </div>
          <div className=" w-[475px] h-[135px] ">
            <img width="100%" height="135.497px" alt="cover" src="https://assets.asana.biz/transform/f16bbac9-27b8-45a0-9304-9fc08394c1ce/home24-security?io=transform:fill,width:1440&format=webp" />
          </div>
        </div>
      </div>
      <div className="bg-[#cbefff] rounded-lg ">
        <div className="flex gap-[24px] px-[32px] justify-evenly ">
          <div className=" w-[475px] h-[475px] ">
            <img width="475" height="475" alt="cover" src="https://assets.asana.biz/transform/b7caf1f0-4364-46eb-bb5a-dcc641984bc6/HOME24-web-integrations-2x-en?io=transform:fill,width:1440&format=webp" />
          </div>
          <div className="flex flex-col pt-[48px] gap-[24px] w-[40%] text-[#0d0d0d] ">
            <div className="text-[30px] font-medium ">Connect over 300 integrations</div>
            <div className="text-[20px] ">Asana connects with the enterprise tools your organization already uses, right out of the box.</div>
            <div className="">
              <button className="bg-none font-medium border-black border rounded  px-[24px] py-[11px] hover:text-black hover:bg-gray-600 hover:border-gray-600 duration-200 ease-in-out">Explore Security</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
