import React, {useState} from 'react';
import PropTypes from 'prop-types';


export default function CounterAppWithHooks({initValue = 0}) {
    
    const [counter, setCounter] = useState(initValue);

    const plusOne = () => setCounter(counter +1);
    const removeOne = () => setCounter(counter -1);
    const handleReset = () => setCounter(initValue);

     return (
    <>
         <div>---CounterAppWithHooks---</div>
        <h2> {counter} </h2>

        <button onClick={ plusOne }> +1 </button>
        <button onClick={ removeOne }> -1 </button>
        <button onClick= { handleReset }> Reset </button>
    </>
  )
}

CounterAppWithHooks.propTypes = {
    initValue: PropTypes.number.isRequired
}

CounterAppWithHooks.defaultProps = {
    initValue: 0
}