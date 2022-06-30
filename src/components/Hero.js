// import React from "react";
// // import WomanImg from "../assets/img/myphoto.png";
// import "../imgset.css";

// const Hero = () => {
//   return (
//     <>
//       <section
//         id="home"
//         className="lg:h-[95vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden "
//       >
//         <div className="container mx-auto h-full">
//           <div className=" flex items-center h-full pt-8">
//             {/* {left side } */}
//             <div className="logoAnime flex-1 flex flex-col items-center lg:items-center">
//               <p className="text-lg text-green-500 text-md mb-[22px]">
//                 Hey, I'm Vaishnavi !👋🏻
//               </p>
//               <h1 className="text-2xl mb-5 leading-[44px] md:text-3xl md:leading-tight lg:text-7xl lg:leading-[1.1] font-bold ">
//                 Backend Developer
//               </h1>

//               {/* <a href="../../public/vaishnavi.pdf" download>
//               <button className="btn btn-md bg-green-500 hover:bg-secondary-hover md:btn-lg transition-all mt-5 ">
//                 Download CV
//               </button>
//             </a> */}
//             </div>

//             {/* {right side } */}
//             {/* <div className="hidden lg:flex flex-1 justify-end items-end h-5"></div>
//           <img className=" pt-40" src={WomanImg} alt="" /> */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;

import React from "react";

// import woman image
import WomanImg from "../assets/img/memoji.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[80vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="logoAnime flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-green-500 text-md mb-[22px]">
              Hey, I'm Vaishnavi ! 👋🏻
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Backend Developer
            </h1>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full mt-14">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
