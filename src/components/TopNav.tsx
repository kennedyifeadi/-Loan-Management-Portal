import {ArrowDown} from "lucide-react"

const TopNav = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 flex items-center  px-[2%] z-10 shadow-2xl">
      <ul className="flex items-center gap-2">
        <li>Welcome , Brian</li>
        <li><button className="bg-[#1f9ef9] text-white px-4 py-[6px] rounded-xl border-1 border-[#1964a1] flex">Rate Checker <ArrowDown className="text-white w-2"/></button> </li>
      </ul>
    </header>
  )
}

export default TopNav;
