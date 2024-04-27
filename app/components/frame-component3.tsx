import type { NextPage } from "next";

const FrameComponent3: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-base text-primary-subtitle-color font-title-medium">
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-2.5 pr-0 pl-[30px] text-xs text-dimgray font-subtitle-small">
        <div className="flex-1 relative leading-[18px] font-medium">OTHER</div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 pr-0 pl-[30px] gap-[24px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/icsupport.svg"
        />
        <div className="flex-1 relative leading-[24px]">Support</div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 pr-0 pl-[30px] gap-[24px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/icsettings.svg"
        />
        <div className="flex-1 relative leading-[24px]">Settings</div>
      </div>
    </div>
  );
};

export default FrameComponent3;
