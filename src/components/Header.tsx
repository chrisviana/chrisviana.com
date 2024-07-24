import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

return (
    <nav className='p-4'>
      <div className="container mx-auto flex items-center justify-end flex-wrap">
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow lg:flex lg:justify-end">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-400 mr-4">
              Projetos
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-400">
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
