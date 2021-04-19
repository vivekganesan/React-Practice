import logo from './logo.svg';
import React, { useReducer } from 'react';
import './App.css';
import StopProogation from './javascriptfunctions/StopPropogation';
import Counter from './Hooks/UseStateHook';
import HookCounterTwo from './Hooks/HookCounterTwo';
import HookCounterThree from './Hooks/HookCounterThree';
import HookCounterFour from './Hooks/HookCounterFour';
import ClassCounterOne from './ClassComponent/ClassCounterOne';
// import ToggleMouse from './Hooks/ToggleMouse';
import ClassMouseCoordinate from './ClassComponent/ClassMouseCoordinate';
import IntervalClassCounter from './ClassComponent/IntervalClassCounter';
import IntervalHookCounter from './Hooks/IntervalHookCounter';
import DataFetching from './Hooks/DataFetching';
import ComponentC from './Hooks/UserContext/ComponentC';
// import CounterOne from './Hooks/UseReducer/CounterOne';
// import CounterTwo from './Hooks/UseReducer/CounterTwo';
import CounterThree from './Hooks/UseReducer/CounterThree';
import ComponentA from './Hooks/UseReducerwithContext/ComponentA';
import ComponentD from './Hooks/UseReducerwithContext/ComponentD';
import ComponentF from './Hooks/UseReducerwithContext/ComponentF';
import DataFetchingOne from './Hooks/DataFetchingOne';
import DataFetchingTwo from './Hooks/DataFetchingTwo';
import Parent from './Hooks/UseCallBack/Parent';
import CounterMemo from './Hooks/UseMemo/CounterMemo';
import FocusInput from './Hooks/UseRef/FocusInput';
import ClassTimer from './ClassComponent/ClassTimer';
import HookTimer from './Hooks/UseRef/HookTimer';
import DocTitleOne from './Hooks/UseCustomHook/DocTitleOne';
import DocTitleTwo from './Hooks/UseCustomHook/DOcTitleTwo';
import CounterOne from './Hooks/UseCustomHook/CounterOne';
import CounterTwo from './Hooks/UseCustomHook/CounterTwo';
import UserForm from './Hooks/UseCustomHook/UserForm';
import FRParentInput from './ClassComponent/ForwardRef/FRParentInput';
import FormInput from './ClassComponent/FormInput';
import Radio from './Common/Radio';
import RadioExample from './ClassComponent/RadioExample';
import CheckBoxExamble from './ClassComponent/CheckBoxExamble';
import DropDown from './Common/DropDown';
import PaymentInformation from './ClassComponent/PaymentInformation'
import Button from './Common/Button';
import ParentPersonalComponent from './ClassComponent/ParentPersonalComponent';
import Promises1 from './javascriptfunctions/promises';
import Clouser from './javascriptfunctions/Clouser';
import CallbackFunctins from './javascriptfunctions/CallbackFunctins'
import ObjectPattern from './javascriptfunctions/ObjectPattern';
import CallBindApply from './javascriptfunctions/CallBindApply';
import AsyncAwait from './javascriptfunctions/AsyncAwait';
import ObjectOrentedJavascript from './javascriptfunctions/ObjectOrentedJavascript';
import ArrowFunction from './javascriptfunctions/ArrowFunction';
import EventProperity from './javascriptfunctions/EventProperity';


const onLink = (e) => {
  const lRlink = document.getElementById('LRlink');
  const cB = document.getElementById('cb');
  console.log(lRlink, "lRlink");
  if (!cB.checked) {
    e.preventDefault();
  }

}

export const UserContaxt = React.createContext();

export const ChennalContext = React.createContext();

const initialState = 0;

const reducer = (currState, action) => {
  switch (action) {
    case 'increment':
      return currState + 1;
    case 'decrement':
      return currState - 1;
    case 'reset':
      return initialState;
    default:
      return initialState
  }

}


export const CounterContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (   
    <> 
    <EventProperity />
    {/* <ArrowFunction />
    <ObjectOrentedJavascript /> */}
    {/* <AsyncAwait />
    <CallBindApply /> */}
    {/* <ObjectPattern />
    <CallbackFunctins /> */}
    {/* <Clouser />
    <Promises1 />
    <ParentPersonalComponent /> */}
    <div className="App">
      {/* <Button size="30px" content="Back" color="grey" alertContent="Go Back"/>
      <Button size="30px" content="Next" color="green" alertContent="Proceed"/>
      <Button size="30px" content="Cancel" color="red" alertContent="Cancel"/>
      <PaymentInformation />
      <DropDown />
      <CheckBoxExamble />
      <RadioExample /> */}
      {/* <Radio/> */}
      {/* <FormInput /> */}
      {/* <FRParentInput /> */}
      {/* <UserForm /> */}
      {/* <CounterOne />
      <CounterTwo />
      <DocTitleOne />
      <DocTitleTwo />
      <ClassTimer/>
      <HookTimer />
      <FocusInput /> */}
      {/* <CounterMemo />
      <DataFetchingTwo />
      <Parent /> */}
      {/* <DataFetchingOne /> */}
      {/* <CounterContext.Provider value={{ CounterState: count, counterDispatch: dispatch }}>
        <div>{count}</div>
        <ComponentA />
        <ComponentD />
        <ComponentF />
      </CounterContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree />
      <UserContaxt.Provider value="Vivek Ganesan">
        <ChennalContext.Provider value="Awesome Videos">
          <ComponentC />
        </ChennalContext.Provider>
      </UserContaxt.Provider>
      <DataFetching /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <HookMouse /> */}
      {/* <ToggleMouse /> */}

      {/* <ClassMouseCoordinate />
      <ClassCounterOne />
      <HookCounterFour />
      <HookCounterThree />
      <HookCounterTwo /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          id="LRlink"
          onClick={onLink}
        >          
          Learn React
        </a>
        <input type="checkbox" id="cb"/>
      </header>      
      <StopProogation/>
      <Counter/> */}
    </div>
    </>

  );
}

export default App;
