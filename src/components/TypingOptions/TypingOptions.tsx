import { RiTimerFlashFill } from "react-icons/ri";
import { IoIosColorPalette } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { AiFillSound  } from "react-icons/ai";
import { FaBookBookmark } from "react-icons/fa6";
import styled from "styled-components";

const Button = styled.button`
    &:hover{
        background-color: #363636;
        color: #b1b1b1;
    }
    all: unset;
    height: 35px;
    padding: 0 10px;
    background-color: #303030;
    color: #535353;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: .3s;
    border: 1px solid #303030;
    svg{
        font-size: .9em;
        transform: translateY(1px);
    }
    span{
        font-size: .9em;
    }
        
    
`

const StyledTypingOptions = styled.div`
    &:hover{
        border: 1px solid #575757;
    }
    position: absolute;
    display: flex;
    width: calc(100% - 60px);
    max-width: 1080px;
    min-width: fit-content;
    background-color: #303030;
    border-radius: 5px;
    overflow: hidden;
    bottom: 0px;
    transform: translateY(-30px);
    border: 1px solid #303030;
    transition: .3s;
    padding: 5px;
    gap: 4px;
    cursor: pointer;
`

const TypingOptions = () => {
    return(
        <StyledTypingOptions>
            <Button>
                <RiTimerFlashFill />
                <span>tempo</span>
            </Button>
            <Button>
                <FaBookBookmark />
                <span>palavras</span>
            </Button>
            <Button>
                <FaGear />
                <span>configurações</span>
            </Button>
            
        </StyledTypingOptions>
    )
}

export default TypingOptions;