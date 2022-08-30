import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const locations = [
    {
      id: 1,
      name: "Brooklyn, NY",
    },
    {
      id: 2,
      name: "Queens, NY",
    },
    {
      id: 3,
      name: "Los Angeles, NY",
    },
    {
      id: 4,
      name: "San Fransico, NY",
    },
  ];

  return (
    <footer className="bg-secondary font-inter">
      <div className="container mx-auto py-14 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-1">
            <Image src="/Logo.svg" width={130} height={70} alt="GymZone Logo" />
          </div>
          <div className="flex space-x-3">
            <AiFillFacebook size={25} color="#fff" />
            <AiFillInstagram size={25} color="#fff" />
            <AiFillYoutube size={25} color="#fff" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <div className="mb-5">
            <h3 className="uppercase font-bold text-white">Quick Links</h3>
          </div>
          <ul className="text-gray-300">
            <li className="text-sm hover:text-primary cursor-pointer mb-3">
              <a onClick={scrollToTop}>Back to top</a>
            </li>
            <li className="mb-3">
              <Link href="#about">
                <a className="text-sm hover:text-primary transition duration-150 cursor-pointer">About</a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="#trainers">
                <a className="text-sm hover:text-primary transition duration-150 cursor-pointer">Trainers</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <div className="mb-5">
            <h3 className="uppercase font-bold text-white">Locations</h3>
          </div>
          <ul className="space-y-3 text-gray-300">
            {locations.map((location) => (
              <li key={location.id} className="text-sm">
                {location.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center md:text-left">
          <div className="mb-5">
            <h3 className="uppercase font-bold text-white">Contact Us</h3>
          </div>
          <ul className="space-y-3 text-gray-300">
            <li className="text-sm text-gray-300 flex items-center justify-center md:justify-start">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="mr-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0594 20.1375L21.1594 18.0375C21.4423 17.7582 21.8001 17.567 22.1895 17.4871C22.5789 17.4072 22.9832 17.4421 23.3532 17.5875L25.9125 18.6094C26.2864 18.7612 26.607 19.0202 26.8339 19.3539C27.0608 19.6876 27.1838 20.0809 27.1875 20.4844V25.1719C27.1854 25.4464 27.1277 25.7176 27.0179 25.9692C26.9082 26.2208 26.7486 26.4476 26.5489 26.6359C26.3492 26.8242 26.1135 26.9701 25.8559 27.065C25.5983 27.1598 25.3242 27.2015 25.05 27.1875C7.11566 26.0719 3.49691 10.8844 2.81253 5.07191C2.78076 4.78648 2.80979 4.49755 2.8977 4.22414C2.98562 3.95073 3.13042 3.69903 3.3226 3.4856C3.51477 3.27218 3.74996 3.10186 4.01268 2.98585C4.27541 2.86984 4.55972 2.81078 4.84691 2.81254H9.37503C9.77911 2.81373 10.1736 2.93579 10.5077 3.163C10.8419 3.39022 11.1004 3.7122 11.25 4.08754L12.2719 6.64691C12.4221 7.01542 12.4605 7.42002 12.3821 7.81017C12.3037 8.20033 12.1122 8.55875 11.8313 8.84066L9.73128 10.9407C9.73128 10.9407 10.9407 19.125 19.0594 20.1375Z"
                  fill="#FEE402"
                />
              </svg>
              +1234567890
            </li>
            <li className="text-sm text-gray-300 flex items-center justify-center md:justify-start">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="mr-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.25 12.5V5C26.25 3.625 25.125 2.5 23.75 2.5H3.75C2.375 2.5 1.2625 3.625 1.2625 5L1.25 20C1.25 21.375 2.375 22.5 3.75 22.5H17.5V16.25C17.5 14.175 19.175 12.5 21.25 12.5H26.25ZM13.75 13.75L3.75 7.5V5L13.75 11.25L23.75 5V7.5L13.75 13.75Z"
                  fill="#FEE402"
                />
                <path
                  d="M26.25 17.5V22.5C26.25 23.875 25.125 25 23.75 25C22.375 25 21.25 23.875 21.25 22.5V16.875C21.25 16.525 21.525 16.25 21.875 16.25C22.225 16.25 22.5 16.525 22.5 16.875V22.5H25V16.875C25 16.0462 24.6708 15.2513 24.0847 14.6653C23.4987 14.0792 22.7038 13.75 21.875 13.75C21.0462 13.75 20.2513 14.0792 19.6653 14.6653C19.0792 15.2513 18.75 16.0462 18.75 16.875V22.5C18.75 25.2625 20.9875 27.5 23.75 27.5C26.5125 27.5 28.75 25.2625 28.75 22.5V17.5H26.25Z"
                  fill="#FEE402"
                />
              </svg>
              gymzone@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center border-t-2 border-gray-800 py-4">
        <small className="text-gray-400">Copyright &copy; 2022 - GymZone | All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
