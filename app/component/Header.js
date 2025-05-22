"use client";

import {useEffect} from "react";
import "../style/Header.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Header() {
  useEffect(() => {
    gsap.from(".header-title h1", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      y: 50,
      ease: "power2.out",
      stagger: {
        amount: 0.5,
      },
    })

    gsap.from(".header-title p", {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      x: -50,
      ease: "power2.out",
    })

  
  }, [])
  return (
    <>
    <div className="header-title">
      <h1><span>Art Museum</span> Gallery <br /> Collection <br /> Explore it.</h1>
      <p>Explore the world of art and culture. <br/> Discover a collection of captivating works of art from around the world.</p>
    </div>
    <div className="header-images" >
      <div className="images-title">
      <h1>Art <span>Gallery</span></h1>
    </div>
    </div>
    </>
  );
}

export default Header;