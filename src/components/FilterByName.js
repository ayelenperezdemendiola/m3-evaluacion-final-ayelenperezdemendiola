import React from 'react';
import PropTypes from 'prop-types';

const FilterByName = (props) => {
    const { handleChangeName } = props;
    return (
        <div className="filter--container">
            <input type="text" className="filter--name" onChange={handleChangeName} />
        </div>
    );
}
FilterByName.propTypes = {
    handleChangeName: PropTypes.func.isRequired
}
export default FilterByName;