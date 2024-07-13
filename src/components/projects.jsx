import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { ArrowsRightLeftIcon } from "@heroicons/react/16/solid";
import project5 from "../assets/flashcard.png"

const projects = [
  {
    image: project1,
    title: "Desklib",
    description:
      "Desklib is an online platform that provides a large collection of study materials like assignments, essays, dissertations, and notes. It supports students and educators by offering access to high-quality academic resources, making learning and research easier. Users can also contribute by uploading their own documents, promoting a collaborative learning community.",
    href: "https://example.com/project1",
  },
  {
    image: project2,
    title: "Desklib",
    description:
      "Desklib is an online platform that provides a large collection of study materials like assignments, essays, dissertations, and notes. It supports students and educators by offering access to high-quality academic resources, making learning and research easier. Users can also contribute by uploading their own documents, promoting a collaborative learning community.",
    href: "https://example.com/project2",
  },
  {
    image: project3,
    title: "Desklib",
    description:
      "Desklib is an online platform that provides a large collection of study materials like assignments, essays, dissertations, and notes. It supports students and educators by offering access to high-quality academic resources, making learning and research easier. Users can also contribute by uploading their own documents, promoting a collaborative learning community.",
    href: "https://example.com/project3",
  },
  {
    image: project5,
    title: "Desklib",
    description:
      "Desklib is an online platform that provides a large collection of study materials like assignments, essays, dissertations, and notes. It supports students and educators by offering access to high-quality academic resources, making learning and research easier. Users can also contribute by uploading their own documents, promoting a collaborative learning community.",
    href: "https://example.com/project3",
  },
  {
    image: project4,
    title: "Locus",
    description:
      "Desklib is an online platform that provides a large collection of study materials like assignments, essays, dissertations, and notes. It supports students and educators by offering access to high-quality academic resources, making learning and research easier. Users can also contribute by uploading their own documents, promoting a collaborative learning community.",
    href: "https://example.com/project4",
  },
];

function Projects() {
  return (
    <div className="p-6 bg-[#242429] text-white py-10">
      <h1 className="text-2xl font-bold mb-4">My latest work</h1>
      {projects.map((project, index) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 py-10"
          key={index}
        >
          {index % 2 === 0 ? (
            <>
            <div className={project.title === "Locus" ? "flex justify-center" : ""}>
                <img
                  src={project.image}
                  alt=""
                  style={project.title === "Locus" ? { height: "300px" } : { width: "612px" }}
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <h2 className="text-[32px] font-bold text-[#B64D4E]">
                  {project.title}
                </h2>
                <p className="text-left">{project.description}</p>
                <a
                  className="flex items-center gap-2 mt-4 underline "
                  href={project.href}
                >
                  visit here{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-start items-start  ">
                <h2 className="text-[32px] font-bold text-[#B64D4E]">
                  {project.title}
                </h2>
                <p className="text-left">{project.description}</p>
                <a
                  className="flex items-center gap-2 mt-4 underline "
                  href={project.href}
                >
                  visit here{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
              <div className={project.title === "Locus" ? "flex justify-center" : ""}>
                <img
                  src={project.image}
                  alt=""
                  style={project.title === "Locus" ? { height: "200px" } : { width: "612px" }}
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
