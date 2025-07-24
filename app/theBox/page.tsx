"use client";

import Image from "next/image";
import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "900"],
});

export default function TheBox() {
  return (
    <div className={`${work_sans.className} bg-white`}>
      <nav className="h-[106.67px] flex items-center justify-between px-[149.33px]">
        <div className="flex">
          <Image
            src={"theBox/logo.svg"}
            alt="logo"
            width={50.67}
            height={63.33}
          />
          <p className="text-[#2947A9] text-[40px] font-bold ml-[18.67px]">
            <strong className="italic font-bold">The</strong>Box
          </p>
        </div>

        <div className="flex gap-[66.67px] text-2xl">
          <p>Home</p>
          <p>About Us</p>
          <p>Projects</p>
          <p>Services</p>
          <p className="font-semibold text-[#F9995D]">Contact Us</p>
        </div>
      </nav>

      <div className="relative max-w-[1920px] h-[861.33px]">
        <Image
          src={"theBox/Hero.svg"}
          alt="Hero"
          width={19}
          height={86.33}
          className="absolute w-screen"
        />
        <p className="font-semibold text-[96px] w-[741.33px] relative pt-[318.67px] ml-[149.33px]">
          Building things is our mission.
        </p>
        <div className="bg-[#3559C7] right-0 bottom-[7px] absolute text-white w-[554.67px] h-[253.33px] rounded-t flex flex-col justify-between">
          <p className="font-bold text-center text-[26.67px] pt-[26.67px]">
            Feature Projects
          </p>
          <p className="text-center text-[32px]">
            The National University of Architecture
          </p>
          <div className="w-full flex mt-[34.33px]">
            <div className="w-[277.33px] bg-[#292E3D] border-r border-white text-[24px] h-[53.33px] flex justify-center items-center">
              <Image
                src={"theBox/left.svg"}
                alt="left"
                width={34.67}
                height={22.67}
              />
              <p>Back</p>
            </div>
            <div className="w-[277.33px] bg-[#292E3D] border-l border-white text-[24px] h-[53.33px] flex justify-center items-center">
              <p>Next</p>
              <Image
                src={"theBox/right.svg"}
                alt="left"
                width={34.67}
                height={22.67}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-[80px] text-center text-[48px] font-bold text-black relative">
        Our Reputation
      </p>
      <div className="mt-[66.67px] mx-[272px] flex justify-between">
        <div className="rounded-[5.33px] w-[389.33px] h-[262.33px] p-[26.67px] border border-[#E0E3EB]">
          <Image
            src={"theBox/headset.svg"}
            alt="headset"
            width={53.33}
            height={53.33}
          />
          <p className="text-[#3D445C] font-bold text-[26.67px] mt-[24px]">
            Best Services
          </p>
          <p className="text-[#858EAD] mt-6 text-[21.33px]">
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </p>
        </div>
        <div className="rounded-[5.33px] w-[389.33px] h-[262.33px] p-[26.67px] border border-[#E0E3EB]">
          <Image
            src={"theBox/headset.svg"}
            alt="headset"
            width={53.33}
            height={53.33}
          />
          <p className="text-[#3D445C] font-bold text-[26.67px] mt-[24px]">
            Best Teams
          </p>
          <p className="text-[#858EAD] mt-6 text-[21.33px]">
            Cursus semper tellus volutpat aliquet lacus.
          </p>
        </div>
        <div className="rounded-[5.33px] w-[389.33px] h-[262.33px] p-[26.67px] border border-[#E0E3EB]">
          <Image
            src={"theBox/pencil.svg"}
            alt="headset"
            width={53.33}
            height={53.33}
          />
          <p className="text-[#3D445C] font-bold text-[26.67px] mt-[24px]">
            Best Designs
          </p>
          <p className="text-[#858EAD] text-[21.33px] mt-[24px]">
            Ultricies ai ipsum nunc, tristique nam lectus.
          </p>
        </div>
      </div>
    </div>
  );
}
