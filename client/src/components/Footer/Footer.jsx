import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../data/images/nexus.png";
const Footer = () => {
  return (
    <div className="container-footer  relative flex flex-col flex-wrap justify-between gap-y-10  bg-gradient-to-b from-[#153666] via-[#060e1c] to-[#1a2f4d] px-4 py-10 md:px-32 ">
      <div className="z-10">
        <div
          className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full "
          id="wave1"
        />
        <div
          className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full "
          id="wave2"
        />
        <div
          className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full "
          id="wave3"
        />
        <div
          className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full "
          id="wave4"
        />
      </div>
      <div className="mx-auto flex w-full  flex-col gap-4 md:flex-row md:gap-0 ">
        <div className="w-[100%] md:w-[32rem] lg:w-[40rem]">
          <h2 className="flex items-center text-xs md:text-sm">
            <img
              src={Logo}
              alt="Nexus"
              className="mx-8 my-4 h-10 w-10 md:h-12 md:w-12 "
            />
            NEXUS <br />
            Departmental Cell of Computer Science & Engineering{" "}
          </h2>

          <p className="mt-8 font-mono text-xs md:mt-0 md:pl-6">
            Empowering CSE students at SVNIT, Nexus is a community that
            cultivates coding excellence, fosters diverse extracurricular
            interests, and champions holistic growth, shaping educational
            journeys with passion and purpose.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-10 sm:flex-row sm:items-start sm:gap-0 md:justify-center md:gap-[25%]">
          <div className="mt-4 flex flex-col gap-4 px-1 text-center md:px-8">
            <h4 className="whitespace-nowrap text-xl ">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-blue-400">
              <Link to={"/events"}>Events</Link>
              <Link to={"/forms"}>Forms</Link>
              <Link to={"/connect"}>Connect</Link>
              <Link to={"/aboutUs"}>About Us</Link>
            </ul>
          </div>
          <div className="mt-4 flex flex-col gap-4 px-8 text-center md:px-0">
            <h4 className="text-xl">Social Media</h4>
            <ul className="flex flex-col gap-2 text-blue-400">
              <Link
                to={"https://www.instagram.com/nexus_svnit"}
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                to={"https://www.linkedin.com/company/nexus-svnit/"}
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link to={"mailto:nexus@coed.svnit.ac.in"}>
                nexus@coed.svnit.ac.in
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-blue-800 pt-4 text-center font-mono text-xs md:text-base">
        Made with <span className="animate-pulse">❤️</span> by NEXUS NIT Surat •
        © 2024
      </div>

      {
        // Just for commit
      }
    </div>
  );
};

export default Footer;
