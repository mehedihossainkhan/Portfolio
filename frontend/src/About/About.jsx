import data from "./data";


const About = () => {
    const mydata = data;
  return (
    <div className=" z-20 relative">
        <div className="container sm:px-10 m-auto px-5 flex items-center flex-col py-20 ">
            <div className="grid md:grid-cols-3 grid-cols-1 w-full md:gap-10 ">
                <div className="md:col-span-1 w-full ">
                    <img src="./profile.jpg" alt="" className="w-full"/>
                </div>
                <div className="col-span-2 md:pt-0 pt-10">
                    <h1 className="md:text-4xl xl:text-5xl text-3xl font-[500]"> I'm Mehedi Hossain Khan, a professional Web Developer.</h1>
                    <p className=" text-lg  pt-3 text-slate-400">
                        {mydata.about}
                    </p>
                    <div className="mt-5">
                        <h1 className="text-xl text-white font-semibold">Socials</h1>
                        <div className="flex gap-4 mt-3">
                            <a href = {mydata.facebook} className="p-3 bg-[#0e121b] rounded-full hover:border-[#1d222e] border border-[#0e121b] overflow-clip cursor-pointer ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            </a>
                            <a href = {mydata.github} className="p-3 bg-[#0e121b] rounded-full hover:border-[#1d222e] border border-[#0e121b] overflow-clip cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            </a>
                            
                        </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-6 items-center justify-between">
                        <div>

                            <h1 className="text-xl text-white font-semibold">Contact me</h1>
                            <p className="text-neutral-300 mt-3">
                                Email: {mydata.email}
                            </p>
                        </div>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href="./CV/Mehedi_Hasan_CV.pdf" className="px-8 py-4 bg-[#141b2b] rounded-[0.5rem] hover:bg-[#1d2438]"> Get CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container sm:px-10 m-auto px-5 py-20 pt-0">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6">
                
                <div className="bg-[#0d1424] rounded-xl p-10">
                    <h2 className="text-3xl">Experience</h2>
                    <div className="border-b border-[#1f283f] w-40 mt-2"></div>
                    {
                        mydata.experience.map((item, index) => {
                            return (
                                <div key={index} className="mt-5">
                                    <h3 className="text-xl text-white font-semibold">{item.title}</h3>
                                    <p className="text-lg text-slate-400 mt-3">{item.institute}</p>
                                    <p className="text-sm text-slate-400">{item.date}</p>
                                    <div className="border-b border-[#1f283f] w-full mt-2"></div>

                                </div>
                            )
                        })
                    }
                </div>
                <div className="bg-[#0d1424] rounded-xl p-10 md:mt-0 mt-6">
                    <h2 className="text-3xl">Education</h2>
                    <div className="border-b border-[#1f283f] w-[9.5rem] mt-2"></div>
                    {
                        mydata.education.map((item, index) => {
                            return (
                                <div key={index} className="mt-5">
                                    <h3 className="text-xl text-white font-semibold">{item.title}</h3>
                                    <p className="text-lg text-slate-400 mt-3">{item.institute}</p>
                                    <p className="text-sm text-slate-400">{item.date}</p>
                                    <div className="border-b border-[#1f283f] w-full mt-2"></div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default About