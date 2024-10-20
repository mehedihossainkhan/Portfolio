
function Navbar () {
  return (
    <nav className="flex justify-between items-center flex-row container sm:px-10 px-5 my-7">
      <div className="logo">
        <h1 className=" font-bold text-2xl">Mehedi</h1>
      </div>
      <div className="hireme">
        <button><a className="border border-[#262626] text-sm px-5 py-2 rounded-full cursor-pointer block hover:bg-[#0e121b] bg-[#020711]">Download CV!</a></button>
      </div>
    </nav>
  )
}

export default Navbar