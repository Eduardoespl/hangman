import Welcome from "./components/Welcome";
import Hangman from "./components/Hangman";

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'lime', 'mango'];
const animals = ['alligator', 'alpaca', 'ant', 'anteater', 'antelope', 'ape', 'armadillo', 'donkey'];
const countries = ['mexico', 'canada', 'argentina', 'brazil', 'chile', 'colombia', 'peru', 'uruguay', 'venezuela'];
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'black', 'white', 'brown'];
const shapes = ['circle', 'square', 'triangle', 'rectangle', 'pentagon', 'hexagon', 'heptagon'];

const categories = [words, animals, countries, colors, shapes];
const randomCategory = categories[Math.floor(Math.random() * categories.length)];

function App() {
  return (
    <div className="App">
      <Welcome />
      <Hangman words={randomCategory} />
    </div>
  );
}

export default App;