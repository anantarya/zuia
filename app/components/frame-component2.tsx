"use client"

import type { NextPage } from "next";

import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { useRouter } from "next/router";

import { signOut, useSession } from "next-auth/react";
import SignOut from "@/components/SignOut";
import { useEffect } from "react";


import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const FrameComponent2 : NextPage =  () => {
    const { data: session } = useSession();

    useEffect(() => {
         console.log(session);
         
    })
  
  return (
    <header className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] z-[1] mq900:flex-wrap">
      <TextField
        className="[border:none] bg-[transparent] h-11 w-[343px] font-title-medium text-base text-darkgray max-w-full"
        placeholder="Search"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <img width="24px" height="24px" src="/search-icon.png" />
          ),
        }}
        sx={{
          "& fieldset": { borderColor: "#e0e0e0" },
          "& .MuiInputBase-root": {
            height: "44px",
            backgroundColor: "#fafafa",
            paddingRight: "16px",
          },
          "& .MuiInputBase-input": { color: "#b3b3b3" },
          width: "343px",
        }}
      />
      <div className="w-[364px] flex flex-row items-center justify-center py-6 pr-[56.5px] pl-[6.5px] box-border gap-[30px] max-w-full mq450:gap-[15px] mq450:pr-5 mq450:box-border cursor-pointer">
      
      <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

        {session?.user?.email?.split("@")[0]}
       
    
       
      <SignOut />

        <div className="h-6 w-6 relative overflow-hidden shrink-0">
          <div className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] bg-black hidden" />
          <img
            className="absolute h-3/4 w-9/12 top-[12.5%] right-[12.5%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
        <div className="flex-1 flex flex-row items-center justify-start gap-[12px]">
 
          <FormControl
            className="h-6 flex-1 font-title-medium font-medium text-base [-webkit-text-fill-color:transparent] w-auto"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "72.02072538860104%",
              height: "24px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "24px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "24px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#161e54",
                fontSize: 16,
                fontWeight: "Medium",
                fontFamily: "Poppins",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="24px"
                  height="24px"
                  src="/profile-menu.svg"
                  style={{}}
                />
              )}
            >
              
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
