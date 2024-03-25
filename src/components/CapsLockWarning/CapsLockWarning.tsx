import styled from "styled-components";

const CapsLockWarning = styled.div`
    width: fit-content;
    height: fit-content;
    background-color: #e5ff51;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    svg{
        font-size: .9em;
        transform: translateY(1px);
    }
`

export default CapsLockWarning;