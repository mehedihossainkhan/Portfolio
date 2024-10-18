import myprojects from "./data"

const Projects = ({setNavbarstate, scrolltop}) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const projectList = myprojects;
    return (
        <div className="bg-[#020711] z-20 relative">
            <div className="container sm:px-10 m-auto px-5 flex items-center flex-col py-10 pb-0">
                <div>
                    <h1 className='text-4xl font-bold'>Projects</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-10">
                    {projectList.slice(0,3).map((project, index) => {
                        return (
                            <div key={index} className="flex flex-col p-5 bg-gradient-to-bl from-[#0e121b] to-[#1d222e] rounded-xl hover:shadow-slate-900 hover:shadow-lg">
                                <div className="w-full aspect-video flex justify-center items-center rounded overflow-hidden">
                                    <img src={project.image} alt={project.title} className="cover h-full w-full" />
                                </div>
                                <div>
                                    <h2 className="text-white mt-3 text-xl">{project.title}</h2>
                                </div>
                                
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
                <div className="w-full sm:w-auto mt-8">
                    <button onClick={() =>{setNavbarstate('projects'); scrolltop()}} className="text-white sm:mt-5 bg-[#1d222e] hover:bg-[#151a27] block sm:py-4 sm:px-8 sm:text-lg py-3 px-6 rounded text-center cursor-pointer w-full sm:w-auto">View More</button>
                </div>
            </div>
        </div>
    )
}

export default Projects;