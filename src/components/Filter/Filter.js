import React from "react";
import PropTypes from 'prop-types';
import { InputGroup , InputLabel, Input, InputBar } from "components/App/App.styled";


export class Filter extends React.Component {
    inputFilterId = crypto.randomUUID();
    filterSize = 230;
  
    render() {
      const { handleFilter, filter } = this.props;
  
      return (
        <>
          <p>Find contacts by name</p>
          <InputGroup size={this.filterSize}>
            <Input
              type="text"
              id={this.inputFilterId}
              name="filter"
              value={filter}
              onChange={handleFilter}
              size={this.filterSize}
            />
            <InputLabel htmlFor={this.inputFilterId} size={this.filterSize}>
              Filter
            </InputLabel>
            <InputBar size={this.filterSize}></InputBar>
          </InputGroup>
        </>
      );
    }
  }
  
  Filter.propTypes = {
    handlerFilter: PropTypes.func,
    filter: PropTypes.string,
  };