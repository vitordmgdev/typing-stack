import { useState, useEffect } from "react";
import StyledTypingDisplay from "./StyledTypingDisplay";
import StyledTypingWord from "../TypingWord/StyledTypingWord.tsx";
import StyledRenderTyping from "../RenderTyping/StyledRenderTyping";
import WrittenWords from "../WrittenWords/StyledWrittenWords.ts";
import { v4 as uuidv4} from 'uuid';

const TypingDisplay = () => {
    /* const [ valuesArray, setValuesArray] = useState<any>(['palavra1','palavra2','palavra3','palavra4','palavra5']); */ //palavritas a serem escritas.
    const valuesArray = ['palavra1','palavra2','palavra3','palavra4','palavra5']

    const [ inputValue, setInputValue ] = useState<string>(""); //Input de digitação, e é enviada para o renderTyping para fazer a verificação.

    const [ word, setWord ] = useState<string>(valuesArray[0]); //Palavra atual a ser digitada.
    const [ wordIndex, setWordIndex ] = useState(0) //Index da palavra que  está sendo digitada

    const [ letterIndex, setLetterIndex ] = useState<number>(0); //Index da letra da palavra a ser digitada.
    const [ lettersArray, setLettersArray ] = useState<JSX.Element[]>([]); //Array de letras.
    /* const [ writtenWords, setWrittenWords ] = useState([] as JSX.Element[]) */

    useEffect(() => {
        
        const renderLetters = (letter:string, isTrueToRender:boolean) => { //Verifica e renderiza
            const uuid = uuidv4()
            if(isTrueToRender){
                return <span className="correctLetter" key={uuid}>{letter}</span>
            }else{
                return <span className="wrongLetter" key={uuid}>{letter}</span>
            }
        }

        if(letterIndex === word.length && inputValue === " "){
            setWordIndex(prevWordIndex => prevWordIndex + 1);
            setWord(valuesArray[wordIndex + 1]); // Defina a próxima palavra no array
            setInputValue("");
            setLetterIndex(0);
        
        }else{
            if(inputValue !== undefined && inputValue !== "" && inputValue !== null){
                if(inputValue === word[letterIndex]){
                    setLettersArray(prevLettersArray => [...prevLettersArray, renderLetters(inputValue, true)]);
                    setInputValue("");
                    const newArray = [lettersArray]
                    console.log(newArray)
                }else{
                    setLettersArray(prevLettersArray => [...prevLettersArray, renderLetters(word[letterIndex], false)]);
                    setInputValue("");
                }
            }
        }
        if(letterIndex < word.length && inputValue !== "" && inputValue !== " "){
            setLetterIndex(prevLetterIndex => prevLetterIndex + 1);
            console.log(`${letterIndex}`);
        }
    }, [inputValue]);

        
    return(
        <>
            <StyledTypingDisplay>
                <WrittenWords>
                    {/* {writtenWords.map((letter) => {
                        return letter
                    })} */}
                </WrittenWords>
                <StyledTypingWord>{/* Input de Digitação */}
                    <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} maxLength={1}/> 
                    <StyledRenderTyping>
                        {lettersArray.map((letter) => {
                            return letter
                        })}
                    </StyledRenderTyping>
                    <span className="textToWrite">{valuesArray[wordIndex]}</span>{/* Palavra atual */}

                </StyledTypingWord>
                
                <div className="wordsToWrite">{/* Palavras a serem escritas */}
                    
                </div>
            </StyledTypingDisplay>
        </>
    )
}

export default TypingDisplay;