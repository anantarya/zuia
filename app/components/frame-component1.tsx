import type { NextPage } from "next";

export type FrameComponent1Type = {
  outingScheduleForEveryDep?: string;
  minutesAgo?: string;
  bipinAngleFill?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  outingScheduleForEveryDep,
  minutesAgo,
  bipinAngleFill,
}) => {
  return (
    <div className="self-stretch rounded-md bg-background-color box-border overflow-hidden flex flex-row items-start justify-between py-[11px] pr-[17px] pl-[15px] max-w-full gap-[20px] z-[1] text-left text-base text-secondary-title-color font-title-medium border-[0.5px] border-solid border-gainsboro-200 mq700:flex-wrap">
      <div className="w-[405px] flex flex-col items-start justify-start gap-[6px] max-w-full">
        <div className="self-stretch relative leading-[24px]">
          {outingScheduleForEveryDep}
        </div>
        <div className="self-stretch relative text-3xs leading-[14px] font-subtitle-small text-primary-subtitle-color">
          {minutesAgo}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[20px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src={bipinAngleFill}
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/carbonoverflowmenuhorizontal.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
