import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [message, setMessage] = useState(null);
  const [author, setAuthor] = useState(null);
  const url = "https://korean-advice-open-api.vercel.app/api/advice";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setMessage(data.message);
        setAuthor(`ー${data.author}`);
      });
  }, []);

  return (
    <>
      <div className="bg-gray-200 p-4">
        <div className="flex justify-around pt-28 pb-24">
          <div>
            <p>{message}</p>
            <i>{author}</i>
          </div>
          <div className="flex flex-col items-end">
            <span>name</span>
            <span>junior frontend developer</span>
            <span>email@example.com</span>
            <div className="flex gap-1">
              <FontAwesomeIcon icon={faGithub} className="cursor-pointer" />
              <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <p className="text-center">
          © {new Date().getFullYear()} hamuhamu. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
