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
        <p className="font-semibold text-[96px] w-[741.33px] relative pt-[318.67px] ml-[149.33px] text-[#292E3D]">
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
      <p className="mt-[80px] text-center text-[48px] font-bold text-[#292E3D] relative">
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
      <div className="max-w-[1920px] h-[964px] flex">
        <Image
          src={"theBox/Group 1.svg"}
          alt="group"
          width={854.67}
          height={750.67}
          className="mt-[137.33px] ml-[238.67px]"
        />
        <div className="mt-[239.33px] ml-[165.33px]">
          <p className="w-[478.67px] text-[80px] font-bold text-[#2947A9] leading-24">
            30 Years Experience
          </p>
          <p className="w-[440px] mt-[52px] text-[26.67px] text-[#525B7A] leading-8">
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </p>
          <div className="w-[234.67px] h-[70.67px] bg-[#2947A9] text-white flex items-center justify-center text-2xl mt-[89.33px]">
            Contact Us
          </div>
        </div>
      </div>
      <div className="max-w-[1920px] h-[400] relative flex">
        <Image
          src={"theBox/consult.svg"}
          alt="consult"
          width={1920}
          height={400}
          className="absolute"
        />
        <div className="pt-[133.33px] pl-[149.33px] relative">
          <p className="font-bold text-[48px] text-white">
            Free consultation with exceptional quality
          </p>
          <p className="text-[32px] mt-[40px] text-white">
            Just one call away: +84 1102 2703
          </p>
        </div>
        <div className="w-[309.33px] h-[70.67px] flex items-center justify-center rounded-[2.67px] border-[2.67px] mt-[186.67px] ml-[296.67px] border-white relative text-white text-2xl font-semibold">
          Get your consultation
        </div>
      </div>
      <div className="max-w-[1920px] h-[1464px] flex flex-row justify-between mt-[134px]">
        <div className="mt-[117.33px] ml-[149.33px]">
          <p className="text-[48px] font-bold text text-[#292E3D]">Projects</p>
          <div>
            <p className="w-[69.67px] h-[38px] text-[32px] font-bold text-[#2947A9] border-l-4 pl-[21.33px] mt-[53.33px] flex items-center text-left">
              All
            </p>
            <p className="text-[32px] text-[#C2C7D6] mt-[26px] ml-[26.67px] font-medium">
              Commercial
            </p>
            <p className="text-[32px] text-[#C2C7D6] mt-[26px] ml-[26.67px] font-medium">
              Residential
            </p>
            <p className="text-[32px] text-[#C2C7D6] mt-[26px] ml-[26.67px] font-medium">
              Other
            </p>
          </div>
        </div>
        <div className="w-[1066.67px] h-[1053.33px] mt-[226.67px] mr-[149.33px] flex flex-wrap gap-[42.67px]">
          <div className="w-[512px] h-[441.67px] flex flex-col">
            <Image
              src={"theBox/card1.svg"}
              alt="card1"
              width={512}
              height={329.33}
            />
            <div className="w-[512px] h-[112.33px] text-white bg-[#2947A9] p-4">
              <p className="text-[26.67px] font-bold">Wildstone Infra Hotel</p>
              <p className="text-2xl font-normal">
                2715 Ash Dr. San Jose, South Dakota
              </p>
            </div>
          </div>
          <div className="w-[512px] h-[441.67px] flex flex-col">
            <Image
              src={"theBox/card2.svg"}
              alt="card1"
              width={512}
              height={329.33}
            />
            <div className="w-[512px] h-[112.33px] text-white bg-[#2947A9] p-4">
              <p className="text-[26.67px] font-bold">Wish Stone Building</p>
              <p className="text-2xl font-normal">
                2972 Westheimer Rd. Santa Ana, Illinois
              </p>
            </div>
          </div>
          <div className="w-[512px] h-[441.67px] flex flex-col">
            <Image
              src={"theBox/card3.svg"}
              alt="card3"
              width={512}
              height={329.33}
            />
            <div className="w-[512px] h-[112.33px] text-white bg-[#2947A9] p-4">
              <p className="text-[26.67px] font-bold">Mr. Parkinston’s House</p>
              <p className="text-2xl font-normal">
                3517 W. Gray St. Utica, Pennsylvania
              </p>
            </div>
          </div>
          <div className="w-[512px] h-[441.67px] flex flex-col">
            <Image
              src={"theBox/card4.svg"}
              alt="card1"
              width={512}
              height={329.33}
            />
            <div className="w-[512px] h-[112.33px] text-white bg-[#2947A9] p-4">
              <p className="text-[26.67px] font-bold">Oregano Height</p>
              <p className="text-2xl font-normal">
                2464 Royal Ln. Mesa, New Jersey
              </p>
            </div>
          </div>
          <div className="w-full h-[85.33px] flex justify-between items-center ">
            <div className="w-[393.33px] h-[85.33px] bg-[#292E3D] flex items-center gap-[13.33px] justify-center">
              <Image
                src={"theBox/left.svg"}
                alt="left"
                width={34.67}
                height={22.67}
              />
              <p className="text-2xl text-white">Back</p>
            </div>
            <div className="flex items-center gap-[21.33px]">
              <div className="rounded-full w-[21.33px] h-[21.33px] bg-[#2947A9]"></div>
              <div className="rounded-full w-[21.33px] h-[21.33px] bg-[#F6F8F7]"></div>
              <div className="rounded-full w-[21.33px] h-[21.33px] bg-[#F6F8F7]"></div>
              <div className="rounded-full w-[21.33px] h-[21.33px] bg-[#F6F8F7]"></div>
              <div className="rounded-full w-[21.33px] h-[21.33px] bg-[#F6F8F7]"></div>
            </div>
            <div className="w-[393.33px] h-[85.33px] bg-[#292E3D] flex items-center gap-[13.33px] justify-center">
              <p className="text-2xl text-white">Next</p>
              <Image
                src={"theBox/right.svg"}
                alt="right"
                width={34.67}
                height={22.67}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] h-[842.67px] flex flex-col justify-center bg-[#F6F8F7]">
        <p className="font-bold text-[48px] text-center">What can us do for you?</p>
        <p className="w-[718.67px] text-center text-[26.67px] mx-auto mt-[26.67px]">We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
        <div className="w-[789.33px] mt-[50px] text-[#A3AAC2] flex gap-[26.67px] justify-between mx-auto flex-wrap">
            <div className="w-[373.33px] h-[54.67px] rounded-[5.33px] border-[1.33px] bg-white border-[#E0E3EB] text-2xl flex items-center pl-[10.67px]"><p>Your Name<strong className=" text-[#ED6565]">*</strong></p></div>
            <div className="w-[373.33px] h-[54.67px] rounded-[5.33px] border-[1.33px] bg-white border-[#E0E3EB] text-2xl flex items-center pl-[10.67px]"><p>Email<strong className=" text-[#ED6565]">*</strong></p></div>
            <div className="w-[373.33px] h-[54.67px] rounded-[5.33px] border-[1.33px] bg-white border-[#E0E3EB] text-2xl flex items-center justify-between  px-[10.67px]"><p>Reason for Contacting<strong className=" text-[#ED6565]">*</strong></p> <Image src={"theBox/drop-down.svg"} alt="dropdown" width={26.67} height={26.67}/></div>
            <div className="w-[373.33px] h-[54.67px] rounded-[5.33px] border-[1.33px] bg-white border-[#E0E3EB] text-2xl flex items-center pl-[10.67px]"><p>Phone<strong className=" text-[#ED6565]">*</strong></p></div>
            <div className="w-full h-[180px] rounded-[5.33px] border-[1.33px] bg-white border-[#E0E3EB] text-2xl pl-[10.67px] pt-[13.33px]"><p>Messages<strong className="text-[#ED6565]">*</strong></p></div>
        </div>
            <p className="w-[789.33px] mx-auto mt-[10.67px] text-[21.33px] text-[#A3AAC2]"><strong className="text-[#ED6565]">*</strong> Indicates a reuired field</p>
            <div className="w-[361.67px] h-[70.67px] bg-[#2947A9] rounded-[2.67px] flex items-center justify-center text-white font-semibold mx-auto mt-[37.67px] text-2xl">Submit</div>
      </div>
      <div className="max-w-[1920px] h-[502.67px] bg-white"></div>
      <div className="max-w-[1920px] bg-[#2947A9] h-[93.33px] flex items-center text-[21.33px] text-white pl-[149.33px]">TheBox Company © 2022. All Rights Reserved</div>
    </div>
  );
}
