import { ArrowDown } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useMemo } from "react";

const TopNav = () => {
  const [selectedStatus, setSelectedStatus] = useState("At Capacity");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const [showRate, setShowRate] = useState(false);
  const [lenderRate, setLenderRate] = useState(false);

  const statusOptions = useMemo(
    () => [
      {
        label: "Online",
        dotColor: "bg-green-500",
        col: "#71ab56",
        col2: "#71ab59",
      },
      {
        label: "At capacity",
        dotColor: "bg-green-500",
        col: "#71ab56",
        col2: "#71ab59",
      },
      {
        label: "At capacity",
        dotColor: "bg-red-500",
        col: "#af5a78",
        col2: "#c86250",
      },
      {
        label: "offline",
        dotColor: "bg-red-500",
        col: "#af5a78",
        col2: "#c86250",
      },
    ],
    []
  );

  const dropdownOptions = ["275 BPS", "200 BPS", "0 BPS", "Account"];

  const [activeColor, setActiveColor] = useState([
    statusOptions[activeIndex].col,
    statusOptions[activeIndex].col2,
  ]);

  const handleStatusSelect = (status: string, index: number) => {
    setSelectedStatus(status);
    setActiveIndex(index);
    setIsDropdownOpen(false);
  };

  const handleRateClick = (stat: boolean) => {
    setShowRate(stat);
  };

  const handleLenderRate = (stat: boolean) => {
    setLenderRate(stat);
    
  }

  useEffect(() => {
    setActiveColor([
      statusOptions[activeIndex].col,
      statusOptions[activeIndex].col2,
    ]);
  }, [activeIndex, statusOptions]);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-300 flex items-center justify-between  px-[2%] z-10 shadow-2xs">
      <ul className="flex items-center gap-2">
        <li>Welcome , Brian</li>
        <li
          onMouseOver={() => handleRateClick(true)}
          onMouseLeave={() => handleRateClick(false)}
          className="relative cursor-pointer"
        >
          <button
            onMouseOver={() => handleRateClick(true)}
            onMouseLeave={() => handleRateClick(false)}
            className="cursor-pointer bg-linear-to-b from-[#1f9ef9] to-[#0688fa] hover:from-[#0688fa] hover:to-[#1f9ef9] text-white px-5 items-center gap-2 py-[6px] rounded-[7px] border-1 border-[#1964a1] flex min-w-[170px]"
          >
            Rate Checker{" "}
            <ArrowDown className="text-white w-5 h-6 drop-shadow-lg" />
          </button>{" "}
          <div
            onMouseOver={() => handleRateClick(true)}
            onMouseLeave={() => handleRateClick(false)}
            className={`
            absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg p-2 z-50 transform transition-all duration-300 min-w-[250px]
            ${
              !showRate
                ? " opacity-0 translate-y-5 pointer-events-none"
                : "  translate-y-0 opacity-100 pointer-events-auto"
            }
            `}
          >
            <div
              className={`flex justify-between items-center px-3 py-2 rounded cursor-pointer text-sm transition-colors hover:text-blue-500`}
            >
              Polly Rate Checker
            </div>
            <div
              onMouseOver={() => handleLenderRate(true)}
              onMouseLeave={() => handleLenderRate(false)}
              className={`flex justify-between items-center px-3 py-2 rounded cursor-pointer text-sm transition-colors hover:text-blue-500`}
            >
              Lender Price Rate Checker
              <ArrowRight className="text-blue-500" />
              <div
                className={`
            absolute top-[50%] right-[-65%] mt-1 bg-white rounded-lg shadow-lg p-2 min-w-40 z-50 transform transition-all duration-300
            ${
              !lenderRate
                ? "opacity-0 translate-y-5 pointer-events-none"
                : " translate-y-0 opacity-100 pointer-events-auto"
            }
            `}
              >
                {dropdownOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-3 py-2 rounded cursor-pointer text-sm transition-colors hover:text-blue-500`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="flex items-center gap-3 px-4 py-3 ">
        {/* I'm label */}
        <span className="text-sm text-gray-700 font-medium">I'm :</span>
        {/* Status dropdown */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            style={{
              background: `linear-gradient(to bottom, ${activeColor[0]}, ${activeColor[1]})`,
            }}
            className={` text-white px-4 py-2 cursor-pointer rounded-full text-xs font-medium flex items-center gap-2 transition-colors`}
          >
            {selectedStatus}
            <span className="text-xs">▼</span>
          </button>

          <div
            className={`
            absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg p-2 min-w-40 z-50 transform transition-all duration-300
            ${
              !isDropdownOpen
                ? "opacity-0 translate-y-5 pointer-events-none"
                : " translate-y-0 opacity-100 pointer-events-auto"
            }
            `}
          >
            {statusOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleStatusSelect(option.label, index)}
                className={`flex items-center px-3 py-2 rounded cursor-pointer text-sm transition-colors ${
                  index === activeIndex
                    ? "bg-green-500 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full mr-3 ${option.dotColor}`}
                ></div>
                {option.label}
              </div>
            ))}
          </div>

          <div className="bg-[#58cb9b] text-[#233b2e]  text-[7px] px-3 py-1 w-[70%] text-center rounded-[1px] text-xs font-medium absolute left-[50%] transform translate-x-[-50%] top-[70%]">
            {selectedStatus}
          </div>
        </div>
        {/* Post scenario button */}
        <button className="bg-[#1f9ef9] text-white px-5 items-center gap-2 py-[6px] rounded-[7px] border-1 border-[#1964a1] flex min-w-[170px]">
          Post A Scenario{" "}
          <ArrowDown className="text-white w-5 h-6 drop-shadow-lg" />
        </button>{" "}
        {/* Notification icon */}
        <div className="relative">
          <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white">
            🔔
          </div>
          <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            0
          </div>
        </div>
        {/* Profile picture */}
        <div className="w-9 h-9 bg-gray-300 rounded flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gray-500 flex items-center justify-center text-white font-medium text-sm">
            <img src="./images/pic.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
