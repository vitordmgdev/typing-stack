import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { TypingPage } from "./pages/TypingPage/TypingPage";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFind404 from "./pages/404/PageNotFind404";

const AppStyled = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`


function App() {

  return (
    <>
      
      <AppStyled>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={[<Header />,<TypingPage />]}/>
            <Route path="*" element={[<Header />,<PageNotFind404 />]}/>
          </Routes>
        </BrowserRouter>
      </AppStyled>
      

      
      
    </>
  )
}

export default App
