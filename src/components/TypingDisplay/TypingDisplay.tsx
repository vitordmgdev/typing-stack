import { useRef, useState, useEffect } from "react";
import StyledTypingDisplay from "./StyledTypingDisplay";

const TypingDisplay = () => {
    const textArr = ["cadeira", "maçã", "lápis", "sol", "pássaro","abacaxi"];
    const textTypeable = textArr.join(" ").split("");
    
    const [ userType, setUserType ] = useState<string>("");
    const [ lastUserType, setLastUserType ] = useState<string>("");
    const [ eventKeyCode, setEventKeyCode ] = useState<number>(0);
    const [ currentDigit, setCurrentDigit ] = useState<number>(0);
    const childrenRef = useRef<HTMLDivElement>(null);
    

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
        
        console.log(userType)
        setUserType("")
    }, [userType])

    return(
        <>
            <StyledTypingDisplay ref={childrenRef}>
                    {
                        textTypeable.map((letter, index) => {
                            if(letter === " "){
                                return <span className="spaceKey null" key={index}>{letter}</span>
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