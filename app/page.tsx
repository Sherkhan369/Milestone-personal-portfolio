// import Image from "next/image";

import Image from "next/image";

export default function Home() {
  return (
    <div >
      <div className="flex justify-between   bg-[url('/house.jpg')] bg-cover w-[100%]">
      {/* left side */}
        <div className=" w-[50%] ml-4 mt-4 "> 
     <h1 className="text-5xl font-bold mt-4 text-[#044E83]">Governor Sindh </h1>
     <p className="text-4xl  text-[#044E83]">Kamran Khan Tessori</p>
     <h2 className="mt-4 text-[#2EB6E8] text-4xl font-bold">
      Certified Cloud <br /> Applie Generative AI <br /> Engineering (GenEng)
     </h2>
     <p className="text-2xl font-bold text-[#044E83] mt-8">Earn up to $5,000/month</p>
     <p className="text-2xl font-bold  text-[#044E83] mt-3">Now Admission open in Karachi</p>
     
     <div className="flex mt-28 pb-10">
      <button className="bg-[#044E83] text-white min-w-56 rounded-lg ml-3">APPLY NOW</button>
      <div className="ml-8 text-[#044E83]">
      <h3 className="font-bold text-center ">500000</h3>
      <p className="">Accepted Application</p>
      </div>
     </div>
     </div>
      <div className="w-[50%] flex  justify-end relative ">
      
      <Image src={"/cover.1d863e39.png"} alt="kamran tessori" height={1200} width={800} className="mt-4 "/>
      </div>
      </div>
      
      {/* Hero-section */}
      <div className="mt-14">
    <h1 className="flex justify-center text-4xl font-bold text-[#044E83] text-center">
             Certified Cloud Applied Generative AI Engineer (GenEng) and 
             Solopreneur Developing Billion-Dollar Valued Developers 
                    and Solopreneurs
             </h1>
            
     <p className="mt-6 ml-2 text-[#353538] text-xl font-normal">
         The pace of technological change is accelerating big players like Microsoft,Amazon, Google, and OpenAI are
         winning
         by providin infrastrucure, large AI foundation models, frameworks, 3D Metavers experience, and massive
         distribution networks. Solopreneurs trained in this program will win by automating work typically
         outsourced to employees, by directly connecting to customers by eliminating the middleman, and by Developing
         vertical metaverses, thus paving the for the first billion-dollar Valued solopreneur businesses. This program
         has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the
         ultra-lean business model and work indepenently and will not need to hire emoloyees or other team members.
     </p>
      </div>
      <div className="flex justify-evenly mt-14 rounded-lg ">
      <Image src={"/metaverse.06eccb60.jpg"} alt="logo" height={250} width={400} className="rounded-lg"/>
      <Image src={"/AI.39397d24.jpg"} alt="logo" height={250} width={400} className="rounded-lg"/>
      <Image src={"/solo.jpg"} alt="logo" height={250} width={400} className="rounded-lg"/>
      </div>
      <div className="mt-14 " >
            {/* section-1   */}
            <h2 className="text-4xl font-bold ml-8 mt-10 text-[#044E83]">Core Courses Sequence</h2>
         <div className="flex text-center mt-12 ml-2 rounded-full items-center gap-5  ">
         
           <div className="bg-gray-100 pb-8 rounded-lg  shadow-xl ">
           <Image src={"/programming_fundamentals.49cca4e9.jpg"} alt="logo" height={250} width={300}/>
           <p className=" felx text-[#353538] text-xl font-semibold items-center pt-4">Programing Foundamentals</p>
           </div>
           <div  className="bg-gray-100 pb-8 rounded-lg  shadow-xl">
           <Image src={"/nextjs.3dff0f70.jpg"} alt="logo" height={250} width={300}/>
           <p className="text-[#353538] text-xl font-semibold pt-4">Web2 Using Next Js</p>
           </div>
           <div  className="bg-gray-100 pb-8 rounded-lg  shadow-xl">
           <Image src={"/earn_as_your_learn.b8248a49.jpg"} alt="logo" height={250} width={300}/>
           <p className="text-[#353538] text-xl font-semibold pt-4">Earn As You Learn</p>
           </div>
         </div>
         
         {/* <!-- section2 --> */}
         <h2 className="text-4xl font-bold ml-8 mt-10 text-[#044E83]">Advance Courses</h2>
         <div className="flex  flex-wrap mt-12 ml-2 text-center items-center grid: grid-cols-4 gap-10">
                 <div className="bg-gray-100 pb-5 rounded-lg  shadow-xl">
                     <Image src={"/AI.39397d24.jpg"} alt="logo" height={250} width={300}/>
                 
                     <p className="text-[#353538] text-xl font-semibold pt-4">Artificial Intelligence</p>
                 </div >
                 <div  className="bg-gray-100 pb-8 rounded-lg  shadow-xl">
                 <Image src={"/metaverse.06eccb60.jpg"} alt="logo" height={250} width={300}/>
                     <p className="text-[#353538] text-xl font-semibold pt-4">Web 3 and Metaverse</p>
                 </div>
                 <div  className="bg-gray-100 pb-8 rounded-lg  shadow-xl">
                 <Image src={"/cloudComputing.7260492c.jpg"} alt="logo"  height={250} width={300}/>
                     
                     <p className="text-[#353538] text-xl font-semibold pt-4">Cloud-Native Computing</p>
                 </div>
                 <div  className="bg-gray-100 mt-5 pb-8 rounded-lg  shadow-xl">
                 <Image src={"/iot.16f7b003.jpg"} alt="logo" height={250} width={300}/>
                     <p className="text-[#353538] text-xl font-semibold pt-4">Ambient Computing and IoT</p>
                 </div>
                 <div  className="bg-gray-100 mt-5 pb-8 rounded-lg  shadow-xl">
                 <Image src={"/genomics.b87789f1.jpg"} alt="logo" height={250} width={300}/>
                     <p className="text-[#353538] text-xl font-semibold pt-4">Genonics and Bioinformatics</p>
                 </div>
                 <div  className="bg-gray-100 mt-5 pb-8  rounded-lg  shadow-xl">
                 <Image src={"/automation.a77dbbe8.jpg"} alt="logo" height={250} width={300}/>
                     <p className="text-[#353538] text-xl font-normal pt-4">Network Programmability Auromation </p>
                 </div>
             </div>
             </div>
         </div>
      
    
   
  );
}
