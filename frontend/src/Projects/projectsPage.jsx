import myprojects from "./data"
import { useEffect } from "react";
import Card from "./card";
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
        <div className="z-[25] relative">
            <div className="container sm:px-10 m-auto px-5 flex items-center flex-col py-10 pb-20">
                <div>
                    <h1 className="text-4xl font-bold">Projects</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-10">
                    {projectList.map((project, index) => {
                        return (
                            <Card project={project} index={index} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage