export default function Hero() {
  return (
    <div className="pt-[80px] pb-[80px] text-[#0d0d0d] ">
      <div className="w-full flex items-center  justify-center">
        <div className="w-[70%] flex flex-col items-center justify-center gap-[32px]">
          <div className="text-[72px] font-semibold leading-tight tracking-tighter text-center ">The only platform that can support your company at any scale</div>
          <div className="flex gap-[16px]">
            <button className="bg-black border-black border rounded hover:bg-black/80 hover:border-black/80 text-white px-[24px] py-[11px] duration-200 ease-in-out ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
