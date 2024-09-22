import React, { useEffect } from "react";

const ChatBox = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/66efd2c8e5982d6c7bb2bec6/1i8ccuoof";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      // Cleanup the script if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // Since the script doesn't render any JSX, return null
};

export default ChatBox;
