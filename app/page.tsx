"use client";

import { useEffect, useRef, useState } from "react";
import "./globals.css";

export default function Home() {
  const [yesClicked, setYesClicked] = useState(false);
  const noBtnRef = useRef<HTMLButtonElement | null>(null);

  // Move NO button to random position
  const moveNoButton = () => {
    if (!noBtnRef.current) return;

    const btn = noBtnRef.current;
    const padding = 30;

    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  };

  // Set NO button initial position
  useEffect(() => {
    if (noBtnRef.current) {
      noBtnRef.current.style.left = "55%";
      noBtnRef.current.style.top = "55%";
    }
  }, []);

  return (
    <div className="container">
      {!yesClicked ? (
        <>
          {/* Home Page Stickers */}
          <div className="stickers">
            <img src="/img2.gif" alt="fun gif" className="sticker-gif" />
          </div>

          <h1 className="title">Will you be my Valentine?</h1>

          <div className="buttons">
            <button className="yes" onClick={() => setYesClicked(true)}>
              YES 💕
            </button>

            <button
              className="no"
              ref={noBtnRef}
              onMouseEnter={moveNoButton}
            >
              NO 🙈
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Celebration GIF */}
          <div className="stickers big">
            <img src="/img4.gif" alt="celebration gif" className="sticker-gif" />
          </div>

          <h1 className="celebrate">HURREEEEE ❤️🎉</h1>

          {/* Poem Box */}
          <div className="poem-box">
            <p>
              Mr. Big Ego, walking around like a king 😏💖<br />
              Chest out, hair perfect, acting like the world owes you applause!<br />
              Somehow, even with all that confidence, you still make me laugh 🥰<br />
              You may be manly and impossible…<br />
              Yet here I am, grinning at every ridiculous thing you do.<br />
              Moral of the story? Charm + ego = dangerously cute 😎💕
            </p>
          </div>
        </>
      )}
    </div>
  );
}
