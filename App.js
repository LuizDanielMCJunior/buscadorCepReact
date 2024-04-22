import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import'./style.css';
import api from './services/api.js';
function App() {

  const [input, setInput]= useState('');
  const [cep, setCep] = useState({});

  async function handleS(){
   if (input ===''){
    alert('preencha alguum CEP');
    return;
   }

      
    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
      }
    catch{
      alert('ops');
      setInput("");
    }
  }

  return (
    <div className="app">
      <h1 className="tittle">TESTE CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..."
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button className="search" onClick={handleS}>
          <FiSearch size={25} color="#fff"/>
        </button>
        </div>
       {Object.keys(cep).length> 0 && (
         <main className='main'>
         <h2>{cep.cep}</h2>

         <span>{cep.logradouro}</span>
         <span>{cep.complemento}</span>
         <span>{cep.bairro}</span>
         <span>{cep.localidade} - {cep.uf}</span>
 
       </main>
       )}
      
     </div>
  );
}

export default App;
