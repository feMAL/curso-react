import React from 'react';
import PropTypes from 'prop-types';

// Props de un componenete.
export default function ComponentCommunication({title, win}) {
    if(!title)throw Error("title does not exist");
    
    return (
    <>
        <div>
            --ComponentCommunication--
            <h1>{title} ganó el {win}</h1>
        </div>
    </>
  )
}

ComponentCommunication.propTypes = {
    title: PropTypes.string.isRequired,
    win: PropTypes.string.isRequired
};

ComponentCommunication.defaultProps = {
    title: "No Hay Titulo"
}