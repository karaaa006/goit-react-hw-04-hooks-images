import PropTypes from "prop-types";
import { Component } from "react";

export class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.props.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name="query"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
