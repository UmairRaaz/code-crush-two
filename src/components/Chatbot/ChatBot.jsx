import React, { useEffect } from "react";

const ChatBox = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/66efd2c8e5982d6c7bb2bec6/1i8ccuoof";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  }, []);

  <div style={{ backgroundColor: "white" }}>
    {/* Tawk.to chat will be injected here */}
  </div>;
};

export default ChatBox;
