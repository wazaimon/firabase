import { useState } from 'react'
import './App.css'
import logoFira from './assets/Firebase_logo.png'
import logoFira2 from './assets/Firebase2_logo.png'

export default function App() {

  const [ativo, setAtivo] = useState(false)

  return (
    <>
    <main>
      
      <button 
        className={ativo ? 'btn ativo' : 'btn'}
        onClick={() => setAtivo(!ativo)}
      >
        <img src={logoFira} alt="" />
      </button>

      <div className={ativo ? 'conteudo mostrar' : 'conteudo'}>
            <section>
              <h1>para que serve?</h1>
              <p>O Firebase, criado pelo Google, é uma ferramenta que ajuda a desenvolver aplicativos e sites de forma mais simples, 
                sem precisar montar todo o sistema do zero. Ele já oferece várias funções prontas, o que facilita bastante o trabalho e 
                torna o desenvolvimento mais rápido.</p>
            </section>

            <section>
              <h1>utilidades</h1>
              <p>Entre as principais utilidades do Firebase estão o armazenamento de dados, o envio e armazenamento de arquivos,
                 a hospedagem de sites e o envio de notificações para os usuários.
                 Por isso, ele é bastante usado em aplicativos como redes sociais e outros sistemas interativos.</p>
            </section>

            <section>
              <h1>dificuldades</h1>
              <p>Por outro lado, também existem algumas dificuldades. O uso pode acabar ficando caro conforme o número de usuários aumenta, 
                além de gerar uma certa dependência do Google. Também pode ter limitações quando o projeto é mais complexo.</p>
            </section>
      </div>
    </main>
          <footer>
              <a href="https://firebase.google.com/?hl=pt-br" className="link-footer">
              <img src={logoFira2} className="logo2" />
              saiba mais...
            </a>
          </footer>
    </>
    
  )
}