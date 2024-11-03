'use client';
import { useState } from 'react';
import { Views } from 'react-big-calendar';
import { FaChevronDown } from "react-icons/fa6";

interface Option {
  id: typeof Views[keyof typeof Views];
  label: string;
}

interface CustomSelectProps {
  selected: typeof Views[keyof typeof Views];
  onChange: (value: typeof Views[keyof typeof Views]) => void;
}

const options: Option[] = [
  { id: Views.DAY, label: "Day View" },
  { id: Views.WEEK, label: "Week View" },
  { id: Views.MONTH, label: "Month View" },
];

export default function CustomSelect({ selected, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: typeof Views[keyof typeof Views]) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative h-[40px] w-[135px] ">
      {/* Selected Option Display */}
      <div
        className="flex justify-center   items-center h-full px-3 gap-3 shadow border rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[14px]">
          {options.find(option => option.id === selected)?.label}
        </span>
       
        <FaChevronDown className="text-[10px]" />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full mt-1 bg-white border rounded-md shadow-md z-10">
          {options.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => handleOptionClick(id)}
              className={`cursor-pointer px-3 py-2 text-[14px] hover:bg-gray-100 ${
                id === selected ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
