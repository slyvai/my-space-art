"use client";

import {useEffect} from "react";
import "../style/Header.css";
import ImageArt1 from "../image/Wonders-of-Glass.jpeg";
import ImageArt2 from "../image/art-showcase.jpg";
import ImageArt3 from "../image/Art-showcase-museum.jpg";
import ImageArt4 from "../image/Museum Art.jpg";
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

    gsap.from("images-title h1", {
      opacity: 0,
      duration: 1,
      y: -50,
      ease: "power2.out",
    })

    gsap.fromTo(
      ".images",
      { opacity: 0, y: -200, ease: "power2.out" },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power2.out",
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: ".images-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    )
  
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
    <div className="images-container">
      <div className="images">
        <Image
          src={ImageArt1}
          alt="Art Showcase"
          width={700}
          height={500}
          className="image-art"
        />
      </div>
      <div className="images">
        <Image
          src={ImageArt2}
          alt="Art Showcase"
          width={700}
          height={500}
          className="image-art"
        />
      </div>
      <div className="images">
        <Image
          src={ImageArt3}
          alt="Art Showcase"
          width={700}
          height={500}
          className="image-art"
        />
      </div>
      <div className="images">
        <Image
          src={ImageArt4}
          alt="Art Showcase"
          width={700}
          height={500}
          className="image-art"
        />
      </div>
      </div>
    </div>
    
    </>
  );
}

export default Header;