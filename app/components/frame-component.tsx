import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  priority?: string;
  thisIsTitle?: string;
  today1130AM?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  priority,
  thisIsTitle,
  today1130AM,
  propDisplay,
  propMinWidth,
}) => {
  const priorityStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[19px] box-border max-w-full text-left text-xs text-primary-subtitle-color font-title-medium">
      <div className="flex-1 flex flex-col items-start justify-start gap-[3px] max-w-full">
        <div
          className="relative leading-[28px] inline-block min-w-[41px] z-[1]"
          style={priorityStyle}
        >
          {priority}
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-base text-secondary-title-color">
          <div className="flex-1 rounded-md bg-background-color box-border overflow-hidden flex flex-row items-start justify-start py-[9px] px-[15px] gap-[29px] max-w-full z-[1] border-[0.5px] border-solid border-gainsboro-200 mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border gap-[6px] min-w-[168px]">
              <div className="w-[283px] relative leading-[24px] inline-block">
                {thisIsTitle}
              </div>
              <div className="self-stretch relative text-3xs leading-[14px] font-subtitle-small text-primary-subtitle-color">
                {today1130AM}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/icnotifications.svg"
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
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
