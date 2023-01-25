import React from 'react';
import ComponentCommunication from './ComponentCommunication';
import ComponentWithFragment from './ComponentWithFragment';
import CounterApp from './CounterApp';
import PrintVariables from './PrintVariables';
import CounterAppWithHooks from './CounterAppWithHooks';



export default function FirstComponent() {

    const name = "Fernando Nahuel";
    return (
        <>
        --------------------------FirstComponent Components-------------------------
        <h2>Welcome back {name}</h2>
        <ComponentWithFragment></ComponentWithFragment>
        <PrintVariables></PrintVariables>
        <ComponentCommunication title="El Secreto de sus ojos" win="Oscar"></ComponentCommunication>
        <ComponentCommunication win="Oscar"></ComponentCommunication>
        <CounterApp initValue={0}></CounterApp>
        <CounterAppWithHooks initValue={10}></CounterAppWithHooks>
        </>
    )
}
