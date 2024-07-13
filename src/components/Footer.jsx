import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#272833] text-[#FFFFFF] py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white hover:text-[#B64D4E]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h12M8 12l6-6m-6 6l6 6"
              />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white hover:text-[#B64D4E]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 8a6 6 0 00-12 0v6a6 6 0 0012 0V8z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 14v-4m0 0h.01m-.01 4h.01m.01 0h.01m4.99-2v2a2 2 0 11-4 0v-2a2 2 0 114 0z"
              />
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white hover:text-[#B64D4E]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a10 10 0 00-3.16 19.49c.5.09.69-.22.69-.48v-1.69c-2.79.61-3.38-1.35-3.38-1.35-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.32-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0112 6.8c.85.004 1.71.114 2.51.334 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .26.19.57.7.48A10 10 0 0012 2z"
              />
            </svg>
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
