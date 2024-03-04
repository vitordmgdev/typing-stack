import TypingDisplay from "../TypingDisplay/TypingDisplay"
import TypingOptions from "../TypingOptions/TypingOptions"
import styled from "styled-components"

const StyledTypingContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #242424;
`

const TypingContainer = () => {
    
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