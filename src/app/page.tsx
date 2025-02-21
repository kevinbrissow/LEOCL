import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, DivideCircle, Plus} from 'lucide-react'
import Image from 'next/image'
import { Sidebar } from '../app/components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen flex bg-black">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <main className="bg-zinc-900 p-4 rounded-md m-3 flex-1">
          <div className="gap-6 mt-2">
            <div>
              <a href="#" className="flex items-center gap-16">
              <Image src="/kevin.JPG" className="ml-5 rounded-full transform transition-transform duration-300 hover:scale-110" width={250} height={250} alt="Perfil" />              
              <div className="flex flex-col">
                  <h1 className="text-7xl font-semibold">Kevin Brissow</h1>
                  <h2 className="text-5xl font-semibold">Desenvolvedor Full Stack</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4"> 
            <h1 className="font-semibold text-2xl">Sobre mim</h1>
            <h2 className="text-2xl w-1/2">
              Olá! Sou Kevin Brissow, desenvolvedor full stack com 25 anos, Bacharel em Ciência da Computação pela URI. Minha trajetória inclui um estágio na área pública, onde tive a oportunidade de trabalhar com gestão de estoques, manutenção de sistemas, redes e suporte técnico (remoto e presencial), desenvolvendo habilidades valiosas em resolução de problemas e atendimento eficaz.
            </h2>
          </div>
        </main>

        <aside className="bg-black p-4 rounded-md m-3 h-32 overflow-hidden relative">
          <div className="absolute inset-0 flex animate-marquee gap-6">
            <Image src="/c-sharp.png" alt="C#" width={60} height={20} objectFit="contain" />
            <Image src="/pacman.png" alt="Pacman" width={100} height={100} objectFit="contain" />
          </div>
        </aside>
      </div>

      <div className="fixed right-0 top-2/4 w-72 h-[500px] bg-slate-800 rounded-3xl shadow-lg mr-14 transform transition-transform duration-300 hover:translate-y-[-20px] hover:scale-105">
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-center mt-4">
            <div className="w-64 h-96 bg-black rounded-2xl">
            </div>
          </div>
          <div className="w-full flex justify-center mb-4">
            <div className="w-12 h-12 bg-black rounded-full mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
