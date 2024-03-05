
import { useRef, useState, useEffect } from "react";
import StyledTypingDisplay from "./StyledTypingDisplay";
import { isCorrectKey } from "../../utils/verifyTyping/verifyTyping";
const TypingDisplay = () => {

    /* 
        1 wordsArr -> Array de palavras.
        2 joinArray -> Todas as palavras em forma para escrever usando o método join.
        3 [ userDigit, setUserDigit ] -> Armazena 1 letra digitada pelo usuário. 
        4 [ currentLetter, setCurrentLetter ] -> Armazena a letra atual do array.
    */
    
    const textArr = ["cadeira", "maçã", "lápis", "sol", "pássaro"];
    const textTypeable = textArr.join(" ").split("");
    
    const [ userType, setUserType ] = useState<string>("");
    const [ eventKeyCode, setEventKeyCode ] = useState<number>(0);
    const [ currentDigit, setCurrentDigit ] = useState<number>(0);
    const [ deleteDigit, setDeleteDigit ] = useState<number>(1);
    const childrenRef = useRef<HTMLDivElement>(null)
    


    useEffect(() => {
        const detectKeyDown = (e: KeyboardEvent) => {
            setUserType(e.key)
            setEventKeyCode(e.keyCode)
        }
        document.addEventListener('keydown', detectKeyDown)
        return () => {
            document.removeEventListener('keydown', detectKeyDown)
        }
    }, []);

    useEffect(() => {
        if(isCorrectKey(userType, eventKeyCode)){ 
            if(userType === textTypeable[currentDigit]){;
                console.log(textTypeable[currentDigit]);
                setCurrentDigit(currentDigit + 1);
                childrenRef.current?.children[currentDigit].classList.replace("nullKey","rightKey");
                setEventKeyCode(0);
                setUserType("");
            }else{
                setCurrentDigit(currentDigit + 1);
                childrenRef.current?.children[currentDigit].classList.replace("nullKey","wrongKey");
                setEventKeyCode(0);
                setUserType("");
            }
        }
    }, [userType])

    return(
        <>
            <StyledTypingDisplay ref={childrenRef}>
                    {
                        textTypeable.map((letter, index) => {
                            if(letter === " "){
                                return <span className="spaceKey" key={index}>{letter}</span>
                            }else{
                                return <span className="nullKey" key={index}>{letter}</span>
                            }
                        })
                    }
            </StyledTypingDisplay>
        </>
    )
}

export default TypingDisplay;