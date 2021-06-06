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
    console.log(action);
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

const GetUploadData = (state: any, action: any) =>
{
    let upLoadData: FormData = new FormData();

    switch (action.type)
    {
        case "GetingData": {
            upLoadData = action.data;
            console.log(upLoadData.getAll("UserName"));
            return upLoadData;
        }

        default: {
            return upLoadData;
        }
    }
};







export { counter, SetDepartment, GetMyToDoList, GetUploadData };
