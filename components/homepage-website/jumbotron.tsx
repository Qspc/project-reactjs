export default function Jumbotron() {
  return (
    <div className="pt-[160px] pb-[40px] text-[#0d0d0d] ">
      <div className="w-full flex items-center  justify-center">
        <div className="w-[60%] flex flex-col items-center justify-center gap-[32px]">
          <div className="text-[72px] font-semibold leading-tight tracking-tighter text-center ">The #1 AI work management platform</div>
          <div className="text-center px-30 mb-[1.5rem] text-[20px] ">With Asana, You can dance, you can jive Having the time of your life. Ooh, see that girl, watch that scene Digging the dancing queen.</div>
          <div className="flex gap-[16px]">
            <button className="bg-black border-black border rounded hover:bg-black/80 hover:border-black/80 text-white px-[24px] py-[11px] duration-200 ease-in-out ">Get Started</button>
            <button className="bg-white border-black border rounded hover:bg-gray-600 hover:border-gray-600 text-black px-[24px] py-[11px] duration-200 ease-in-out">See how it works</button>
          </div>
        </div>
      </div>
    </div>
  );
}
