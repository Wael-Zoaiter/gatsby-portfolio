import React from "react"
import { Link } from "gatsby"
import { FaProjectDiagram, FaHome, FaHistory } from "react-icons/fa"
import { ProfileType } from "../../types"

const Header = ({ initials }) => (
  <header className="flex justify-between p-4 lg:px-8">
    <span className="inline-flex w-14 h-14 lg:mt-4 font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full">
      {initials}
    </span>
    <div className="flex">
    <Link
      className="flex w-14 h-14 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
      to="/"
    >
      <FaHome className="inline-block h-5 w-5" />
      <span className="hidden lg:block ml-3">Home</span>
    </Link>
    <Link
      className="flex w-14 h-14 ml-3 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
      to="/projects"
    >
      <FaProjectDiagram className="inline-block h-5 w-5" />
      <span className="hidden lg:block ml-3">Projects</span>
    </Link>
    <Link
      className="flex w-14 h-14 ml-3 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
      to="/experiences"
    >
      <FaHistory className="inline-block h-5 w-5" />
      <span className="hidden lg:block ml-3">Experiences</span>
    </Link>
    </div>
  </header>
)

Header.propTypes = {
  initials: ProfileType.initials,
}

export default Header
