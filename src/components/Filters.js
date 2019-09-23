import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
    const { handleChangeName } = props;
    return (
        <div className="filter--container">
            {/* <label htmlFor="filterName" className="filterName">Buscar por nombre: </label> */}
            <input type="text" placeholder="Morty Smith" className="filter--name" name="filterName" id="filterName" onChange={handleChangeName} />
        </div>
    );
}
Filters.propTypes = {
    handleChangeName: PropTypes.func.isRequired
}
export default Filters;