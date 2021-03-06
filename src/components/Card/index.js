import { useState } from 'react';
import Buttton from '../Buttton';


const Card = () => {
	
	const [valor, setValor] = useState(0)
	function Adicionar() {
		setValor(valor + 1)
	}
	
	function Remover() {
		setValor(valor - 1)
	}
	
	return(
	   <div className="card">
       <div className="card-header">
         Aqui vai um Card
       </div>
       <div className="card-body">
          <button
             className="btn btn-success"
             onClick={Adicionar}          
          >
             Adicionar
          </button>
          <button
             className="btn btn-danger"
             onClick={Remover}          
          >
             Remover
          </button>
          <p>{valor}</p>
          </div>
       </div>
	)
}

export default Card;