import React from 'react';

const FilterByName = (props) => {
    const { handleChangeName } = props;
    return (
        <input type="text" className="filter--name" onChange={handleChangeName} />
    );
}

export {FilterByName};