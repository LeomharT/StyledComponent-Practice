import React, { Component, Fragment } from 'react';
import { store, MyDepartment } from "../../redux/store";
import styled from 'styled-components';
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import Form, { Field, FormFooter, HelperMessage } from '@atlaskit/form';
import Select from '@atlaskit/select';
import { RadioGroup } from '@atlaskit/radio';
import TextArea from '@atlaskit/textarea';
import { Checkbox } from '@atlaskit/checkbox';


const MyForm = styled.div`
width:700px;
height:750px;
box-shadow: 0 2px 10px 0 rgb(57 106 255 / 5%);
box-sizing: border-box;
background:white;
padding:10px 10px;
`;

interface isState
{
    Department: any;
}
class AtlaskitForm extends Component<any, isState>
{

    constructor(props: any)
    {
        super(props);
        // this.GetDepartment();

        this.state = {
            Department: MyDepartment.getState()
        };
        MyDepartment.subscribe(this.storeChange);
    }

    storeChange = () =>
    {
        this.setState({
            Department: MyDepartment.getState()
        });
    };

    componentDidMount()
    {
        MyDepartment.dispatch({
            type: "GetDepartment"
        });
    }

    componentWillUnmount = () =>
    {
        this.setState = () =>
        {
            return;
        };
    };

    render()
    {

        let HelpMes = "This Message Show at Bottom";

        const Commit = async () =>
        {
            const data = new FormData(document.getElementById("UserInfo") as HTMLFormElement);
            try
            {
                let response = await fetch('http://localhost/PHP_FinalExam/Main.php',
                    {
                        method: "POST",
                        body: data
                    });
                let result = await response.json();
                console.log(result);
            }
            catch (e)
            {
                console.error(e);
            }
        };

        const Increase = () =>
        {
            store.dispatch(
                {
                    type: "increment"
                }
            );
        };

        const GetValue = () =>
        {
            let span = document.getElementById("value") as HTMLSpanElement;
            span.innerText = store.getState();
        };

        setTimeout(() =>
        {
            GetValue();
            store.subscribe(GetValue);
            MyDepartment.subscribe(GetValue);
        }, 200);

        return (
            <MyForm>
                <Form< { username: string; password: string, remember: boolean; }>
                    onSubmit={(formState: unknown) =>
                    {
                        console.log(formState);
                    }}
                >
                    {({ fromProps }: any) =>
                    (
                        <form {...fromProps} id="UserInfo">
                            <Field label="UserName" name="UserName">
                                {({ fieldProps }: any) => (
                                    <Fragment>
                                        <Textfield autoComplete="off" name="UserName" placeholder="Enter Your Name Here" />
                                        <HelperMessage>
                                            {HelpMes}
                                        </HelperMessage>
                                    </Fragment>
                                )}
                            </Field>
                            <Field label="Department" name="Department" >
                                {({ fieldProps }: any) => (
                                    <Fragment>
                                        <Select {...fieldProps}
                                            name="Department"
                                            options={
                                                this.state.Department
                                            }>

                                        </Select>
                                        <HelperMessage>
                                            {HelpMes}
                                        </HelperMessage>
                                    </Fragment>
                                )}
                            </Field>
                            <Field label="Gender" name="Gender">
                                {({ fieldProps }: any) => (
                                    <Fragment>
                                        <RadioGroup {...fieldProps}
                                            name="Gender"
                                            options={
                                                [{ value: "man", label: "man" }, { value: "woman", label: "woman" }]
                                            }
                                        >
                                        </RadioGroup>
                                        <HelperMessage>
                                            Chose Your Gender
                                        </HelperMessage>
                                    </Fragment>
                                )}
                            </Field>
                            <Field label="Introduce" name="Introduce">
                                {({ fieldProps }: any) => (
                                    <Fragment>
                                        <TextArea name="Introduce" resize="smart" />
                                        <HelperMessage>
                                            Introduce Youself
                                        </HelperMessage>
                                    </Fragment>
                                )}
                            </Field>
                            <Field label="Specialty" name="Specialty">
                                {({ fieldProps }: any) => (
                                    <Fragment >
                                        <Checkbox
                                            value="jog"
                                            label="jog"
                                            name="Specialty[]"
                                        />
                                        <Checkbox
                                            value="sing"
                                            label="sing"
                                            name="Specialty[]"
                                        />
                                        <Checkbox
                                            value="painting"
                                            label="painting"
                                            name="Specialty[]"
                                        />
                                        <Checkbox
                                            value="swimming"
                                            label="swimming"
                                            name="Specialty[]"
                                        />
                                        <Checkbox
                                            value="programming"
                                            label="programming"
                                            name="Specialty[]"
                                        />
                                        <HelperMessage>
                                            Select Your Specialty
                                        </HelperMessage>
                                    </Fragment>
                                )}
                            </Field>
                            <FormFooter>
                                <Button appearance="primary" onClick={() => { Commit(); }}>
                                    Submit
                                 </Button>
                            </FormFooter>
                        </form>
                    )}
                </Form>
                <span id="value"></span>
                <Button onClick={Increase}>+1</Button>
            </MyForm >
        );
    }
}
export default AtlaskitForm;
