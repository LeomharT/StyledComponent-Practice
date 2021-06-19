import React, { Component } from 'react';
import { Steps } from 'antd';

export default class NavBar extends Component<any>
{
    render()
    {
        const { Step } = Steps;

        return (
            <div style={{ width: "700px" }} >
                <Steps current={this.props.current}>
                    {
                        this.props.steps.map((item: any, index: number) =>
                        {
                            return (
                                <Step key={index} title={item.title} />
                            );
                        })
                    }
                </Steps>
            </div>
        );
    }
}
