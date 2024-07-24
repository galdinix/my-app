import logo from './logo.svg';
import './App.css';


//Declaração de 5 diretivas com diferentes valores primitivos 
let numerica = 100;
let texto = "havia uma pedra no meio do caminho";
const Isboolean = false;
let vazia = '';
let nulo = null;

//Declaração de um objeto
const pessoa = {
  nome: 'José',
  idade: 30,
  municipio: 'Casimiro de Abreu',
  saudacao: function(){
    let mensagem = `Olá me chamo ${this.nome} tenho ${this.idade} anos e moro em ${this.municipio}`;
    return mensagem;
  }
}
console.log(pessoa.saudacao());


//Declaração de um array
let arrayNumerico = [1,2,3,4,5];
let arrayTexto = ['a','b','c','d'];
let arrayBoolean = [true,false,true,false];
let carros = ['Gol', 'Uno', 'Palio', 'Fusca', 'Corsa'];

//adicionar um elemento no final do array
arrayNumerico.push(6);

//remover o último elemento do array
arrayNumerico.pop();

console.log(arrayNumerico);

//remover elemento pelo seu indice (index)
//array.splice(indice, quantidade a remover)
carros.splice(2, 1);
console.log(carros);

//encontrar o indice de um elemento
const indexRemover = carros.findIndex((nome) => nome === 'Fusca')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
