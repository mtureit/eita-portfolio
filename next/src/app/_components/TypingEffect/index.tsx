"use client"

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const options = {
        strings: ['Hello World!', 'Welcome to Typed.js!'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      };

      const typed = new Typed(textRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div id="app" style={{ textAlign: 'center', marginTop: '50px' }}>
      <span id="typed" ref={textRef}></span>
    </div>
  );
};

export default TypingEffect;