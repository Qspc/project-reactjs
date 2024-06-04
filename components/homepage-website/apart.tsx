export default function ApartContent() {
  return (
    <div className="px-[80px]">
      <div className="py-[80px] text-[60px] font-medium">What sets Asana apart</div>
      <div className="pt-[40px] pb-[80px]">
        <div className="flex gap-[24px] ">
          <div className="flex flex-col gap-[8px] w-full text-[#0d0d0d] ">
            <div className="text-[30px] ">More clarity and accountability</div>
            <div className="text-[20px] ">Connect strategic goals to the teams that help achieve them. See progress in real time, update stakeholders, and keep the company on track.</div>
            <div className="mt-[32px]">
              <button className="bg-white border-black border rounded hover:bg-gray-600 hover:border-gray-600 text-black px-[24px] py-[11px] duration-200 ease-in-out">Learn about goals</button>
            </div>
          </div>
          <img width="570" height="470" alt="cover" src="https://assets.asana.biz/transform/461d145c-016f-41f1-9bc7-54ced9be3638/home24-goals-ui?io=transform:fill,width:1680&format=webp" />
        </div>
      </div>
      <hr />
      <div className="pt-[80px] pb-[80px]">
        <div className="flex gap-[24px] ">
          <div className="flex flex-col gap-[8px] w-full text-[#0d0d0d] ">
            <div className="text-[30px] ">Greater impact with AI</div>
            <div className="text-[20px] ">AI has joined the team to help every organization work smarter. Drive greater clarity, impact, and scale with Asana Intelligence, powered by the Work Graph®.</div>
            <div className="mt-[32px]">
              <button className="bg-white border-black border rounded hover:bg-gray-600 hover:border-gray-600 text-black px-[24px] py-[11px] duration-200 ease-in-out">Meet Asana Intelligence</button>
            </div>
          </div>
          <img width="570" height="470" alt="cover" src="https://assets.asana.biz/transform/02b92b4f-2077-4df0-816e-2b7b31a9a921/home24-ai-ui?io=transform:fill,width:1680&format=webp" />
        </div>
      </div>
      <hr />
    </div>
  );
}
