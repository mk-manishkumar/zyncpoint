---
title: "🧠 How to Build a Carousel in ReactJS with Tailwind"
slug: "how-to-build-a-carousel-in-reactjs-with-tailwind"
excerpt: "Everyone adds carousels to their websites. Most of the time, people simply install a library like Slick Carousel, add a few props, and move on. However, that approach often adds unnecessary code. In this guide, we’ll learn how to build a clean, light..."
date: "2025-07-04T08:23:41.000Z"
coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1767785212774/9386df5d-deb5-4766-bdba-de56c11a4023.webp"
---

Everyone adds carousels to their websites. Most of the time, people simply install a library like Slick Carousel, add a few props, and move on. However, that approach often adds unnecessary code. In this guide, we’ll learn how to build a clean, lightweight carousel from scratch using React and Tailwind CSS.

## 🚀 Step 1: Create a React + TypeScript project with Vite


```cmd
npm create vite@latest my-carousel --template react-ts
cd my-carousel
```
> If you want plain JavaScript, replace react-ts with react.


## 🎨 Step 2: Install Tailwind CSS

To install Tailwind CSS, follow the instructions at the [link](https://tailwindcss.com/docs/installation/using-vite)


## 🖼 Step 3: Load Your Images

Dump your images into `public/carouselImages/`. Now set them up:

```Javascript
const carouselImages = [
  "/carouselImages/carousel-1.jpg",
  "/carouselImages/carousel-2.jpg",
  "/carouselImages/carousel-3.jpg",
];
```

## ⚛️ Step 4: The React Component

```Javascript
import { useState, useEffect } from "react";

const carouselImages = [
  "/carouselImages/carousel-1.jpg",
  "/carouselImages/carousel-2.jpg",
  "/carouselImages/carousel-3.jpg",
];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));

  const goToSlide = (index: number) => setCurrent(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-16/6 overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Controls */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20">
        ‹
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-20">
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full border border-white ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
```


## 🧠 How Does It Work?

Let’s deconstruct this:

### 🔁 prevSlide

```Javascript
setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
```

If you’re on the first slide, wrap to the last. Else, go to the previous. Simple logic, clean loop.

### 🔂 nextSlide

```Javascript
setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
```

If you’re on the last slide, wrap to the first. Otherwise, move forward. This is used both on the "›" button and the auto-play logic.

### 🎯 goToSlide

```Javascript
(index: number) => setCurrent(index);
```

This allows direct jumping to a slide. Used in the dot indicators at the bottom.


## 🖼 How Slides Are Actually Rendered

This is where the clean animation happens:

```html
<div
  key={index}
  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
    index === current ? "opacity-100 z-10" : "opacity-0 z-0"
  }`}
>
```

All slides are stacked on top of each other.

- Only the current index gets opacity-100 and z-10
- Others get opacity-0 and z-0 (hidden behind)

Instead of unmounting and remounting, you simply fade between preloaded images. 


## 🕒 Auto-Play

```Javascript
useEffect(() => {
  const interval = setInterval(nextSlide, 5000);
  return () => clearInterval(interval);
}, []);
```

Every 5 seconds, nextSlide() is triggered.


## 💬 Final Thoughts

Creating a carousel with React and Tailwind helps you understand the basics—state management, rendering, and styling.
