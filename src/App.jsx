import './index.css'
import imgFundo from './assets/images/img-fundo.png'
import coracao from './assets/images/coracao.png'

const styles = `
  @keyframes heartbeat {
    0% {
      transform: scale(1.02);
    }
    10% {
      transform: scale(1.15);
    }
    20% {
      transform: scale(1.05);
    }
    30% {
      transform: scale(1.12);
    }
    40% {
      transform: scale(1.03);
    }
    60% {
      transform: scale(1.06);
    }
    80% {
      transform: scale(1.04);
    }
    100% {
      transform: scale(1.02);
    }
  }
`;

function App() {
  return (
    <>
      <style>{styles}</style>
      <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-linear-to-r from-blue-700 to-blue-800">
        <img
          src={imgFundo}
          alt="Imagem de fundo"
          className="w-full h-full object-contain"
        />
        <img
          src={coracao}
          alt="Coração"
          style={{
            width: '1000px',
            height: '810px',
            animation: 'heartbeat 2.5s ease-in-out infinite',
          }}
          className="absolute -translate-y-32 transform-gpu"
        />
      </div>
    </>
  )
}

export default App
