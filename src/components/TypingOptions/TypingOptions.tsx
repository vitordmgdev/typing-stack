import styled from "styled-components";
import { FaGear } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Button = styled.button`
    &:hover {
        background-color: #303030;
        color: #b1b1b1;
    }
    all: unset;
    position: relative;
    height: 35px;
    padding: 0 15px;
    background-color: #242424;
    color: #686868;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: .3s;
    border: 1px solid #242424;
    svg {
        font-size: .8em;
        transform: translateY(1px);
    }
    span {
        font-size: .9em;
    }
`;

const StyledTypingOptions = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: calc(100% - 60px);
    max-width: 1080px;
    background-color: #242424;
    top: 30px;
    border: 1px solid #242424;
    transition: .3s;
    gap: 5px;
`;

interface TooltipInterface{
    TooltipText?: string;
    isActive?: string;
}

const Tooltip = ({TooltipText, isActive}:TooltipInterface) => {
   
    interface StyledTooltipInterface{
        isActive?: string;
    }

    const StyledTooltip = styled.div<StyledTooltipInterface>`
        position: absolute;
        background-color: #303030;
        color: #b6b6b6;
        padding: 5px 10px;
        transform: translate(0, calc(-100% - 5px));
        cursor: default;
        top: 0;
        left: 0;
        font-size: 1em;
        border-radius: 3px;
        visibility: ${props => props.isActive == "true" ? "visible" : "hidden"};
        opacity: ${props => props.isActive == "true" ? "100%" : "0%"};
    `
    return(
        <StyledTooltip isActive={isActive}>
            <span>{TooltipText}</span>
        </StyledTooltip>
    )
}

const TypingOptions = () => {
    const [ configTooltip, setConfigTooltip ] = useState(false);

    return (
        <>
            <StyledTypingOptions>
                <Link to={"/config"}>
                    <Button onMouseEnter={() => setConfigTooltip(true)} onMouseLeave={() => setConfigTooltip(false)}>
                        <Tooltip TooltipText={"Tema, Tempo"} isActive={configTooltip.toString()}  />
                        <FaGear /><span>Configurações</span>
                    </Button>
                </Link>
                
            </StyledTypingOptions>
        </>
    );
};

export default TypingOptions;