import { useEffect, useState } from "react";
import GithubIcon from "./GithubIcon";

export default function SideBar({ setBg }) {
  const [iW, setIW] = useState(false)

  useEffect(() =>{
    const checkWindow = (e) =>{
      e.target.innerWidth < 1025 ? setIW(true) : setIW(false);
    }
    window.addEventListener('resize', (e) => checkWindow(e))
    window.innerWidth < 1025 ? setIW(true) : setIW(false)
    return window.removeEventListener('resize',(e)=>checkWindow(e))
  },[]);

  const bgChange = (num, el) => {
      setBg(num);
      document.querySelectorAll("aside button").forEach((btn) => {
          btn.classList.remove("ativo");
      })
      
      el.classList.add("ativo");
  };

  return (
    <aside className="aside max-w-[700px] w-full lg:max-w-72 bg-[#40478f] rounded-xl border-2 border-black [&_.ativo]:bg-[#1e2144]! h-auto flex lg:justify-between justify-center lg:flex-col flex-row px-10 gap-7 py-12 min-h-unset lg:min-h-126 lg:translate-y-4 -translate-y-9 relative z-10">
      <span className='w-96 h-96 bg-blue-500/20 blur-3xl rounded-full absolute left-1/2 top-1/2 [translate:-50%_-50%] -z-1 mix-blend-plus-lighter block pointer-events-none'></span>
      
      <h2 className="text-[#df9743] text-shadow-2xs text-2xl font-medium text-center hidden lg:block">
        Paused
      </h2>

      {[1, 2, 3, 4, 5].map((num) => (
        <button key={num} className={num === 1 ? "ativo" : ""} onClick={(e) => bgChange(e.target.innerText.match(/\d+/g).join(""), e.target)}>
          {iW ? 'BG' : "Background"} {num}
        </button>
      ))}

      <pre className="leading-none text-white/65 mix-blend-hard-light text-xs font-100 lg:flex hidden items-center justify-center gap-3 translate-y-9 self-center">
        <a href="https://github.com/brunofranciscojs/TE1-Crafiting-Guide" target="_blank" title="see on github" className="block leading-none"><GithubIcon /></a>
        <span>made with <br/>react/tailwind</span>
      </pre>

    </aside>
  );
}
