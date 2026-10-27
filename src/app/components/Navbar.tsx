
"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-8 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        MyPortfolio
      </h1>

      <div className="flex gap-6">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
