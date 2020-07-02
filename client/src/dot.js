import React from 'react';

function dot(props) {
    return (
        <>
            <div className="dot" style={{"backgroundColor": `${props.color}`}}></div> 
        </>
    )
}

export default dot;
