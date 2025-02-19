import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";

const cardData = [
  {
    id: 1,
    name: "Dr. Nikhil Sonthalia",
    title: "Psychology",
    date: "25 Jan 2025",
    tag: "For Self",
    status: "Following Available",
    follow: "Follow Up Now",
    image: "public/image 2.png",
  },
  {
    id: 2,
    name: "Dr. Nikhil Sonthalia",
    title: "Psychology",
    date: "25 Jan 2025",
    tag: "For Self",
    status: "Following Available",
    follow: "Follow Up Now",
    image: "public/image 2.png",
  },
  {
    id: 3,
    name: "Dr. Nikhil Sonthalia",
    title: "Psychology",
    date: "25 Jan 2025",
    tag: "For Self",
    status: "Following Available",
    follow: "Follow Up Now",
    image: "public/image 2.png",
  },
  {
    id: 4,
    name: "Dr. Nikhil Sonthalia",
    title: "Psychology",
    date: "25 Jan 2025",
    tag: "For Self",
    status: "Following Available",
    follow: "Follow Up Now",
    image: "public/image 2.png",
  },
  {
    id: 5,
    name: "Dr. Nikhil Sonthalia",
    title: "Psychology",
    date: "25 Jan 2025",
    tag: "For Self",
    status: "Following Available",
    follow: "Follow Up Now",
    image: "public/image 2.png",
  },
  {
    id: 6,
    name: "Dr. Nikhil Sonthalia",
    title: "Psychology",
    date: "25 Jan 2025",
    tag: "For Self",
    status: "Following Available",
    follow: "Follow Up Now",
    image: "public/image 2.png",
  },
  {
    id: 7,
    name: "Dr. Nikhil Sonthalia",
    title: "Psychology",
    date: "25 Jan 2025",
    tag: "For Self",
    status: "Following Available",
    follow: "Follow Up Now",
    image: "public/image 2.png",
  },
  {
    id: 8,
    name: "Dr. Nikhil Sonthalia",
    title: "Psychology",
    date: "25 Jan 2025",
    tag: "For Self",
    status: "Following Available",
    follow: "Follow Up Now",
    image: "public/image 2.png",
  },
  {
    id: 9,
    name: "Dr. Nikhil Sonthalia",
    title: "Psychology",
    date: "25 Jan 2025",
    tag: "For Self",
    status: "Following Available",
    follow: "Follow Up Now",
    image: "public/image 2.png",
  },
];

const navLink = [
  { id: 1, title: "Opointment" },
  { id: 2, title: "Assessments" },
  { id: 3, title: "Interventions" },
  { id: 4, title: "Chat" },
];

const index = () => {
  return (
    <div className=" ">
      <nav className="bg-[#2B1747] p-6 flex items-center gap-2">
        <GoArrowLeft className="text-white text-4xl" />
        <div className="text-xl text-white">
          <h2 className="text-nowrap">Track Order</h2>
        </div>
        <IoMenuOutline className="text-white text-4xl ml-34" />
      </nav>
      <div className="p-6 flex flex-row gap-4 ">
        {navLink.map((links) => (
          <div
            key={links.id}
            className={`border-2 border-[#7948BB] p-2 text-xs rounded-3xl ${
              links.id === 1 ? "bg-[#7948BB]" : "bg-white"
            }`}
          >
            {links.title}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 p-4 bg-[#F4EFEF] rounded-t-2xl">
        {cardData.map((card) => (
          <div key={card.id} className="flex  bg-white p-2  rounded-lg w-80">
            <div>
              <img
                src={card.image}
                alt={card.name}
                className=" h-12 rounded-3xl mb-4"
              />

              <p className="text-xs text-nowrap">{card.date}</p>
            </div>
            <div>
              <p className="text-sm ">{card.title}</p>
              <h2 className="text-xs font-semibold text-[#0E0B41] mb-5">
                {card.name}
              </h2>

              <span className="text-xs text-red-500  bg-blue-50 p-1 rounded-sm ml-2 ">
                {card.tag}
              </span>
            </div>
            <div className="items-center flex gap-9 flex-col ml-8">
              <span
                className={`text-xs absolute -mt-2  rounded-bl-xl rounded-tr-xl  px-3 py-1 ${
                  [1, 4, 5, 6, 7].includes(card.id)
                    ? "text-[#8EC00D] , bg-[#F1FCD5] "
                    : "bg-[#7948BB] , text-white"
                }`}
              >
                {card.status}
              </span>
              <br />
              <span className="text-xs text-[#8DB5F1] ml-5">{card.follow}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
