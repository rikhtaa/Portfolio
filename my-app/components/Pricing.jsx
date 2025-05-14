import React from "react";
import { CardSpotlight } from "./ui/CardSpotlight";
import { Cover } from "./ui/cover";

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="px-8 py-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto text-white text-xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>Our Pricing</Cover>
        </h2>
        <p className="max-w-xl  text-[1rem] mt-[20px]text-center mt-[10px] md:text-lg text-neutral-700 dark:text-neutral-400">
          We Provide You Quality Of Services
        </p>
      </div>
      <div className="max-w-[1000px] w-[90%] m-[90px_auto] grid md:grid-cols-3 gap-[25px]">
        <CardSpotlight className="w-full p-[30px] flex flex-col">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Start UP
          </p>
          <span className="text-white text-4xl flex mt-2 font-medium relative z-20">800$</span>
          <div className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to secure your account:
            <ul className="list-none  mt-2">
              <Step title="Enter your email address" />
              <Step title="Create a strong password" />
              <Step title="Set up two-factor authentication" />
              <Step title="Verify your identity" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm mb-[20px]">
            Ensuring your account is properly secured helps protect your
            personal information and data.
          </p>
          
          <a href="#" className="bg-[#242424] text-[0.9rem] relative z-20 p-[6px_10px] rounded-[5px] justify-center max-w-[110px] mt-auto flex text-[#ffffff] font-[600]">Contact Us</a>
        </CardSpotlight>
        <CardSpotlight className="w-full p-[30px] flex flex-col">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Business
          </p>
          <span className="text-white text-4xl flex mt-2 font-medium relative z-20">800$</span>
          <div className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to secure your account:
            <ul className="list-none  mt-2">
              <Step title="Enter your email address" />
              <Step title="Create a strong password" />
              <Step title="Set up two-factor authentication" />
              <Step title="Verify your identity" />
              <Step title="Create a strong password" />
              <Step title="Set up two-factor authentication" />
              <Step title="Verify your identity" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm mb-[20px]">
            Ensuring your account is properly secured helps protect your
            personal information and data.
          </p>
          
          <a href="#" className="bg-[#242424] text-[0.9rem] relative z-20 p-[6px_10px] rounded-[5px] justify-center max-w-[110px] mt-auto flex text-[#ffffff] font-[600]">Contact Us</a>
        </CardSpotlight>
        <CardSpotlight className="w-full p-[30px] flex flex-col">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Premium
          </p>
          <span className="text-white text-4xl flex mt-2 font-medium relative z-20">4000$</span>
          <div className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to secure your account:
            <ul className="list-none  mt-2">
              <Step title="Enter your email address" />
              <Step title="Create a strong password" />
              <Step title="Set up two-factor authentication" />
              <Step title="Verify your identity" />
              <Step title="Enter your email address" />
              <Step title="Create a strong password" />
              <Step title="Set up two-factor authentication" />
              <Step title="Verify your identity" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm mb-[20px]">
            Ensuring your account is properly secured helps protect your
            personal information and data.
          </p>
          <a href="#" className="bg-[#242424] text-[0.9rem] relative z-20 p-[6px_10px] rounded-[5px] justify-center max-w-[110px] mt-auto flex text-[#ffffff] font-[600]"
          >Contact Us</a>
        </CardSpotlight>
      </div>
    </div>
  );
};

export default Pricing;
const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
