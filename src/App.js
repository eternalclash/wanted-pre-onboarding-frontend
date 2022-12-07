import LoginPage from "./pages/LoginPage";
import TodoListPage from "./pages/TodoListPage";
import {  Route,Routes} from "react-router-dom";
import styled from "styled-components";


function App() {

  return (
    <Main>
     
    <Routes>
        <Route exact path="/"  element={<LoginPage/>} />
        <Route exact path="/todo" element={<TodoListPage/>} />
    </Routes>     
   
   
   </Main>
  );
}

const Main = styled.div`
  display:flex;
  min-height:100vh;
  justify-content:center;
  align-items:center;

`
export default App;
