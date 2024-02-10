import { StyledTypingPage } from "./StyledTypingPage";
import api from "../../Api";
import { useEffect } from "react";

export const TypingPage = () => {

    useEffect(() => {
        api.get('teste').then(res =>{
            console.log(res.data)
        })
    }, [])

    
    return(
        <>
            <StyledTypingPage>
                
            </StyledTypingPage>
                <button>TESTE</button>
                
            
        </>
    )
}