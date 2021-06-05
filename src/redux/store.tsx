import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSage from './sagas';
import { counter, SetDepartment, GetMyToDoList } from './reducer';


const store = createStore(counter);

const sagaMiddleware: any = createSagaMiddleware();

const sagaDepartment: any = createSagaMiddleware();


const MyDepartment = createStore(
    SetDepartment,
    applyMiddleware(sagaDepartment)
);



const GetTodoList = createStore(GetMyToDoList, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSage);

sagaDepartment.run(rootSage);

export { store, MyDepartment, GetTodoList };
