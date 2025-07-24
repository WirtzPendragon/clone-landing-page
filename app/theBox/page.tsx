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

      <div className="max-w-[1920px] h-[1260px] pt-[98.67px] pl-[152px] relative mt-[112.33px]">
        <Image
          src={"theBox/father.svg"}
          alt="profile"
          width={1202.67}
          height={892}
          className="absolute"
        />
        <div className="w-[650.67px] h-[697.33px] bg-[#2947A9] relative pl-[53.33px] ml-[969px] mt-[97.33px] rounded-[2.67px] text-white pt-[66.67px]">
          <p className="font-bold text-[48px]">About us</p>
          <p className="mt-[49.33px] text-[26.67px] w-[517.33px] h-[279px] leading-[30px]">
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way. <br /> <br /> We’ve matured into an industry leader and trusted
            resource for those seeking quality, innovation and reliability when
            building in the U.S.
          </p>
          <div className="bg-white text-[#2947A9] w-[292.33px] h-[70.67px] rounded-[8px] flex items-center justify-center font-semibold text-2xl mt-[95.67px]">
            More on Our History
          </div>
        </div>
      </div>
      <div className="max-w-[1920px] bg-[#F6F8F7] pt-[58.67px]  px-[288px] pb-[101.33px]">
        <p className="text-[48px] font-bold text-center text-[#292E3D] mb-[48px]">
          Services
        </p>
        <div className="flex justify-between flex-wrap">
          <div className="w-[361.33px] h-[241.33px] bg-white text-[#2947A9] rounded-[5.33px] shadow-xl flex flex-col justify-evenly items-center">
            <div className="flex flex-col items-center gap-[26.67px]">
              <Image
                src={"theBox/house.svg"}
                alt="house"
                width={53.33}
                height={53.33}
              />
              <div className="bg-[#E0E3EB] w-[80px] h-[2.67px]"></div>
            </div>
            <p className="font-semibold text-[26.67px]">Construction</p>
          </div>
          <div className="w-[361.33px] h-[241.33px] text-white bg-[#2947A9] rounded-[5.33px] shadow-xl flex flex-col justify-evenly items-center">
            <div className="flex flex-col items-center gap-[26.67px]">
              <Image
                src={"theBox/git.svg"}
                alt="house"
                width={53.33}
                height={53.33}
              />
              <div className="bg-[#E0E3EB] w-[80px] h-[2.67px]"></div>
            </div>
            <p className="font-semibold text-[26.67px]">Renovation</p>
          </div>
          <div className="w-[361.33px] h-[241.33px] bg-white text-[#2947A9] rounded-[5.33px] shadow-xl flex flex-col justify-evenly items-center">
            <div className="flex flex-col items-center gap-[26.67px]">
              <Image
                src={"theBox/handshake.svg"}
                alt="house"
                width={53.33}
                height={53.33}
              />
              <div className="bg-[#E0E3EB] w-[80px] h-[2.67px]"></div>
            </div>
            <p className="font-semibold text-[26.67px]">Consultation</p>
          </div>
          <div className="w-[361.33px] h-[241.33px] text-white bg-[#2947A9] mt-[64px] rounded-[5.33px] shadow-xl flex flex-col justify-evenly items-center">
            <div className="flex flex-col items-center gap-[26.67px]">
              <Image
                src={"theBox/bag.svg"}
                alt="house"
                width={53.33}
                height={53.33}
              />
              <div className="bg-[#E0E3EB] w-[80px] h-[2.67px]"></div>
            </div>
            <p className="font-semibold text-[26.67px]">Repair Services</p>
          </div>
          <div className="w-[361.33px] h-[241.33px] bg-white mt-[64px] text-[#2947A9] rounded-[5.33px] shadow-xl flex flex-col justify-evenly items-center">
            <div className="flex flex-col items-center gap-[26.67px]">
              <Image
                src={"theBox/architecture.svg"}
                alt="house"
                width={53.33}
                height={53.33}
              />
              <div className="bg-[#E0E3EB] w-[80px] h-[2.67px]"></div>
            </div>
            <p className="font-semibold text-[26.67px]">Architecture</p>
          </div>
          <div className="w-[361.33px] h-[241.33px] text-white bg-[#2947A9] mt-[64px] rounded-[5.33px] shadow-xl flex flex-col justify-evenly items-center">
            <div className="flex flex-col items-center gap-[26.67px]">
              <Image
                src={"theBox/electric.svg"}
                alt="house"
                width={53.33}
                height={53.33}
              />
              <div className="bg-[#E0E3EB] w-[80px] h-[2.67px]"></div>
            </div>
            <p className="font-semibold text-[26.67px]">Electric</p>
          </div>
        </div>
      </div>
    </div>
  );
}
