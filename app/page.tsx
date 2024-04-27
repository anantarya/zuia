"use client";
import React from "react";

import { signOut, useSession } from "next-auth/react";
// import { Button } from "@/components/ui/button";
import SignOut from "@/components/SignOut";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import FrameComponent4 from "./components/frame-component4";
import FrameComponent3 from "./components/frame-component3";
import FrameComponent2 from "./components/frame-component2";
import TalentRequest from "./components/talent-request";
import FrameComponent1 from "./components/frame-component1";
import FrameComponent from "./components/frame-component";
const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div>
      
      
      <div className="w-screen relative bg-background-color overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-17xl text-black font-title-medium mq900:pl-5 mq900:pr-5 mq900:box-border">
      <div className="w-[242px] flex flex-col items-center justify-center pt-5 px-0 pb-[272px] box-border gap-[39px] mq900:hidden mq900:pb-[177px] mq900:box-border">
        <div className="w-32 flex flex-row items-start justify-start p-2.5 box-border">
          <h1 className="m-0 flex-1 relative text-inherit leading-[42px] font-semibold font-inherit mq900:text-10xl mq900:leading-[34px] mq450:text-3xl mq450:leading-[25px]">
            ZUAI
          </h1>
        </div>
        <FrameComponent4  />
        <FrameComponent3 />
      </div>
      <main className="w-full flex-1 bg-just-white flex flex-row items-start justify-start relative gap-[50px] max-w-[calc(100%_-_242px)] mq700:gap-[25px] mq900:max-w-full">
        <div className="self-stretch w-full relative bg-just-white hidden max-w-full z-[0]" />
        <div className="h-[900px] w-px relative bg-whitesmoke" />
        <section className="flex-1 flex flex-col items-start justify-start gap-[22px] w-full text-left text-[24px] text-main-color font-title-medium">
          <FrameComponent2  />
          <div className="w-full flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[10px] max-w-full">
            <h3 className="m-0 w-[630px] relative text-inherit leading-[42px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full z-[1] mq450:text-[19px] mq450:leading-[34px]">
              Dashboard
            </h3>
            <div className="self-stretch flex flex-row items-end justify-start gap-[30px] max-w-full text-lg mq900:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[416px] max-w-full mq700:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[14px] mq700:flex-wrap">
                  <div className="flex-1 rounded-3xs bg-linen overflow-hidden flex flex-col items-start justify-start py-3 pr-3 pl-5 box-border gap-[16px] min-w-[153px] z-[1]">
                    <div className="self-stretch relative leading-[28px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Available Position
                    </div>
                    <div className="self-stretch relative text-17xl leading-[28px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq900:text-10xl mq900:leading-[22px] mq450:text-3xl mq450:leading-[17px]">
                      24
                    </div>
                    <div className="self-stretch relative text-base leading-[24px] font-subtitle-small">
                      4 Urgently needed
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xs bg-aliceblue overflow-hidden flex flex-col items-start justify-start py-3 pr-3 pl-5 box-border gap-[16px] min-w-[153px] z-[1] text-dodgerblue">
                    <div className="self-stretch relative leading-[28px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Job Open
                    </div>
                    <div className="self-stretch relative text-17xl leading-[28px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq900:text-10xl mq900:leading-[22px] mq450:text-3xl mq450:leading-[17px]">
                      10
                    </div>
                    <div className="self-stretch relative text-base leading-[24px] font-subtitle-small">
                      4 Active hiring
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xs bg-lavenderblush overflow-hidden flex flex-col items-start justify-start py-3 pr-3 pl-5 box-border gap-[16px] min-w-[153px] z-[1] text-orchid">
                    <div className="self-stretch relative leading-[28px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      New Employees
                    </div>
                    <div className="self-stretch relative text-17xl leading-[28px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq900:text-10xl mq900:leading-[22px] mq450:text-3xl mq450:leading-[17px]">
                      24
                    </div>
                    <div className="self-stretch relative text-base leading-[24px] font-subtitle-small">
                      4 Department
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq700:flex-wrap">
                  <TalentRequest
                    totalEmployees="Total Employees"
                    prop="216"
                    men="120 Men"
                    women="96 Women"
                    vector3="/women-indicator.svg"
                    prop1="+2%"
                    pastMonth="+2% Past month"
                  />
                  <TalentRequest
                    totalEmployees="Talent Request"
                    prop="16"
                    men="6 Men"
                    women="10 Women"
                    vector3="/vector-3-1.svg"
                    prop1="+5%"
                    pastMonth="+5% Past month"
                  />
                </div>
                <div className="self-stretch rounded-xl bg-just-white box-border flex flex-col items-start justify-start pt-3.5 px-0 pb-0 gap-[8px] max-w-full z-[1] text-secondary-title-color border-[1px] border-solid border-gainsboro-200">
                  <div className="self-stretch h-[334px] relative rounded-xl bg-just-white box-border hidden border-[1px] border-solid border-gainsboro-200" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[16px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq700:flex-wrap">
                        <div className="w-[427px] relative leading-[28px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full">
                          Announcement
                        </div>
                        <FormControl
                          className="h-[27px] w-[145px] font-subtitle-small text-xs text-primary-subtitle-color"
                          variant="standard"
                          sx={{
                            borderColor: "#efefef",
                            borderStyle: "SOLID",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            backgroundColor: "#fff",
                            borderRadius: "4px",
                            width: "24.24749163879599%",
                            height: "27px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "27px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "27px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "27px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "27px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              color: "#686868",
                              fontSize: 12,
                              fontWeight: "Regular",
                              fontFamily: "Roboto",
                              textAlign: "left",
                              p: "0 !important",
                              marginLeft: "8px",
                            },
                          }}
                        >
                          <InputLabel color="secondary" />
                          <Select
                            color="secondary"
                            disableUnderline
                            displayEmpty
                            IconComponent={() => (
                              <img
                                width="18px"
                                height="18px"
                                src="/frame-10-1.svg"
                                style={{ marginRight: "6px" }}
                              />
                            )}
                          >
                            <MenuItem>Today, 13 Sep 2021</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                        <FrameComponent1
                          outingScheduleForEveryDep="Outing schedule for every departement"
                          minutesAgo="5 Minutes ago"
                          bipinAngleFill="/bipinanglefill.svg"
                        />
                        <FrameComponent1
                          outingScheduleForEveryDep="Meeting HR Department"
                          minutesAgo="Yesterday, 12:30 PM"
                          bipinAngleFill="/bipinanglefill-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[122px] relative max-w-full text-base mq700:h-auto mq700:min-h-[122]">
                    <div className="absolute top-[0px] left-[20px] rounded-md bg-background-color box-border w-[600px] overflow-hidden flex flex-row items-start justify-between py-[11px] pr-[17px] pl-[15px] max-w-full gap-[20px] z-[1] border-[0.5px] border-solid border-gainsboro-200 mq700:flex-wrap">
                      <div className="w-[405px] flex flex-col items-start justify-start gap-[6px] max-w-full">
                        <div className="self-stretch relative leading-[24px]">
                          IT Department need two more talents for UX/UI Designer
                          position
                        </div>
                        <div className="self-stretch relative text-3xs leading-[14px] font-subtitle-small text-primary-subtitle-color whitespace-nowrap">
                          Yesterday, 09:15 AM
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
                        <div className="flex flex-row items-start justify-start gap-[20px]">
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/bipinanglefill-1.svg"
                          />
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/carbonoverflowmenuhorizontal.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <button className="cursor-pointer py-2 px-[9px] bg-just-white absolute top-[83px] left-[0px] rounded-t-none rounded-b-3xs box-border w-[640px] overflow-hidden flex flex-row items-start justify-start max-w-full z-[2] border-[1px] border-solid border-gainsboro-200 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver">
                      <div className="flex-1 relative text-sm leading-[20px] font-medium font-title-medium text-main-color text-center inline-block max-w-full">
                        See All Announcement
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[427px] flex flex-col items-start justify-start gap-[20px] min-w-[427px] max-w-full text-just-white mq700:min-w-full mq900:flex-1">
                <div className="self-stretch rounded-3xs [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border gap-[27px] max-w-full z-[1]">
                  <div className="self-stretch h-[258px] relative rounded-3xs [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] hidden" />
                  <div className="self-stretch rounded-t-3xs rounded-b-none bg-darkslateblue overflow-hidden flex flex-row items-start justify-start py-2.5 pr-2.5 pl-6 box-border whitespace-nowrap max-w-full z-[1]">
                    <div className="flex-1 relative leading-[28px] font-medium inline-block max-w-full">
                      Recently Activity
                    </div>
                  </div>
                  <div className="w-[388px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-3xs text-gray-100 font-subtitle-small">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px] max-w-full">
                      <div className="self-stretch relative font-medium z-[1]">
                        10.40 AM, Fri 10 Sept 2021
                      </div>
                      <div className="self-stretch relative text-lg leading-[28px] font-medium font-title-medium text-just-white z-[1]">
                        You Posted a New Job
                      </div>
                      <div className="self-stretch relative text-sm leading-[20px] text-gray-200 z-[1]">
                        Kindly check the requirements and terms of work and make
                        sure everything is right.
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[34px] pl-6 box-border max-w-full text-sm">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[35px] max-w-full z-[1] mq450:flex-wrap mq450:gap-[17px]">
                      <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
                        <div className="relative">
                          Today you makes 12 Activity
                        </div>
                      </div>
                      <Button
                        className="h-[38px] w-[139px]"
                        disableElevation={true}
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "14",
                          background: "#ff5151",
                          borderRadius: "4px",
                          "&:hover": { background: "#ff5151" },
                          width: 139,
                          height: 38,
                        }}
                      >
                        See All Activity
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[424px] rounded-xl bg-just-white box-border overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-[21px] px-0 pb-16 gap-[8px] max-w-full z-[1] text-secondary-title-color border-[1px] border-solid border-gainsboro-200 mq700:pt-5 mq700:pb-[42px] mq700:box-border mq450:h-auto">
                  <div className="self-stretch h-[424px] relative rounded-xl bg-just-white box-border shrink-0 hidden border-[1px] border-solid border-gainsboro-200" />
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2 pr-5 pl-[21px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] z-[1] mq450:flex-wrap">
                      <div className="w-[200px] relative leading-[28px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#161e54] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        Upcoming Schedule
                      </div>
                      <FormControl
                        className="h-[27px] w-[145px] font-subtitle-small text-xs text-primary-subtitle-color"
                        variant="standard"
                        sx={{
                          borderColor: "#efefef",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          backgroundColor: "#fff",
                          borderRadius: "4px",
                          width: "37.56476683937824%",
                          height: "27px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "27px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "27px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "27px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "27px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "#686868",
                            fontSize: 12,
                            fontWeight: "Regular",
                            fontFamily: "Roboto",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "8px",
                          },
                        }}
                      >
                        <InputLabel color="secondary" />
                        <Select
                          color="secondary"
                          disableUnderline
                          displayEmpty
                          IconComponent={() => (
                            <img
                              width="18px"
                              height="18px"
                              src="/frame-10-2.svg"
                              style={{ marginRight: "6px" }}
                            />
                          )}
                        >
                          <MenuItem>Today, 13 Sep 2021</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                  </div>
                  <FrameComponent
                    priority="Priority"
                    thisIsTitle="Review candidate applications"
                    today1130AM="Today - 11.30 AM"
                  />
                  <FrameComponent
                    priority="Other"
                    thisIsTitle="Interview with candidates"
                    today1130AM="Today - 10.30 AM"
                    propDisplay="unset"
                    propMinWidth="unset"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-[15px]">
                    <div className="flex-1 rounded-md bg-background-color box-border overflow-hidden flex flex-row items-start justify-start py-[9px] px-[15px] gap-[29px] max-w-full z-[1] border-[0.5px] border-solid border-gainsboro-200 mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border gap-[6px] min-w-[168px]">
                        <div className="w-[283px] relative leading-[24px] inline-block">
                          Short meeting with product designer from IT
                          Departement
                        </div>
                        <div className="self-stretch relative text-3xs leading-[14px] font-subtitle-small text-primary-subtitle-color">
                          Today - 09.15 AM
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
                        <div className="flex flex-row items-start justify-start gap-[20px]">
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/icnotifications.svg"
                          />
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/carbonoverflowmenuhorizontal.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[88px] relative shrink-0 max-w-full text-base">
                    <div className="absolute top-[0px] left-[20px] rounded-md bg-background-color box-border w-[387px] overflow-hidden flex flex-row items-start justify-start py-[9px] px-[15px] gap-[29px] z-[1] border-[0.5px] border-solid border-gainsboro-200">
                      <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 gap-[6px]">
                        <div className="w-[283px] relative leading-[24px] font-medium inline-block">
                          Sort Front-end developer candidates
                        </div>
                        <div className="self-stretch h-3.5 relative text-3xs leading-[14px] font-subtitle-small text-primary-subtitle-color inline-block">
                          Today - 11.30 AM
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
                        <div className="flex flex-row items-start justify-start gap-[20px]">
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/icnotifications.svg"
                          />
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/carbonoverflowmenuhorizontal.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <button className="cursor-pointer py-2 px-[9px] bg-just-white absolute top-[17px] left-[0px] rounded-t-none rounded-b-3xs box-border w-[427px] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap max-w-full z-[2] border-[1px] border-solid border-gainsboro-200 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver">
                      <div className="flex-1 relative text-sm leading-[20px] font-medium font-title-medium text-main-color text-center inline-block max-w-full">
                        Creat a New Schedule
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-px w-[1148px] absolute !m-[0] top-[1238px] right-[-1px] bg-whitesmoke [transform:_rotate(-90deg)] [transform-origin:0_0] z-[2]" />
      </main>
    </div>

    </div>
  );
};

export default Dashboard;
