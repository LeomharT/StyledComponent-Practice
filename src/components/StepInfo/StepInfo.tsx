import { MyStepInfo } from '../../redux/store';
import React, { Component } from 'react';
import { Button, message, Input, Select } from 'antd';
import NavBar from './NavBar';

interface isState
{
    result: any;
    current: number;
    steps: any;
    gender: any;
}
const { Option } = Select;
export default class StepInfo extends Component<any, isState>
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            result: MyStepInfo.getState(),
            current: 0,
            steps: [
                {
                    title: 'Your Name',
                    content: 'First-content',
                },
                {
                    title: 'Your Gender',
                    content: 'Second-content',
                },
                {
                    title: 'Result',
                    content: 'Last-content',
                },
            ],
            gender: ""
        };
    }
    NextStep = () =>
    {
        if (this.state.current === 2)
        {
            message.success("OK");
            return;
        }


        switch (this.state.current)
        {
            case 0: {
                let name = document.getElementById("name") as HTMLInputElement;
                if (name.value !== "")
                {
                    MyStepInfo.dispatch({
                        type: "SumbitInfo",
                        data: { name: "name", value: name.value }
                    });
                    console.log(name.value);
                    break;
                }
                else
                {
                    message.error("请输入");
                    return;
                }
            }
            case 1: {
                if (this.state.gender === "")
                {
                    message.error("请选者一个性别");
                    return;
                };
                MyStepInfo.dispatch({
                    type: "SumbitInfo",
                    data: { name: "gender", value: this.state.gender }
                });
                break;
            }
            default: break;
        }

        this.setState({
            current: this.state.current + 1
        });
    };
    PreviousStep = () =>
    {
        if (this.state.current === 0) return;
        this.setState({
            current: this.state.current - 1
        });
    };
    onChange = (e: any) =>
    {
        this.setState({
            gender: e
        });
    };
    render()
    {
        return (
            <div>
                <NavBar current={this.state.current} steps={this.state.steps} />
                {
                    this.state.current === 0 ? <Input id="name" placeholder="Enter Your Name"></Input> : null
                }
                {
                    this.state.current === 1 ?
                        <div>
                            <Select placeholder="Chose Your Gender" id="gender" onChange={this.onChange}>
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                            </Select>
                        </div>
                        : null
                }
                {
                    this.state.current === 2 ?
                        <div>
                            Your Name Is:{MyStepInfo.getState().get("name")}
                            <br />
                            Your Gender Is:{MyStepInfo.getState().get("gender")}
                        </div>
                        : null
                }
                <Button style={{ marginRight: "20px" }} type="primary" onClick={() => { this.NextStep(); }}>Next</Button>
                {
                    this.state.current ? <Button onClick={() => { this.PreviousStep(); }}>Previous</Button> : null
                }
            </div>
        );
    }
}
