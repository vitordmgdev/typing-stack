import { useEffect } from 'react';

export const TypingTextFunction = () => {

    useEffect(() => {
        const handleKeyPress = (e:any) => {
           
        };  

        document.addEventListener('keypress', handleKeyPress);

        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        }
    }, []);

    

    return(
        <>
            

            
        </>
    )
}