import { useState, useEffect, useRef } from "react";

import "./HomeStack.scss";
import { stack } from "../stack.js";

export const HomeStack = () => {
  const sliderRef = useRef(null);
  const positionRef = useRef(0);
  const itemWidth = 140;
  // drag variables
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  useEffect(() => {
    if (isDragging || !sliderRef.current) return;

    const moveSlider = () => {
      positionRef.current -= itemWidth; //set new position to move left one itemWidth
      sliderRef.current.style.transition = "transform 2s linear";
      sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;

      //reset position at end of images
      if (positionRef.current <= -itemWidth * stack.length) {
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.style.transition = "none";
            positionRef.current = 0;
            sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
          } else {
            sliderRef.current.style.transition = "transform 2s linear";
          }
        }, 1900);
      }
    };
    const interval = setInterval(() => {
      moveSlider();
    }, 2000);

    moveSlider();
    return () => clearInterval(interval);
  }, [isDragging]);

  // functions for drag
  // drag start -mouse
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(positionRef.current);
    if (sliderRef.current) sliderRef.current.style.transition = "none";
  };

  // drag start - touch
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(positionRef.current);
    if (sliderRef.current) sliderRef.current.style.transition = "none";
  };

  // drag move - mouse
  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const dif = e.clientX - startX;
    if (positionRef.current <= -itemWidth * stack.length) {
      positionRef.current = dragOffset + dif + itemWidth * stack.length;
    } else if (positionRef.current >= 0) {
      positionRef.current = dragOffset + dif - itemWidth * stack.length;
    } else {
      positionRef.current = dragOffset + dif;
    }
    sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
  };

  //drag move - touch
  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const dif = e.touches[0].clientX - startX;
    if (positionRef.current <= -itemWidth * stack.length) {
      positionRef.current = dragOffset + dif + itemWidth * stack.length;
    } else if (positionRef.current >= 0) {
      positionRef.current = dragOffset + dif - itemWidth * stack.length;
    } else {
      positionRef.current = dragOffset + dif;
    }
    sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
  };

  // drag end -mouse
  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current)
      sliderRef.current.style.transition = "transform 2s linear";
  };

  // drag end -touch
  const handleTouchEnd = () => {
    setIsDragging(false);
    if (sliderRef.current)
      sliderRef.current.style.transition = "transform 0.5s linear"; // Restore smooth animation
  };

  return (
    <div className="stack-section_outer">
      <div className="container">
        <article className="stack-section_inner ">
          <div
            className="stack-section_slider-wrapper"
            ref={sliderRef}
            style={{
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {stack.map((s, index) => (
              <div key={s.id} className="stack-section_slider-item">
                <figure className="stack-section_image">
                  <s.image />
                </figure>
                <figcaption>{s.title}</figcaption>
              </div>
            ))}
            {/* clones for continuous image */}
            {stack.map((s, index) => (
              <div key={`${s.id}clone1`} className="stack-section_slider-item">
                <figure className="stack-section_image">
                  <s.image />
                </figure>
                <figcaption>{s.title}</figcaption>
              </div>
            ))}
            {stack.map((s, index) => (
              <div key={`${s.id}clone2`} className="stack-section_slider-item">
                <figure className="stack-section_image">
                  <s.image />
                </figure>
                <figcaption>{s.title}</figcaption>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};
