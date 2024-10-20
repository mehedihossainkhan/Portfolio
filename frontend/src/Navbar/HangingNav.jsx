const HangingNav = ({navbarstate, setNavbarstate, showHangingNav}) => {
    console.log(showHangingNav)
    console.log(navbarstate)
  return (
    <div className={`fixed inset-x-0 z-30 w-[17.5rem] left-1/2 translate-x-[-50%] ${ navbarstate === "home" && !showHangingNav ? "md:block hidden" : ""}`}>
        <div className="flex-shrink-0">
            <ul className="flex  justify-center items-center flex-row border flex-shrink-0 border-[#262626] rounded-full px-2 py-2 mt-5 bg-[#020711]">
                <li className="m-0"><a className = {`text-sm px-5 py-2 rounded-full cursor-pointer block ${navbarstate === 'home' ? "bg-gradient-to-l from-[#202631] to-[#141b2b]" : ""}`} href="#"
                    onClick = {() => setNavbarstate('home')}
                >Home</a></li>
                <li className="m-0"><a className = {`text-sm px-5 py-2 rounded-full cursor-pointer block ${navbarstate === 'projects' ? "bg-gradient-to-l from-[#202631] to-[#141b2b]" : ""}`} href="#"
                    onClick = {() => setNavbarstate('projects')}    
                >Projects</a></li>
                <li className="m-0"><a className = {`text-sm px-5 py-2 rounded-full cursor-pointer block ${navbarstate === 'about' ? "bg-gradient-to-l from-[#202631] to-[#141b2b]" : ""}`} href="#"
                    onClick = {() => setNavbarstate('about')}
                >About</a></li>
            </ul>
        </div>
    </div>
  )
}

export default HangingNav