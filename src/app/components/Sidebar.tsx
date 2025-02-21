import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2, Sun, AppWindow, User } from 'lucide-react'
import Image from 'next/image';

export function Sidebar() {
    return(
    <aside className="w-72 bg-zinc-900 p-4 rounded-md m-3">
        <div className="flex items-center gap-2 pb-3">
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-950 text-white hover:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300">
                <HomeIcon />
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-950 text-white hover:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300">
                <Sun />
            </button>
        </div>

      <nav className="space-y-5 mt-10">
        <a href="" className="flex items-center gap-3 text-xl font-semibold text-zinc-200">
          <User />
          Mais sobre mim
        </a>
        <a href="" className="flex items-center gap-3 text-xl font-semibold text-zinc-200">
          <Search />
          Carreira
        </a>
        <a href="" className="flex items-center gap-3 text-xl font-semibold text-zinc-200">
          <AppWindow />
          Projetos
        </a>
        <a href="" className="flex items-center gap-3 text-xl font-semibold text-zinc-200">
          <Library />
          Contatos
        </a>
      </nav>
    </aside>
    )
}