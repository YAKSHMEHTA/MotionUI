import React, { useRef, useState } from "react";

function GenRandomTxt() {
  const [text, setText] = useState("contact");
  const originalText = "contact";

  const chars = "qwertyuiopasdfghjklzxcvbnm1234567890";

  const handleEnter = () => {
    let iteration = 1;
 for(let j=0;j<999;j++){
       const interval = setInterval(() => {
        setText(
        originalText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return char;
            }

            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      

      iteration += 1;

      if (iteration > originalText.length) {
        clearInterval(interval);
      }
    }, 600);
 }
 
  };

  return (
    <div className="bg-white">
      <p onMouseEnter={handleEnter}>
        {text}
      </p>
    </div>
  );
}

export default GenRandomTxt;