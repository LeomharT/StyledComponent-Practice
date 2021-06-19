const counter = (state: any, action: any) =>
{
    if (typeof state == 'undefined') return 123;
    switch (action.type)
    {
        case 'increment':
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
};

const SetDepartment = (state: any, action: any) =>
{
    switch (action.type)
    {
        case "GETDATA_Async": {
            console.log(action.data);
            // let newState = JSON.parse(JSON.stringify(state));
            // console.log(newState);
            return action.data;
        }

        default: {
            return state;
        }
    }
};

const defaultState = {
    inputValue: "Entering Something",
    list: [
        'Learn React',
        'Go out play',
        'Read Book'
    ]
};

const GetMyToDoList = (state: any = defaultState, action: any) =>
{
    switch (action.type)
    {
        case "getDataFromServer": {
            let newState: any = JSON.parse(JSON.stringify(state));
            newState.list = action.data;
            return newState;
        }

        case "changeInput": {
            let newState: any = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        }

        case "addItem": {
            let newState: any = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            newState.inputValue = "";
            console.log(newState);
            return newState;
        }

        case "removeItem": {
            let newState: any = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index, 1);
            return newState;
        }

        default: {
            return state;
        }
    }
};

const GetUploadData = (state: FormData = new FormData(), action: any) =>
{
    switch (action.type)
    {
        case "GetingData": {
            state = action.data;
            console.log(state.getAll("UserName"));
            return state;
        }

        default: {
            return state;
        }
    }
};

const stepInfo = (state: FormData = new FormData(), action: any) =>
{
    switch (action.type)
    {
        case "SumbitInfo": {
            state.append(action.data.name, action.data.value);
            return state;
        }
        default:
            return state;
    }
};







export { counter, SetDepartment, GetMyToDoList, GetUploadData, stepInfo };
