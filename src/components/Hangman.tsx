import { useState, useEffect } from "react";
import "../css/main.css"

interface HangmanProps {
    words: string[];
}

const Hangman = ({ words }: HangmanProps) => {
    const [selectedWord, setSelectedWord] = useState(words[0]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [currentTime, setCurrentTime] = useState<Date | null>(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [wordGuessed, setWordGuessed] = useState(false);

    useEffect(() => {
        let timer: number | undefined;
        if (gameStarted && !wordGuessed) {
            timer = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [gameStarted, wordGuessed]);


    const showGame = () => {
        const container = document.querySelector('.hide');
        const button = document.querySelector('.button');
        //cambiar el display del contenedor a flex
        container?.classList.toggle('show');
        button?.classList.toggle('hide');
        setGameStarted(true);
        setStartTime(new Date());
        setCurrentTime(new Date());
    }

    const displayWord = selectedWord.split('').map((letter) => {
        console.log("selectedWord", selectedWord);
        if (guessedLetters.includes(letter)) {
            console.log("guessedLetter", guessedLetters);
            return letter;
        } else {
            return "_";
        }
    });

    const handleGuess = (letter: string) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (!selectedWord.includes(letter)) {
                setErrorCount(errorCount + 1);
                console.log("setErrorCount", errorCount);
            }
        }
    };

    const restartGame = () => {
        const newWordIndex = Math.floor(Math.random() * words.length);
        const newWord = words[newWordIndex];
        setSelectedWord(newWord);
        setGuessedLetters([]);
        setErrorCount(0);
        setWordGuessed(false);
        setGameStarted(true);
        setStartTime(new Date());
        setCurrentTime(new Date());
    };

    useEffect(() => {
        if (displayWord.join('') === selectedWord) {
            setWordGuessed(true);
        }else {
            setWordGuessed(false);
        }
    }, [displayWord, selectedWord]);

    const elapsedTime = startTime && currentTime ? Math.floor((currentTime.getTime() - startTime.getTime()) / 1000) : 0;

    return (
        <div className="container">
            <button onClick={showGame} className="button"> Start game </button>
            <div className="hide">
                <p>{displayWord.join(' ')}</p>
                <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
                {(displayWord.join('')=== selectedWord || errorCount > 5) && (
                    <button onClick={() => {
                        restartGame();
                        setSelectedWord(words[Math.floor(Math.random() * words.length)]);
                    }}>Select New Word</button>
                )}
                <p> Cantidad de errores {errorCount}</p>
                {displayWord.join('') === selectedWord && (
                    <p>You won this round!</p>
                )}
                <p>Time elapsed: {elapsedTime} seconds</p>
            </div>
        </div>
    );
}

export default Hangman;