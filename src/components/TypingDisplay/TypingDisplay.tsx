import { useRef, useState, useEffect } from "react";
import StyledTypingDisplay from "./StyledTypingDisplay";
import { isCorrectKey } from "../../utils/verifyTyping/verifyTyping";
import styled from "styled-components";
import './textCursor.scss'

interface CursorProps{
    positionright?: number | any;
    positiontop?: number | any;
}

const Cursor = styled.div<CursorProps>`
    position: absolute;
    left: calc(${(props) => props.positionright}px);
    top: calc(${(props) => props.positiontop}px - 64px);
    width: 1px;
    height: 1em;
    border: 1px solid white;
    transition: .3s;
    z-index: 2;
    background-color: #bdbdbd;
    mix-blend-mode: difference;
    
`   


const TypingDisplay = () => {

    /* 
        1 wordsArr -> Array de palavras.
        2 joinArray -> Todas as palavras em forma para escrever usando o método join.
        3 [ userDigit, setUserDigit ] -> Armazena 1 letra digitada pelo usuário. 
        4 [ currentLetter, setCurrentLetter ] -> Armazena a letra atual do array.
    */
    
    const textArr = ["cadeira", "maçã", "lápis", "sol", "pássaro","abacaxi"];
    const textTypeable = textArr.join(" ").split("");
    
    const [ userType, setUserType ] = useState<string>("");
    const [ eventKeyCode, setEventKeyCode ] = useState<number>(0);
    const [ currentDigit, setCurrentDigit ] = useState<number>(0);
    const childrenRef = useRef<HTMLDivElement>(null);

    const [childrenPositionRight, setChildrenPositionRight] = useState<any>(30)
    const [childrenPositionTop, setChildrenPositionTop] = useState<any>(null)

     

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
        if(isCorrectKey(userType, eventKeyCode) && currentDigit < textTypeable.length){ 
            
            if(userType === textTypeable[currentDigit]){;
                setCurrentDigit(currentDigit + 1);
                childrenRef.current?.children[currentDigit].classList.replace("nullKey","rightKey");
                setEventKeyCode(0);
                setUserType("");

                setChildrenPositionRight(childrenRef.current?.children[currentDigit].getBoundingClientRect().right)
                setChildrenPositionTop(childrenRef.current?.children[currentDigit].getBoundingClientRect().top)
            }else{
                setCurrentDigit(currentDigit + 1);
                childrenRef.current?.children[currentDigit].classList.replace("nullKey","wrongKey");
                setEventKeyCode(0);
                setUserType("");

                setChildrenPositionRight(childrenRef.current?.children[currentDigit].getBoundingClientRect().right)
                setChildrenPositionTop(childrenRef.current?.children[currentDigit].getBoundingClientRect().top)
            }
        }
    }, [userType])

    return(
        <>
            <Cursor positionright={childrenPositionRight} positiontop={childrenPositionTop}></Cursor>
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