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
    <section className="flex flex-1 bg-white flex-row h-screen">
      <aside className='flex bg-bottom bg-white backdrop-opacity-25 pl-32 justify-center flex-1 flex-col'>
        <span className="text-black w-3/5 text-[32px]/[38.4px] w-3/4 font-normal text-wrap text-left">
          <h3 className="text-[44px]/[51.1px] font-semibold text-pretty mb-4">
             Driver's lincense Application
          </h3>
          Get your Driver license done anywhere in the world <em className="text-[#22C55E] ">in an instant</em>
        </span>
        <div className="flex items-center gap-7">

        <button className=" mt-4 bg-[#22C55E] text-[18px]/[19.2px] text-white px-8 py-6 font-medium rounded-full w-fit">Get Started</button>
        {/* <button className=" mt-4 text-[#22C55E] border border-[#22C55E] text-[18px]/[19.2px] bg-white px-8 py-6 font-medium rounded-full w-fit"> Application</button> */}
        </div>

      </aside>
      <aside className="flex-1 h-full">
          <img src={imgArray[index]} className='object-cover w-full h-full' alt="image" />
      </aside>

    </section>
  );
};
