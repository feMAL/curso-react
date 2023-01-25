import React from 'react'
import PropTypes from 'prop-types';


export default function CounterApp({initValue = 0}) {
    
    const plusOne = () => {initValue = initValue +1;}
    const removeOne = () => {initValue = initValue-1;}

    return (
    <>
        <h1>---Counter App---</h1>
        <h2> {initValue} </h2>

        <button onClick={ plusOne() }> +1 </button>
        <button onClick={ removeOne() }> -1 </button>
    </>
  )
}

CounterApp.propTypes = {
    initValue: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    initValue: 0
}