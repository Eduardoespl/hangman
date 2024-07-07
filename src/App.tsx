import Welcome from "./components/Welcome";
import Hangman from "./components/Hangman";

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'lime', 'mango'];
const animals = ['alligator', 'alpaca', 'ant', 'anteater', 'antelope', 'ape', 'armadillo', 'donkey'];
const countries = ['mexico', 'canada', 'argentina', 'brazil', 'chile', 'colombia', 'peru', 'uruguay', 'venezuela'];
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'black', 'white', 'brown'];
const shapes = ['circle', 'square', 'triangle', 'rectangle', 'pentagon', 'hexagon', 'heptagon'];
const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september'];
const sport = ['flag', 'soccer', 'baseball', 'basketball'];

const categoryNames = ['words', 'animals', 'countries', 'colors', 'shapes', 'months', 'sport'];
const categories = [words, animals, countries, colors, shapes, months,sport];
const randomIndex = Math.floor(Math.random() * categories.length);
const randomCategory = categories[randomIndex];
const selectedCategoryName = categoryNames[randomIndex];

function App() {
  return (
    <div className="App">
      <Welcome category = {selectedCategoryName}/>
      <Hangman words={randomCategory} />
    </div>
  );
}

export default App;