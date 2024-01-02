import { useEffect, useState } from "react";

const Sliding = () => {
  const [number, setNumber] = useState(0);
  const data = [
    "https://png.pngtree.com/background/20210711/original/pngtree-random-energy-wave-background-picture-image_1156842.jpg",
    "https://wallpaperset.com/w/full/0/b/4/498853.jpg",
    "https://getwallpapers.com/wallpaper/full/3/7/3/584628.jpg",
    "https://images8.alphacoders.com/454/454637.jpg",
    "https://getwallpapers.com/wallpaper/full/6/2/d/649387.jpg",
  ];
  const handleNext = () => {
    if (number == data.length - 1) setNumber(0);
    else setNumber((prev) => prev + 1);
  };
  const handlePrevious = () => {
    if (number == 0) setNumber(data.length - 1);
    else setNumber((prev) => prev - 1);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      handleNext();
    }, 2000);
    return () => clearTimeout(time);
  }, [number, handleNext]);
  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <img src={data[number]} style={{ width: 150, height: 150 }} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default Sliding;
