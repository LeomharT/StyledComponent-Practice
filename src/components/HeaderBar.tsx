import React, { useEffect } from 'react';
import Button from '@atlaskit/button';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { store } from '../redux/store';
const MyHeaderBar = styled.div`
width:700px;
height:100px;
border: 1px solid lightgray;
margin:0 auto;
line-height:100px;
margin-bottom:20px;
`;
export default function HeaderBar(props: any)
{
    const history = useHistory();

    let state = "";

    const GetState = () =>
    {
        state = store.getState();
        let p = document.getElementById("p") as HTMLSpanElement;
        p.innerText = state;
    };

    useEffect(() =>
    {
        GetState();
        store.subscribe(GetState);
    });

    return (
        <MyHeaderBar>
            <span id="p">{state}</span>
            <Button onClick={() => { history.push("/"); }}>ToHome</Button>
            <Button onClick={() => { history.push("/Atlaskit"); }}>ToAtlaskit</Button>
            <Button onClick={() => { history.push("/TodoList"); }}>ToTodoList</Button>
        </MyHeaderBar>
    );
}
