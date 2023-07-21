
import './App.css';
import Justice from './img/justice.webp';
import Changes from './img/bieber-changes.webp';
import Purpose from './img/justin-bieber-purpose.webp';
import Believe from './img/believe.jpg';


function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='menu'>
          <h1>Bieber Fever</h1>

          <div className='item-menu'>
            <a href='#'>Login</a>
          </div>
        </div>
      </div>

      <div className='conteudo'>
        <div className='txt'>
          <img src={Justice} alt='capa justice'></img>
          <h2>Justice 2021</h2>
          <p>O último álbum de Bieber lançado até então foi um dos mais aclamados pelo público.</p>
        </div>
        <div className='txt'>
        <img src={Changes} alt='capa changes'></img>
          <h2>Changes 2020</h2>
          <p>Changes é o quinto álbum de estúdio do cantor canadense Justin Bieber.</p>
        </div>
        <div className='txt'>
        <img src={Purpose} alt='capa purpose'></img>
          <h2>Purpose 2015</h2>
          <p>Purpose é o quarto álbum de estúdio do cantor canadense Justin Bieber.</p>
        </div>
        <div className='txt'>
        <img src={Believe} alt='capa believe'></img>
          <h2>Believe 2012</h2>
          <p>Believe é o terceiro álbum de estúdio lançado pelo cantor canadense Justin Bieber em 19 de junho de 2012.</p>
        </div>
      </div>


        


        
    </div>
  );
}

export default App;
