import React from 'react'
import { useState, useEffect } from 'react'
import Popup from "@/PopUp/Popup";
const Card = ({project, index}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div key={index} className="flex flex-col p-5 bg-gradient-to-bl from-[#0e121b] to-[#1d222e] rounded-xl hover:shadow-slate-700 hover:shadow-lg group cursor-pointer transition-all duration-300">
            <div className="w-full aspect-video flex justify-center items-center rounded overflow-hidden">
                <img src={project.image} alt={project.title} className="cover h-full w-full" />
            </div>
            <div>
                <h2 className="text-white mt-3 text-2xl font-medium text-center">{project.title}</h2>
            </div>
            
            <button onClick={()=>{
                setIsOpen(true)
            }} className='bg-[#242935] mt-3 px-4 py-2'>
                Expand
            </button>
            <Popup classname="sm:p-10 p-4 mx-5 max-w-xl bg-gradient-to-bl from-[#0e121b] to-[#1d222e] rounded-xl" isOpen={isOpen} title={project.title} onClose = {()=>{
                setIsOpen(false)
                console.log('closed')
            }}>
                <div key={index} className="flex flex-col cursor-pointer transition-all duration-300">
                    <div className="w-full aspect-video flex justify-center items-center rounded overflow-hidden mt-3">
                        <img src={project.image} alt={project.title} className="cover h-full w-full" />
                    </div>
                    <p className='mt-4 text-neutral-400'>Tools Used</p>
                    <div className="flex items-center gap-3 flex-wrap mt-3">
                        {project.tools.map((tool, index) => {
                            return ( 
                                <span
                                    key={index}
                                    className="text-neutral-300 bg-[#242935] py-1 px-3 rounded-full shadow shadow-slate-700"
                                >
                                    {tool}
                                </span>
                            );
                        })}
                    </div>
                    <p className='mt-4 text-neutral-400'>Description</p>
                    <p className='text-neutral-300 mt-3'>{project.desc}</p>
                </div>
            </Popup>
        </div>
    )
}

export default Card