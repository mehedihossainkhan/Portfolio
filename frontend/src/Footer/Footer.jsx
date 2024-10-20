import data from '../About/data'
const Footer = ({setNavbarstate}) => {
    const mydata = data;
  return (
    <div className="bg-gradient-to-r from-[#020711] to-[#141b2b] z-20 relative">
        <div className="container sm:px-10 m-auto px-5 flex flex-wrap items-center justify-between gap-6 py-20">
            <div className="flex flex-col">
                <h1 className="text-4xl text-white font-bold ">Get in Touch!</h1>
                <div className="flex gap-4 mt-3">
                    <a href = {mydata.facebook} className="p-3 bg-[#1f2a41] rounded-full overflow-clip cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href = {mydata.github} className="p-3 bg-[#1f2a41] rounded-full overflow-clip cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                </div>
                <div className="mt-5 flex flex-col ">
                    <h1 className="text-xl text-white font-semibold">Contact me</h1>
                    <p className="text-neutral-300 mt-1">
                        Email: {mydata.email}
                    </p>
                </div>
            </div>
            {/* all page links */}
            <div className='pr-10'>
                <ul className="flex flex-col gap-4 mt-3">
                    <li><a className="text-slate-300 cursor-pointer" onClick = {() => setNavbarstate('home')}>Home</a></li>
                    <li><a className="text-slate-300 cursor-pointer" onClick = {() => setNavbarstate('projects')}>Projects</a></li>
                    <li><a className="text-slate-300 cursor-pointer" onClick = {() => setNavbarstate('about')}>About</a></li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Footer