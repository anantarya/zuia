import type { NextPage } from "next";

export type TalentRequestType = {
  totalEmployees?: string;
  prop?: string;
  men?: string;
  women?: string;
  vector3?: string;
  prop1?: string;
  pastMonth?: string;
};

const TalentRequest: NextPage<TalentRequestType> = ({
  totalEmployees,
  prop,
  men,
  women,
  vector3,
  prop1,
  pastMonth,
}) => {
  return (
    <div className="flex-1 rounded-3xs bg-just-white box-border overflow-hidden flex flex-row items-start justify-start py-[18px] px-[19px] gap-[40px] min-w-[203px] z-[1] text-left text-lg text-primary-subtitle-color font-title-medium border-[1px] border-solid border-gainsboro-200 mq450:gap-[20px]">
      <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 gap-[32px]">
        <div className="w-[147px] flex flex-row items-start justify-start pt-[50px] px-0 pb-0 box-border relative gap-[22px]">
          <div className="w-[166px] absolute !m-[0] top-[0px] right-[-19px] leading-[28px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
            {totalEmployees}
          </div>
          <div className="flex-1 relative text-29xl leading-[28px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq900:text-19xl mq900:leading-[22px] mq450:text-10xl mq450:leading-[17px]">
            {prop}
          </div>
        </div>
        <div className="w-[147px] flex flex-col items-start justify-start gap-[4px] text-xs font-subtitle-small">
          <div className="self-stretch relative leading-[18px]">{men}</div>
          <div className="self-stretch relative leading-[18px]">{women}</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 text-3xs text-main-color font-rubik">
        <div className="self-stretch h-[121px] flex flex-col items-end justify-start pt-0 px-0 pb-[43px] box-border gap-[20px]">
          <div className="self-stretch h-[78px] relative shrink-0 [debug_commit:1de1738]">
            <img
              className="absolute top-[9.2px] left-[0px] w-[114.5px] h-[41.8px]"
              alt=""
              src="/men-indicator.svg"
            />
            <img
              className="absolute top-[9px] left-[0.5px] w-[114.5px] h-[69px] z-[1]"
              alt=""
              src={vector3}
            />
            <div className="absolute top-[0px] left-[42.5px] leading-[24px] font-medium flex items-center w-5 h-3 min-w-[20px] z-[2]">
              {prop1}
            </div>
            <img
              className="absolute top-[10px] left-[45.5px] w-4 h-4 overflow-hidden z-[2]"
              loading="lazy"
              alt=""
              src="/frame-20.svg"
            />
          </div>
          <div className="rounded bg-linen flex flex-row items-start justify-start py-0 px-2.5 shrink-0 [debug_commit:1de1738] whitespace-nowrap text-xs text-secondary-title-color font-subtitle-small">
            <div className="relative leading-[24px] inline-block min-w-[87px]">
              {pastMonth}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentRequest;
