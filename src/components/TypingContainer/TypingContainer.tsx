import TypingDisplay from "../TypingDisplay/TypingDisplay"
import TypingOptions from "../TypingOptions/TypingOptions"
import styled from "styled-components"
import { useCountDown, useCountUp } from "../../utils/useCount/useCount"




const TypingContainer = () => {
    /* const { secondsLeft, startCountDown } = useCountDown(); */
    const StyledTypingContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 40vh;
    max-height: 750px;
    background-color: #242424;
    gap: 30px;
    width: calc(100vw - 30px);
    border-radius: 5px;
    border: 1px solid #303030;
`
    return(
        <>
            <StyledTypingContainer>
                <TypingOptions />
                <TypingDisplay />
            </StyledTypingContainer>
        </>
    )
}

export default TypingContainer;