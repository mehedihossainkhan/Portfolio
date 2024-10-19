import Popup from "@/PopUp/Popup";
import myprojects from "./data"
import { useEffect, useState } from "react";
import Card from "./card";
const Projects = ({setNavbarstate, scrolltop}) => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const projectList = myprojects;
    return (
        <div className="bg-[#020711] z-[25] relative">
            <div className="container sm:px-10 m-auto px-5 flex items-center flex-col py-10 pb-0">
                <div>
                    <h1 className='text-4xl font-bold'>Projects</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-10">
                    {projectList.slice(0,3).map((project, index) => {
                        return (
                            <Card project={project} index={index} />
                            
                        )
                    })}
                </div>
                <div className="w-full sm:w-auto mt-8">
                    <button onClick={() =>{setNavbarstate('projects'); scrolltop()}} className="text-white sm:mt-5 bg-[#1d222e] hover:bg-[#151a27] block sm:py-4 sm:px-8 sm:text-lg py-3 px-6 rounded text-center cursor-pointer w-full sm:w-auto">View More</button>
                </div>
                
            </div>
        </div>
    )
}

export default Projects;