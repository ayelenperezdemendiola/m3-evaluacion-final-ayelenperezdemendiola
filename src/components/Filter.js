import React from 'react';

const FilterByName = (props) => {
    const { handleChangeName } = props;
    return (
        <div className="filter--container">
            <input type="text" className="filter--name" onChange={handleChangeName} />
        </div>
    );
}

export { FilterByName };