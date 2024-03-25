import styled from "styled-components";

const PageNotFind404 = () => {
    const StyledPageNotFind404 = styled.div`
        background-color: #242424;
        border-radius: 5px;
        border: 1px solid #303030;
        width: calc(100vw - 30px);
        height: calc(100vh - 115px);
        display: flex;
        align-items: center;
        justify-content: center;
        h1{
            color: #fff;
        }
    `

    return(
        <StyledPageNotFind404>
            <h1>Page not find - 404</h1>
        </StyledPageNotFind404>
    )
}

export default PageNotFind404;