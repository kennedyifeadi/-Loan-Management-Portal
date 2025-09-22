import React, { useState } from "react";
import { Search, RotateCcw, ChevronDown } from "lucide-react";

// SearchFilter component provides a search bar and multiple dropdown filters for loan search
const SearchFilter = () => {
  // State for main search input
  const [searchTerm, setSearchTerm] = useState<string>("");
  // State for each filter dropdown
  const [loanType, setLoanType] = useState<string>("All");
  const [lender, setLender] = useState<string>("All");
  const [state, setState] = useState<string>("All");
  const [language, setLanguage] = useState<string>("All");
  // Tracks which dropdown is currently open
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // Stores search term for each dropdown's internal search
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({
    loanType: "",
    lender: "",
    state: "",
    language: "",
  });

  // Sample data for dropdowns
  const loanTypes = [
    "All",
    "Personal Loan",
    "Home Loan",
    "Auto Loan",
    "Business Loan",
  ];
  const lenders = [
    "All",
    "Bank of America",
    "Chase",
    "Wells Fargo",
    "Citibank",
  ];
  const states = [
    "All",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federal",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const languages = [
    "All",
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Italian",
    "Portuguese",
  ];

  // Resets all filters and search terms to default
  const handleReset = () => {
    setSearchTerm("");
    setLoanType("All");
    setLender("All");
    setState("All");
    setLanguage("All");
    setActiveDropdown(null);
    setSearchTerms({ loanType: "", lender: "", state: "", language: "" });
  };

  // Toggles dropdown open/close state
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Props for the Dropdown component
  interface DropdownProps {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
    dropdownKey: string;
  }

  // Dropdown component for filter selection with search
  const Dropdown: React.FC<DropdownProps> = ({
    label,
    value,
    options,
    onChange,
    dropdownKey,
  }) => {
    // Internal search term for dropdown
    const searchTerm = searchTerms[dropdownKey] || "";
    // Filter options based on search term
    const filteredOptions = options.filter((option: string) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="relative">
        {/* Dropdown button */}
        <button
          onClick={() => toggleDropdown(dropdownKey)}
          className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <span className="text-gray-700">
            <span className="font-medium">{label}:</span> {value}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform ${
              activeDropdown === dropdownKey ? "rotate-180" : ""
            }`}
          />
        </button>
        {/* Dropdown menu */}
        {activeDropdown === dropdownKey && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Search input within dropdown */}
            <div className="p-3 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerms((prev) => ({
                      ...prev,
                      [dropdownKey]: e.target.value,
                    }))
                  }
                  className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  onClick={(e) => e.stopPropagation()}
                />
                {/* Search icon inside dropdown */}
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Options list */}
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => {
                      onChange(option);
                      setActiveDropdown(null);
                      setSearchTerms((prev) => ({
                        ...prev,
                        [dropdownKey]: "",
                      }));
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-blue-50 ${
                      index === 0 ? "" : ""
                    } ${
                      index === filteredOptions.length - 1 ? "rounded-b-lg" : ""
                    } ${
                      value === option
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {option}
                  </button>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500 text-sm">
                  No results found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      {/* Header Tabs: Shows favorites and history counts */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
            Favorites (0)
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            History (37)
          </span>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="rounded-lg border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-end">
          {/* Search Input */}
          <div className="lg:col-span-1">
            <div className="relative">
              {/* Main search input with icon */}
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="lg:col-span-1">
            {/* Loan Type Dropdown */}
            <Dropdown
              label="Loan Type"
              value={loanType}
              options={loanTypes}
              onChange={setLoanType}
              dropdownKey="loanType"
            />
          </div>

          <div className="lg:col-span-1">
            {/* Lender Dropdown */}
            <Dropdown
              label="Lender"
              value={lender}
              options={lenders}
              onChange={setLender}
              dropdownKey="lender"
            />
          </div>

          <div className="lg:col-span-1">
            {/* State Dropdown */}
            <Dropdown
              label="State"
              value={state}
              options={states}
              onChange={setState}
              dropdownKey="state"
            />
          </div>

          <div className="lg:col-span-1">
            {/* Language Dropdown */}
            <Dropdown
              label="Language"
              value={language}
              options={languages}
              onChange={setLanguage}
              dropdownKey="language"
            />
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-1 flex space-x-2">
            {/* Search Button */}
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors">
              <Search className="w-4 h-4 mr-2" />
              Search
            </button>
            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-lg flex items-center justify-center transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Special Request Button */}
      <div className="mb-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Processor Scenario Request
        </button>
      </div>

      {/* Results Section: Shows summary of results */}
      <div className="bg-[#cfe2ff] border-[#1e7aed] border-l-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="text-[#757280]">Found total 152 results</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-[#757280]">Online:</span>
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
              5
            </span>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </div>
  );
};

export default SearchFilter;
