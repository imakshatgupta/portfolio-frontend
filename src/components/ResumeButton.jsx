import React, { useEffect, useState } from "react";
import { client } from "../client";

const ResumeButton = () => {
  const [resume, setResume] = useState([]);

  useEffect(() => {
    const query = '*[_type == "resume"]';

    client.fetch(query).then((data) => {
      // Assuming the data is an array, you may want to access the first item
      // or handle multiple items as needed.
      if (data && data.length > 0) {
        setResume(data[0]); // Assuming you want the first resume if there are multiple.
      }
    });
  }, []);

  return (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={() => window.open(resume.link, "_blank")}
    >
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>Resume</span>
    </button>
  );
};

export default ResumeButton;
