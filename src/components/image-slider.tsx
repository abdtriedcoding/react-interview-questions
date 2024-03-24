import { useEffect, useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1710408904578-dfc6ff8b3b68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1710942499889-71f233dae342?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1711008828213-668fa9f8e56c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
];

export default function ImageSlider() {
  const [active, setActive] = useState(0);

  const nextImage = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [active]);

  return (
    <div className="flex space-x-2 items-center justify-center p-12">
      <button onClick={prevImage}>Previous</button>
      {images.map((image, i) => {
        return (
          <img
            className={`h-[400px] w-[800px] object-contain ${
              i === active ? "block" : "hidden"
            }`}
            src={images[active]}
            alt="image"
          />
        );
      })}
      <button onClick={nextImage}>Next</button>
    </div>
  );
}
