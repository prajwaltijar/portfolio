import React, { useEffect, useState } from 'react';

const TypewriterText = ({ text, typingSpeed = 110, deletingSpeed = 70 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let characterIndex = 0;
    let deleting = false;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, characterIndex));

      if (!deleting && characterIndex < text.length) {
        characterIndex += 1;
      } else if (deleting && characterIndex > 0) {
        characterIndex -= 1;
      } else {
        deleting = !deleting;
      }
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(interval);
  }, [deletingSpeed, text, typingSpeed]);

  return <>{displayText}</>;
};

export default TypewriterText;