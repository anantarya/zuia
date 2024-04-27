import type { NextPage } from "next";

const FrameComponent4: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-base text-primary-subtitle-color font-title-medium">
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-2.5 pr-0 pl-[30px] text-xs text-dimgray font-subtitle-small">
        <div className="flex-1 relative leading-[18px] font-medium">
          MAIN MENU
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 pr-0 pl-[30px] gap-[24px] text-main-color">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/icdashboard.svg"
        />
        <div className="flex-1 relative leading-[24px] font-medium">
          Dashboard
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 pr-0 pl-[30px] gap-[24px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
          loading="lazy"
          alt=""
          src="/icrecruitment@2x.png"
        />
        <div className="flex-1 relative leading-[24px]">Recruitment</div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 pr-0 pl-[30px] gap-[24px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/iccalendar.svg"
        />
        <div className="flex-1 relative leading-[24px]">Schedule</div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 pr-0 pl-[30px] gap-[24px]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icemployee.svg"
        />
        <div className="flex-1 relative leading-[24px]">Employee</div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 pr-0 pl-[30px] gap-[24px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/icdepartment.svg"
        />
        <div className="flex-1 relative leading-[24px]">Department</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
