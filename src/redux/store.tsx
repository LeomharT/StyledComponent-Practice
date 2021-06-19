import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSage from './sagas';
import { counter, SetDepartment, GetMyToDoList, GetUploadData, stepInfo } from './reducer';


const store = createStore(counter);

const MyStepInfo = createStore(stepInfo);

const sagaMiddleware: any = createSagaMiddleware();

const sagaDepartment: any = createSagaMiddleware();

const sageUploadData: any = createSagaMiddleware();


const MyDepartment = createStore(
    SetDepartment,
    applyMiddleware(sagaDepartment)
);


const GetTodoList = createStore(
    GetMyToDoList,
    applyMiddleware(sagaMiddleware)
);


const MyGetUploadData = createStore(
    GetUploadData,
    applyMiddleware(sageUploadData)
);


sagaMiddleware.run(rootSage);

sagaDepartment.run(rootSage);

sageUploadData.run(rootSage);

export { store, MyDepartment, GetTodoList, MyGetUploadData, MyStepInfo };
