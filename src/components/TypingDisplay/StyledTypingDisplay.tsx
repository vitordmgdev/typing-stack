import styled from "styled-components";

const StyledTypingDisplay = styled.div`
    width: calc(100% - 60px);
    max-width: 1080px;
    height: fit-content;
    
    font-size: 1.2em;

    input{
        width: 15px;
    }

    span{
        user-select: none;
        &.nullKey{
            color: #646669;
        }
        &.rightKey{
            color: #bdbdbd;
        }
        &.wrongKey{
            color: #ff7878;
        }
    }
`

export default StyledTypingDisplay;