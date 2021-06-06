import { all, call, put, takeEvery } from 'redux-saga/effects';


const getDataAction = (data: any) => ({
    type: "getDataFromServer",
    data
});

const getDepartmentAction = (data: any) => ({
    type: "GETDATA_Async",
    data
});


export function* GetTodo()
{
    console.log("Getting");
    let action: any;
    yield fetch("http://localhost/PHP_FinalExam/GetToDolist.php")
        .then(response => response.json())
        .then(data =>
        {
            action = getDataAction(data);
        });

    yield put(action);
}

export function* watchGetTodo()
{
    yield takeEvery("GetData", GetTodo);
}

export function* GetDepartment()
{
    console.log("Having");
    let action: any;
    yield fetch('http://localhost/PHP_Pro01/React_Pro01/GetDepartment.php')
        .then(response => response.json())
        .then((data) =>
        {
            action = getDepartmentAction(data);
        });
    yield put(action);
}

export function* watchGetDepartement()
{
    yield takeEvery("GetDepartment", GetDepartment);
}

export function* GetUploadData(action: any)
{
    yield console.log("Im Getting" + action.data);
    yield put({
        type: 'GetingData',
        data: action.data
    });

}

export function* watchGetUploadData()
{
    yield takeEvery("GetUploadData", GetUploadData);
}

export default function* rootSage()
{
    yield all([
        call(watchGetTodo),
        call(watchGetDepartement),
        call(watchGetUploadData)
    ]);
}
