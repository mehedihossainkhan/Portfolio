import myprojects from "./data"
import { useEffect } from "react";
const ProjectsPage = () => {
    const projectList = myprojects;

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
      }
      useEffect(() => {
        // Scroll to the top when navbarstate changes
        const timeoutId = setTimeout(() => {
          scrollToTop();
        }, 0); // Use a timeout to ensure it runs after the state update
    
        return () => clearTimeout(timeoutId); // Clean up on unmount
      }, []);

    return (
        <div className=" z-20 relative">
            <div className="container sm:px-10 m-auto px-5 flex items-center flex-col py-10 pb-20">
                <div>
                    <h1 className='text-4xl font-bold'>Projects</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-10">
                    {projectList.map((project, index) => {
                        return (
                            <div key={index} className="flex flex-col p-5 bg-gradient-to-bl from-[#0e121b] to-[#1d222e] rounded-xl hover:shadow-slate-900 hover:shadow-lg">
                                <div className="w-full aspect-video flex justify-center items-center rounded overflow-hidden">
                                    <img src={project.image} alt={project.title} className="cover h-full w-full" />
                                </div>
                                <h2 className="text-white mt-3 text-xl">{project.title}</h2>
                                <div className="flex items-center gap-3 mt-3 flex-wrap">
                                    {
                                        project.tools.map((tool, index) => {
                                            return (
                                                <span key={index} className="text-neutral-300 bg-[#242935] py-1 px-3 rounded-full">{tool}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default ProjectsPage