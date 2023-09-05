import { useState } from 'react';
import './style.css';

function App() {
  let [numero, setNumero] = useState(0);
  let [timer, setTimer] = useState(null);

  const vai = () =>{

    if (timer !== null) {
      clearInterval(timer);
      setTimer(null);
    }else{
      const newTimer = setInterval(()=>{
        setNumero(numero += 0.1);
      },100)
      setTimer(newTimer);
    }
    

  }

  const limpar = () =>{
    if (timer !== null) {
      clearInterval(timer);
    }
    setTimer(null);
    setNumero(0);
  }

  return (
    <div className='container'>
      <img src ={require('./assets/cronometro.png')} className='img'/>
      <a className='timer'>{numero.toFixed(1)}</a>
      <div className='areaBtn'>
        <a className='botao' onClick={vai}>{timer !== null ? 'PARAR' : 'VAI'}</a>
        <a className='botao' onClick={limpar}>ZERAR</a>
      </div>
    </div>
  );
}

export default App;
