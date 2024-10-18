import Skill from "./data";

const Skills = () => {
    const skill_items = Skill.skills;
    return (
        <div className="bg-[#020711] z-20 relative">
            <div className="container sm:px-10 m-auto px-5 flex items-center flex-col sm:py-36 py-20">
                <div>
                    <h1 className='text-4xl font-bold'>Skills</h1>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full pt-10">
                    {skill_items.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center p-5 bg-gradient-to-bl from-[#0e121b] to-[#1d222e] rounded-xl hover:shadow-slate-900 hover:shadow-lg">
                                <img src={item.icon} alt={item.name} className="w-20 h-20" />
                                <p className="text-white mt-3">{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills