import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { TbPhotoEdit } from "react-icons/tb";

const Sidebar = () => {
  const menuItems = [
    { icon: <MdOutlineModeEditOutline size={24} />, text: "To Do", href: "/dashboard/todo" },
    { icon: <IoIosDocument size={24} />, text: "Document", href: "/dashboard/document" },
    { icon: <AiOutlineStock size={24} />, text: "Finance", href: "/dashboard/finance" },
    { icon: <TbPhotoEdit size={24} />, text: "Photo Editing", href: "/dashboard/photo-editing" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64 bg-white text-black h-screen fixed left-0 shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center">
            Manage All Your Works
          </h1>
        </div>
        <nav className="flex-1 mt-6">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-1000">
        <nav className="flex justify-around items-center h-16 text-black">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs">{item.text}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Spacer for mobile bottom navigation */}
      <div className="h-16 lg:hidden" />
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    </>
  );
};

export default Sidebar;
