import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import
{
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AtlaskitForm from './components/Atlaskit/AtlaskitForm';
import HeaderBar from './components/HeaderBar';
import styled from 'styled-components';
import TodoList from './components/TodoList/TodoList';


const Container = styled.div`
width:100vw;
background:#f8f9ff;
display:flex;
justify-content: center;
align-items: center;
`;





ReactDOM.render(
    <Router>
        <HeaderBar />
        <Container>
            <Switch>
                <Route path="/Atlaskit">
                    <AtlaskitForm />
                </Route>
                <Route path="/TodoList">
                    <TodoList />
                </Route>
            </Switch>
        </Container>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
