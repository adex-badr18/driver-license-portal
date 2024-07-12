import { useEffect, useState } from 'react';
import img from "../../../assets/images/img2.jpg";
import img2 from "../../../assets/images/img5.jpg";
import img1 from "../../../assets/images/img6.jpg";
import img4 from "../../../assets/images/img8.jpg";
import img5 from "../../../assets/images/img9.jpg";

export const Hero = () => {

  let imgArray =[img, img1, img2,img4,img5]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    let interval=  setInterval(() => {
      index ==2 ? setIndex(0) : setIndex(index+1);
    }, 10000)
    return () => {
      clearInterval(interval)
    };
  }, [index]);
  // bg-[url("src/assets/images/img7.jpg")]
  return (
    <section className="flex flex-1 bg-white w-full h-screen">
      <aside className='flex bg-white p-9 md:pl-16 lg:pl-28 bg-bottom justify-center items-center md:items-start flex-1 flex-col md:bg-none bg-[url("src/assets/images/img7.jpg")]'>
        <span className="text-black w-full md:w-3/4 md:text-xl lg:text-[32px]/[38.4px] font-normal text-wrap text-lg text-center md:text-left">
          <h3 className="md:text-3xl lg:text-[64px]/[81.1px] text-2xl font-semibold text-pretty mb-9">
             Driver's lincense Application
          </h3>
          Get your Driver license done anywhere in the world <em className="text-[#22C55E] ">in an instant</em>
        </span>
        <div className="flex mt-8 items-center gap-7">
        <button className=" bg-[#22C55E] text-[18px]/[19.2px] text-white px-8 py-4 font-medium rounded-full min-w-36">Get Started</button>

        </div>

      </aside>
      <aside className=" hidden md:flex md:flex-1 md:h-full ">
          <img src={imgArray[index]} className='object-cover w-full h-full' alt="image" />
      </aside>

    </section>
  );
};
