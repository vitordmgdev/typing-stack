import styled from "styled-components";

const StyledTypingDisplay = styled.div`
    display: flex;
    width: calc(100% - 60px);
    max-width: 1080px;
    height: fit-content;
    border: 1px solid red;
    font-size: 1.2em;
    span{
        user-select: none;
    }
    span.textToWrite{
        color: #646669;
    }    
`

export default StyledTypingDisplay;