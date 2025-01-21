"use client";

import React, { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
  const [on, setOn] = useState(false);

  const handleToggleMenu = () => {
    setOn(!on);
  
    // Use HTMLElement | null as the type
    const body: HTMLElement | null = document.querySelector("body");
  
    if (body) {
      body.classList.toggle("mobile-nav-active");
    }
  };

  return (
    <header
      id="header"
      className="header flex items-center fixed top-0 left-0 right-0 shadow-md z-50"
    >
      <div className="container black mx-auto flex items-center justify-between">
        <Link href="/" className="logo flex items-center">
          <h2 className="mb-0">Earn Hindi Sink</h2>
        </Link>
        <Nav />

          {on ? (
            <i
              className="bi bi-x mobile-nav-toggle"
              onClick={handleToggleMenu}
            ></i>
          ) : (
            <i
              className="bi bi-list mobile-nav-toggle pr-4"
              onClick={handleToggleMenu}
            ></i>
          )}
      </div>
    </header>
  );
}
