import profilePic from '../assets/me.jpeg'
export const About = () => {

  return (
    <section className="py-24 flex flex-col items-center px-4">
      <h1 className="text-5xl font-bold mb-4">Oi, eu sou Christian Viana</h1>
      <h2 className="text-3xl mb-8">Engenheiro de Softwere</h2>
      <div className="relative">
        <img
          src={profilePic}
          alt="John"
          className="w-48 h-48 rounded-full object-cover"
        />

      </div>
      <p className="mt-8 text-sm text-gray-700 max-w-2xl text-justify">
        Como Desenvolvedor Front-End na Quality Digital, assumi a liderança de projetos técnicos e liderei a migração de sistemas de e-commerce para VTEX IO, aprimorando experiências de varejo online para clientes de alto perfil. Minha função se estende à manutenção e refinamento do código back-end, garantindo operações robustas e contínuas.
       <br/> Paralelamente, atuo como Instrutor de Programação na CoderHouse, onde desmistifico as complexidades do JavaScript, React, HTML5 e CSS3 para aspirantes a desenvolvedores. O meu compromisso com a educação está enraizado no desejo de elevar as competências dos outros, aproveitando a minha experiência para promover um ambiente onde o conhecimento se transforma em aplicações no mundo real.
      </p>
      <a href='https://www.dropbox.com/scl/fi/i5e4ijl0csuwhb51kzrhe/Christian-Viana-CV_compressed.pdf?rlkey=n9ar7r1rzx9bpahvm65o1oa4s&e=1&st=oljriqdz&dl=0' target='_blank'>
        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Acessar CV
        </button>
      </a>
      
    </section>
  )
}