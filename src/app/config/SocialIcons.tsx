// components/common/SocialIcons.tsx
import React from "react";
import { FaFacebook, FaGithub, FaReddit } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex -mx-2">
      <a href="#" className="mx-2 text-gray-600 hover:text-button " aria-label="Reddit">
        <FaReddit className="w-5 h-5" />
      </a>
      <a href="#" className="mx-2 text-gray-600 hover:text-button " aria-label="Facebook">
        <FaFacebook className="w-5 h-5" />
      </a>
      <a href="#" className="mx-2 text-gray-600 hover:text-button " aria-label="GitHub">
        <FaGithub className="w-5 h-5" />
      </a>
    </div>
  );
}
