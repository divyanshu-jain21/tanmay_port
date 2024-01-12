import React from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/tanmay-akolkar-5baa66104",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/TanmayTechRadix",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:tanmaya@tech-radix.com",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <FaInstagramSquare size={30} />
        </>
      ),
      href: "https://instagram.com/tanmayakolkar?igshid=NmE0MzVhZDY=",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="col">
        <h2>Social Media</h2>
        <article>
          <a href="https://github.com/TanmayTechRadix" target={"blank"}>
            <FaGithub />
          </a>
          <a href="mailto:tanmaya@tech-radix.com" target={"blank"}>
            <HiOutlineMail />
          </a>
          <a href="https://instagram.com/tanmayakolkar?igshid=NmE0MzVhZDY=" target={"blank"}>
            <FaInstagramSquare />
          </a>
          <a href="https://www.linkedin.com/in/tanmay-akolkar-5baa66104" target={"blank"}>
            <FaLinkedin />
          </a>
        </article>
        <a href="/home">
          <AiOutlineArrowUp />
        </a>
      </div> */}
    </>
  );
};

export default SocialLinks;
