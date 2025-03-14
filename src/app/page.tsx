"use client";

import React, { useState, useEffect } from "react";
//import { Home, Info, Users } from "lucide-react";
import Image from 'next/image';

import { Instagram, Facebook, } from 'lucide-react'; 

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      setVisible(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(true), 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
  <nav className={`fixed top-0 left-0 w-full h-24 bg-black bg-opacity-85 text-white p-2 flex items-center transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"} shadow-lg`}>
    {/* Logo e descrição */}
    <div className="flex items-center gap-3 w-1/3 justify-start p-5">

      <Image 
        src="/LEO_LOGO_CL.png" 
        alt="Logo" 
        width={70} 
        height={70} 
        className="hover:animate-pulse"
      />

      <span className="whitespace-nowrap text-2xl font-semibold text-left pl-2">
        LEO CLUBE<br />CERRO LARGO
      </span>
    </div>

    {/* Links de navegação */}
    <div className="flex justify-center items-center w-1/3">
      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-red-600 transition-colors duration-200">Início</li>
        <li className="cursor-pointer hover:text-red-600 transition-colors duration-200">Sobre</li>
        <li className="cursor-pointer hover:text-red-600 transition-colors duration-200">Contato</li>
      </ul>
    </div>

    {/* Ícones das redes sociais */}
    <div className="flex gap-4 w-1/3 justify-end pr-5">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
        <Instagram size={24} />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
        <Facebook size={24} />
      </a>
    </div>
  </nav>
  );
};



const About = () => {
  return (
    <section className="p-16 mx-auto text-center bg-slate-700 py-44 shadow-lg">
      <h2 className="text-4xl font-bold text-white">SEJA BEM VINDO</h2>
      <p className="mt-6 text-xl text-white">
        O LEO Clube é uma organização de jovens voluntários que promovem ações sociais para transformar a comunidade.
      </p>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="p-8 mx-auto text-left">
      <h2 className="text-4xl font-bold text-black">Sobre Nós</h2>
      <p className="mt-4 text-lg text-gray-700">
        O LEO Clube é um programa de serviço voluntário voltado para jovens entre 12 e 30 anos, patrocinado pelos Lions Clubes. Criado em 1957, o movimento tem como principal objetivo desenvolver a liderança, o companheirismo e o compromisso social dos seus membros por meio de ações que beneficiam a comunidade.
        A sigla LEO representa Liderança, Experiência e Oportunidade, valores fundamentais que guiam os clubes em suas atividades. Os membros, chamados de Leos, realizam projetos voltados para diversas causas, como assistência social, preservação ambiental, saúde, educação e inclusão, promovendo impacto positivo nas localidades onde atuam.
        Os LEO Clubes estão presentes em diversos países, conectando jovens com o propósito de servir ao próximo enquanto desenvolvem habilidades de trabalho em equipe, organização e liderança. Além disso, a participação no movimento proporciona experiências enriquecedoras, incentivando o crescimento pessoal e profissional dos voluntários.
        Fazer parte do LEO Clube é mais do que doar tempo para causas sociais; é uma oportunidade de transformar vidas, fortalecer laços e construir um futuro melhor através do serviço altruísta.
      </p>
      <div className="mt-6">
        <button className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
          Sobre o LEO
        </button>
      </div>
    </section>
  );
};

const AboutSection2 = () => {
  return (
    <section className="p-8 mx-auto text-left">
      <h2 className="text-3xl font-bold text-blue-700">Sobre o LEO Clube</h2>
      <p className="mt-4 text-lg text-gray-700">
        O LEO Clube é uma organização de jovens voluntários que promovem ações sociais para transformar a comunidade.
      </p>
    </section>
  );
};



const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>&copy; 2025 LEO Clube - Todos os direitos reservados.</p>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div className="bg-white text-white min-h-screen">
      <Navbar />
      <About />
      <AboutSection />
      <AboutSection2 />

      <Footer />
    </div>
  );
};


export default HomePage;
