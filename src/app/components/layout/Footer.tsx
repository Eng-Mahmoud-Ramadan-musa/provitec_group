import React from "react";
import { footerLinks } from "@/app/config/footerLinks";
import SocialIcons from "@/app/config/SocialIcons";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export default function Footer() {
  return (
    <footer className="bg-background text-slate-100 pt-12 pb-6 px-6  w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h2 className="text-2xl font-bold text-button mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-400 max-w-md mb-4">
              Get the latest updates, offers, and products directly in your inbox.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Textarea
                placeholder="Write your message..."
                rows={2}
                className="bg-[#1f1f1f] border border-text focus:ring-background text-white"
              />
              <Button className="bg-button hover:border hover:border-white text-white cursor-pointer hover:bg-background2 transition-colors">
                Subscribe
              </Button>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-button mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-300 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-10 border-gray-700" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mahmoud Ramadan. All rights reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
