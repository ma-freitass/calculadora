import { useState } from "react";
import "./style/style.scss"

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();
  //evento é para pegar as ações ou mudanças, nesse caso dentro do input
  //target - alvo, o que eu quero por isso será e.target que será o valor
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <main>
      <h1>Calculadora</h1>
      {/*onChange - evento de mudança, a cada alteraçao no input ele será acionado, ele captura as mudanças*/}
      <input onChange={capturandoPrimeiroValor} />
      <input onChange={capturandoSegundoValor} />
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      <button onClick={multiplicacao}>*</button>
      <button onClick={divisao}>/</button>
      <h3>{resultado}</h3>
    </main>
  );
}



