import React, { Component } from 'react';
import styled from 'styled-components';
import { GetTodoList } from '../../redux/store';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import { Y200 } from '@atlaskit/theme/colors';
import Flag from '@atlaskit/flag';
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';

const MyForm = styled.div`
width:700px;
height:750px;
box-shadow: 0 2px 10px 0 rgb(57 106 255 / 5%);
box-sizing: border-box;
background:white;
padding:10px 10px;
`;

const ItemRow = styled.div`
width: 100%;
margin-bottom: 20px;
`;

// 泛型约定组件状态
interface isState
{
    NeedTodo: any;
}

export default class TodoList extends Component<any, isState>
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            NeedTodo: GetTodoList.getState(),
        };
        console.log(this.state.NeedTodo.list);
        GetTodoList.subscribe(this.storeChange);
    }

    componentDidMount()
    {
        // fetch("http://localhost/PHP_FinalExam/GetToDolist.php")
        //     .then(response => response.json())
        //     .then((data) =>
        //     {
        //         GetTodoList.dispatch({
        //             type: "getDataFromServer",
        //             data
        //         });
        //         console.log(data);
        //     })
        //     .catch(e => console.error(e));
        GetTodoList.dispatch({
            type: "GetData"
        });
    }

    componentWillUnmount = () =>
    {
        this.setState = () =>
        {
            return;
        };
    };

    storeChange = () =>
    {
        this.setState({
            NeedTodo: GetTodoList.getState()
        });
    };

    changeInput = (e: any) =>
    {
        let value = e.target.value;
        GetTodoList.dispatch({
            type: "changeInput",
            value
        });
    };

    addItem = () =>
    {
        GetTodoList.dispatch({
            type: "addItem",
        });
        this.storeChange();
    };

    removeItem = (index: any) =>
    {
        GetTodoList.dispatch({
            type: "removeItem",
            index
        });
        this.storeChange();
    };
    render()
    {
        return (
            <MyForm>
                <Textfield autoComplete='off' onChange={this.changeInput} placeholder={this.state.NeedTodo.inputValue} />
                <Button onClick={this.addItem}>Add ToDo</Button>
                {
                    this.state.NeedTodo.list.map((item: any, index: any) =>
                    {
                        return (
                            <ItemRow key={index}>
                                <Flag
                                    appearance="warning"
                                    icon={<WarningIcon label='warning' secondaryColor={Y200} />}
                                    id={index}
                                    key={index}
                                    title={item}
                                    description="You have To Do OK?"
                                    actions={[
                                        {
                                            content: 'Just Do It',
                                            onClick: () =>
                                            {
                                                this.removeItem(index);
                                            }
                                        },
                                    ]}
                                />
                            </ItemRow>
                        );
                    })
                }
            </MyForm >
        );
    }
}
