import React from 'react'

export default function Header(){
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur z-20 border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <img src="https://henil-patel.base44.app/static/media/logo_v3.d98750a7c406dd97e5db.png" alt="logo" className="w-10 h-10 object-contain" />
          <div className="font-semibold text-primary">Henil Patel</div>
        </div>
        <nav className="space-x-6 text-sm text-slate-600 hidden md:block">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#experience" className="hover:text-primary">Experience</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
      </div>
    </header>
  )
}
