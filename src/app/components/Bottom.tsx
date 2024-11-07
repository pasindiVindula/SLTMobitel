"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export function Bottom() {
  return (
    <Footer className="bg-[#283851] rounded-none">
      <div className="w-full">
        <div className="grid w-full pl-32 py-16 xl:grid-cols-5">
          <div>
            <Footer.Title title="About Us" className="text-[#C8E1FF]"/>
            <Footer.LinkGroup col className="text-white text-xs">
              <Footer.Link href="#">Company Profile</Footer.Link>
              <Footer.Link href="#">Vision and Mission</Footer.Link>
              <Footer.Link href="#">Milstones</Footer.Link>
              <Footer.Link href="#">Subsidaries</Footer.Link>
              <Footer.Link href="#">Investors</Footer.Link>
              <Footer.Link href="#">Corporate Responsibility</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="CAREER" className="text-[#C8E1FF]"/>
            <Footer.LinkGroup col className="text-white text-xs">
              <Footer.Link href="#">Job Openings</Footer.Link>
              <Footer.Link href="#">Life at SLTMobitel</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="SUPPORT" className="text-[#C8E1FF]"/>
            <Footer.LinkGroup col className="text-white text-xs">
              <Footer.Link href="#">
              Dual Carrier HSPA+</Footer.Link>
              <Footer.Link href="#">Internet Plans</Footer.Link>
              <Footer.Link href="#">Prepaid Internet</Footer.Link>
              <Footer.Link href="#">Prepaid FAQ</Footer.Link>
              <Footer.Link href="#">Business FAQ</Footer.Link>
              <Footer.Link href="#">Roaming Services</Footer.Link>
              <Footer.Link href="#">Postpaid FAQ</Footer.Link>
              <Footer.Link href="#">Important Activation Codes</Footer.Link>
              <Footer.Link href="#">Late Night Internet</Footer.Link>
              <Footer.Link href="#">Self Help Codes Broadband</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="BUSINESS" className="text-[#C8E1FF]"/>
            <Footer.LinkGroup col className="text-white text-xs">
              <Footer.Link href="#">Business Solutions</Footer.Link>
              <Footer.Link href="#">FAQs</Footer.Link>
            </Footer.LinkGroup>
          </div>
        
          <div>
            <Footer.Title title="SERVICES" className="text-[#C8E1FF]"/>
            <Footer.LinkGroup col className="text-white text-xs">
              <Footer.Link href="#">Plans & Services</Footer.Link>
              <Footer.Link href="#">Tax Informations</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="CONTACT US" className="text-[#C8E1FF]"/>
            <Footer.LinkGroup col className="text-white text-xs">
              <Footer.Link href="#">International Roaming</Footer.Link>
              <Footer.Link href="#">IDD</Footer.Link>
              <Footer.Link href="#">FAQs</Footer.Link>
              <Footer.Link href="#">SMART recharge world cafe</Footer.Link>
              <Footer.Link href="#">Visiting Sri Lanka</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div></div>
          <div></div>
          <div>
            <Footer.Title title="SUSTAINABILITY" className="text-[#C8E1FF]"/>
            <Footer.LinkGroup col className="text-white text-xs">
              <Footer.Link href="#">Blogs</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="POLICIES" className="text-[#C8E1FF]"/>
            <Footer.LinkGroup col className="text-white text-xs ">
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms of Use</Footer.Link>
              <Footer.Link href="#">Give us your feedback</Footer.Link>
              <Footer.Link href="#">General Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#123E73] via-[#3D7A60] to-[#54AA4F] px-40 py-4 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="SLTMobitel (Pvt) Ltd. All rights reserved"
            className="text-white"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center fill-current text-white">
            <BsFacebook style={{ color: "white" }} size={20} />
            <BsInstagram style={{ color: "white" }} size={20} />
            <BsTwitter style={{ color: "white" }} size={20} />
            <BsYoutube style={{ color: "white" }} size={20} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
