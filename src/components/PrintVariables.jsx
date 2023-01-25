import React from 'react'

const ReturnedValueString = () => 'NuevoMessage' 
const ReturnedValuePlus = (a,b) => a + b 

export default function PrintVariables() {
    const bool = true;
    const string = "hola mundo";
    const number = 1;
    const arry = [1,2,3,4]
    const obj = {
        title: "hello world",
        surname: "malgor"
    }
    const unde = undefined;
    const nul = null;
    return (
        <> 
        --------------------------PrintVariables Components-------------------------
        <p> Valor booleano: { bool } </p>
        <p> Valor string: { string } </p>
        <p> Valor number: { number } </p>
        <p> Valor arry: { arry } </p>
        <code> Valor Json: { JSON.stringify(obj) } </code>
        <p> Valor retornado por una funcion: { ReturnedValueString() }</p>
        <p> Valor retornado por una funcion: { ReturnedValuePlus(1,2) }</p>

        <p> Valor undefined ({unde})  Valor Null ({nul})</p>
        </>
    )
}
