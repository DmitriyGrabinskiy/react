import React from 'react';

const ValidationComponent = (props) => {
    var output = '';
    if(props.textLength > 5)
    {
        output = <div>Text long enough</div>
    }
    else
    {
        output = <div>Text too short</div>
    }

    return (
        output
    )
};

export default ValidationComponent;