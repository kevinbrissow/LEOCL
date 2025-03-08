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
<nav className={`fixed top-0 left-0 w-full bg-black bg-opacity-85 text-white p-2 flex items-center transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"} shadow-lg`}>
  {/* Logo e descrição */}
  <div className="flex items-center gap-3 w-1/3 justify-start">
    <Image src="/LEO_LOGO_CL.png" alt="Logo" width={80} height={80} />
    <span className="whitespace-nowrap text-2xl font-bold">LEO CERRO LARGO</span>
  </div>

  {/* Links de navegação */}
  <div className="flex justify-center items-center w-1/3">
    <ul className="flex gap-6">
      <li className="cursor-pointer">Início</li>
      <li className="cursor-pointer">Sobre</li>
      <li className="cursor-pointer">Contato</li>
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
    <section className="p-16 mx-auto text-center bg-slate-600 py-44">
      <h2 className="text-4xl font-bold text-white">SEJA BEM VINDO AO LEO CLUBE CERRO LARGO</h2>
      <p className="mt-6 text-xl text-white">
        O LEO Clube é uma organização de jovens voluntários que promovem ações sociais para transformar a comunidade.
      </p>
    </section>
  );
};

const AboutSection2 = () => {
  return (
    <section className="p-8 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-700">Sobre o LEO Clube</h2>
      <p className="mt-4 text-lg text-gray-700">
        O LEO Clube é uma organização de jovens voluntários que promovem ações sociais para transformar a comunidade.
      </p>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="p-8 max-w-4xl mx-auto text-center">
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
      <AboutSection />
      <AboutSection />
      <AboutSection />
      <AboutSection />

      <Footer />
    </div>
  );
};


export default HomePage;
