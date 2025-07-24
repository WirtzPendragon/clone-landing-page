"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export default function aStudio() {
  return (
    <div className={`w-screen bg-[#FEFEFE]`}>
      <style jsx>{`
        @font-face {
          font-family: "AvertaCustom";
          src: url("/fonts/AvertaDemoPECuttedDemo.ttf") format("truetype");
        }

        .custom-font {
          font-family: "AvertaCustom", sans-serif;
        }
      `}</style>
      <div className="w-full custom-font">
        <nav className="w-screen px-30 font-semibold h-[116px] pt-[42px] pb-[40px]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[27.15px]">
                <strong className="font-bold tracking-[-0.5px]">A+</strong>{" "}
                Studio
              </p>
            </div>

            <div className="flex gap-[60px] text-base">
              <a href="">Home</a>
              <a href="">What We Do</a>
              <a href="">Service</a>
              <a href="">Project</a>
              <a href="">Blog</a>
              <a href="">Contact</a>
            </div>
          </div>
        </nav>

        <div className="flex w-full justify-end">
          <div className="w-[1372px] right-0 flex justify-between">
            <div className="my-[124px] ml-[52px] relative">
              <p className="font-semibold tracking-[-1px] text-[40px]">
                A Digital Product Agency
              </p>
              <p className="w-[471px] text-base text-[#565656] pr-2 mt-10 leading-[160%]">
                Leading digital agency with solid design and development
                expertise. We build readymade websites, mobile applications, and
                elaborate online business services.
              </p>
              <div className="mt-[33px] w-[215px] font-semibold text-white flex relative justify-center items-center text-xl h-[65px] bg-[#2639ED] z-[10] rounded-full">
                <p>Contact Now</p>
              </div>
              <div className="w-[404px] h-[154px] left-[-52px] top-[242px] z-[1] absolute">
                <Image
                  src={"Dot Ornament.svg"}
                  width={404}
                  height={154}
                  alt="Dot Ornament"
                />
              </div>
            </div>
            <div className="relative">
              <Image
                width={754}
                height={512}
                src={"hero-img.svg"}
                alt="hero img"
                className="relative z-[10]"
              ></Image>
              <div className="rounded-full w-[129px] h-[129px] bg-[#DAE9FF] absolute left-[-52px] top-0 z-[2]"></div>
              <div className="w-[178px] h-[178px] rounded-br-[100px] bg-[#FFF5DB] absolute right-[100px] bottom-[-82px]"></div>
            </div>
          </div>
        </div>

        <div className="w-[1199.55px] h-[124px] flex justify-between mx-auto mt-[136px]">
          <div>
            <p className="font-semibold text-[40px]">Our Client</p>
            <p className="w-[336px] text-lg text-[#757575]">
              Several selected clients, who already believe in our service.
            </p>
          </div>
          <div className="flex items-center gap-[59.59px]">
            <Image
              src={"Google Logo.svg"}
              alt="google"
              width={150.48}
              height={49.38}
              className=""
            />
            <Image
              src={"Airbnb Logo.svg"}
              alt="airnb"
              width={166.41}
              height={52.14}
              className=""
            />
            <Image
              src={"Uber Eats Logo.svg"}
              alt="uber eats"
              width={165.71}
              height={26.99}
              className=""
            />
            <Image
              src={"Amazon Logo.svg"}
              alt="amazon"
              width={141.55}
              height={42.61}
              className=""
            />
          </div>
        </div>

        <div className="mt-[96px] flex w-full justify-end relative">
          <div className="w-[1047px] h-[619px] rounded-tl-[150px] bg-[#F4F9FF] absolute z-[1] mt-[140px]"></div>
          <div className="rounded-full border-[8.8px] absolute bottom-[40px] mr-[143px] w-[120px] h-[120px] border-[#FF007A]"></div>
          <div className="bg-[#FFF5DB] absolute w-[178px] h-[178px] rounded-tl-[100px] left-0 ml-[82px] mt-[300px]"></div>
          <Image
            src={"Group 70.svg"}
            alt="dot"
            width={405}
            height={154}
            className="absolute left-0 ml-[125px] mt-[644px]"
          />
          <div className="w-[1358px] h-[867px] flex justify-between items-center relative z-[2]">
            <div>
              <p className="w-[358px] font-semibold text-[40px] ml-[38px] tracking-[-1px]">
                How can we help your Business ?
              </p>
              <p className="ml-[38px] w-[396px] text-base pr-4 leading-[160%] text-[#565656]">
                We build readymade websites, mobile applications, and elaborate
                online business services.
              </p>
            </div>

            <div className="w-[823px] flex flex-row flex-wrap gap-[30px] relative z-[2]">
              <div className="bg-white mt-[79px] border border-[#F2F2F2] w-[308px] h-[379px] rounded-[40px] shadow-lg flex flex-col justify-evenly items-center">
                <div className="w-[121px] h-[121px] rounded-[20px] flex items-center justify-center bg-[#F1F7FF]">
                  <Image
                    src={"box-search 1.svg"}
                    alt="box search"
                    width={74}
                    height={74}
                  />
                </div>
                <p className="w-[167px] text-2xl font-semibold text-center">
                  Business Idea Planning
                </p>
                <p className="text-center w-[254px] text-[#757575] leading-[140%] text-base">
                  We present you a proposal and discuss niffty-gritty like
                </p>
              </div>
              <div className="bg-white w-[308px] border border-[#F2F2F2] h-[379px] rounded-[40px] shadow-lg flex flex-col justify-evenly items-center">
                <div className="w-[121px] h-[121px] rounded-[20px] flex items-center justify-center bg-[#FFF7E3]">
                  <Image
                    src={"empty-wallet 1.svg"}
                    alt="box search"
                    width={74}
                    height={74}
                  />
                </div>
                <p className="w-[199px] text-2xl font-semibold text-center">
                  Financial Planning System
                </p>
                <p className="text-center w-[254px] text-[#757575] leading-[140%] text-base">
                  Protocols apart from aengage models, pricing billing
                </p>
              </div>
              <div className="bg-white w-[308px] border border-[#F2F2F2] h-[379px] rounded-[40px] shadow-lg flex flex-col justify-evenly items-center">
                <div className="w-[121px] h-[121px] rounded-[20px] flex items-center justify-center bg-[#FFF2F8]">
                  <Image
                    src={"code-1 1.svg"}
                    alt="box search"
                    width={74}
                    height={74}
                  />
                </div>
                <p className="w-[239px] text-2xl font-semibold text-center">
                  Development Website and App
                </p>
                <p className="text-center w-[254px] text-[#757575] leading-[140%] text-base">
                  Communication protocols apart from engagement models
                </p>
              </div>
              <div className="bg-white w-[308px] border translate-y-[-79px] border-[#F2F2F2] h-[379px] rounded-[40px] shadow-lg flex flex-col justify-evenly items-center">
                <div className="w-[121px] h-[121px] rounded-[20px] flex items-center justify-center bg-[#DEFFEE]">
                  <Image
                    src={"chart-square 1.svg"}
                    alt="box search"
                    width={74}
                    height={74}
                  />
                </div>
                <p className="w-[231px] text-2xl font-semibold text-center">
                  Market Analysis Project
                </p>
                <p className="text-center w-[254px] text-[#757575] leading-[140%] text-base">
                  Protocols apart from aengage models, pricing billing
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1200px] mx-auto h-[372px] mt-[146px] flex items-center justify-between relative">
          <div className="rounded-full w-[129px] h-[129px] bg-[#FFF5DB] absolute bottom-[-64px] ml-[462px]"></div>
          <div className="absolute w-[178px] h-[178px] rounded-br-[100px] bg-[#EFF1FF] top-[45px] right-[392px]"></div>
          <div className="relative flex justify-center items center w-[550px] h-[372px]">
            <Image
              src={"video.svg"}
              alt="video"
              width={601}
              height={422}
              className="absolute rounded-[32px] shadow-xl"
            />
            <Image
              src={"play-rounded-button 1.svg"}
              alt="play button"
              width={78}
              height={78}
              className="relative"
            />
          </div>
          <div className="relative">
            <p className="text-[40px] font-bold w-[468px] tracking-[-1px] leading-12">
              Great Digital Product Agency since 2016
            </p>
            <p className="text-base text-[#565656] w-[532px] leading-[160%] mt-[30px]">
              Our Business Plan is a written document describing a company's
              core business activites, Objectives, and how it plans to achieve
              its goals. Our goal is to provide our client high quality Product
              with modern idea accordingly their budgets and according thir
              reuirements.
            </p>
          </div>
        </div>

        <div className="mt-[181px] w-[1264px] h-[597px] mx-auto flex flex-col justify-between">
          <div>
            <p className="text-[40px] font-bold text-center">
              What our happy client say
            </p>
            <p className="text-lg text-[#757575] text-center">
              Several selected clients, who already believe in our service.
            </p>
          </div>
          <div className="w-full bottom-0 h-[389px] flex justify-between relative">
            <div className="absolute w-[120px] h-[120px] border-[8.8px] border-[#FF007A] rounded-full bottom-0"></div>
            <div className="absolute rounded-full w-[184px] h-[184px] right-[143px] bg-[#FFF5DB] mt-[107px]"></div>
            <Image
              src={"Dot 3.svg"}
              alt="dot"
              width={198}
              height={154}
              className="absolute ml-[230px] top-[-42px]"
            />
            <Image
              src={"matthew.svg"}
              alt="matthew"
              width={389}
              height={389}
              className="bottom-0 relative"
            />
            <div className="mt-[84px] relative">
              <p className="font-semibold text-2xl">Matthew Paul</p>
              <p className="mt-[21px] text-[#565656] text-base leading-[160%] w-[412px]">
                Perfect, very good job! Thank you for the amazing design and
                work. Really impressed with the high quality and quick
                turnaround time. Highly recommend.
              </p>
              <div className="flex gap-[26px] mt-[40px]">
                <div className="w-4 h-4 rounded-full bg-[#2639ED]"></div>
                <div className="w-4 h-4 rounded-full bg-[#E7F0FC]"></div>
                <div className="w-4 h-4 rounded-full bg-[#E7F0FC]"></div>
                <div className="w-4 h-4 rounded-full bg-[#E7F0FC]"></div>
                <div className="w-4 h-4 rounded-full bg-[#E7F0FC]"></div>
              </div>
            </div>
            <Image
              src={"Group 71.svg"}
              alt="group 71"
              width={348}
              height={355}
              className="relative"
            />
          </div>
        </div>

        <div className="w-[1197px] h-[292px] mx-auto relative">
          <div className="w-[178px] h-[178px] rounded-bl-[100px] absolute bg-[#FFF5DB] bottom-[-42px] left-[-32px] z-[1]"></div>
          <Image
            src={"Group 73.svg"}
            alt="dot"
            width={175}
            height={154}
            className="absolute right-[-37px] top-[-56px]"
          />
          <div className="mt-[148px] w-[1197px] h-[292px] rounded-[75px] bg-[#F4F9FF] mx-auto relative flex justify-evenly items-center z-[2]">
            <Image
              src={"Rectangle 31.svg"}
              alt="rectangle"
              width={563}
              height={292}
              className="h-[292px] w-[563px] absolute right-[-30px]"
            />
            <div className="">
              <p className="font-bold text-[40px]">Subscribe Newsletter</p>
              <p className="text-[#757575] text-lg">
                I will update good news and promotion service not spam
              </p>
            </div>

            <div className="w-[479px] h-[80px] rounded-[60px] bg-white flex justify-between px-[10px] items-center relative border border-[#F1F1F1] shadow-lg">
              <p className="text-[#959595] text-base ml-[24px]">
                Enter your email address..
              </p>
              <div className="text-white font-semibold text-base rounded-[60px] w-[188px] h-[60px] flex justify-center items-center bg-[#2639ED]">
                Contact Now
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1200px] h-[309px] mx-auto border-y mb-[17px] border-[#E4E4E4] mt-[148px]">
          <div className="flex mt-[60px]">
            <div className="">
              <p className="text-[27.15px]">
                <strong className="font-bold tracking-[-0.5px]">A+</strong>{" "}
                Studio
              </p>
              <p className="mt-[26px] text-sm w-[270px] text-[#565656]">
                Leading digital agency with solid design and development
                expertise. We build readymade websites, mobile applications, and
                elaborate online business services.
              </p>
              <div className="mt-[40px] flex gap-[16px]">
                <Image
                  src={"facebook.svg"}
                  alt="facebook"
                  width={36}
                  height={36}
                />
                <Image
                  src={"twitter.svg"}
                  alt="twitter"
                  width={36}
                  height={36}
                />
                <Image
                  src={"linkedin.svg"}
                  alt="linkedin"
                  width={36}
                  height={36}
                />
              </div>
            </div>
            <div className="ml-[191px]">
              <p className="text-[20px] font-semibold">What We Do</p>
              <div className="flex flex-col mt-[24px] h-[112px] justify-between text-sm">
                <p>Web Design</p>
                <p>App Design</p>
                <p>Social Media Manage</p>
                <p>Market Analysis Project</p>
              </div>
            </div>
            <div className="ml-[120px]">
              <p className="text-[20px] font-semibold">Company</p>
              <div className="flex flex-col mt-[24px] h-[84px] justify-between text-sm">
                <p>About Us</p>
                <p>Career</p>
                <p>Become Investor</p>
              </div>
            </div>
            <div className="ml-[106px]">
              <p className="text-[20px] font-semibold">Support</p>
              <div className="flex flex-col mt-[24px] h-[84px] justify-between text-sm">
                <p>FAQ</p>
                <p>Policy</p>
                <p>Business</p>
              </div>
            </div>
            <div className="ml-[106px]">
              <p className="text-[20px] font-semibold">Support</p>
              <div className="flex flex-col mt-[24px] h-[56px] justify-between text-sm">
                <p>WhatsApp</p>
                <p>Support 24</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-[#A4A4A4] mb-[23px]">Copyright © 2022 Avi Yansah</p>
      </div>
    </div>
  );
}
