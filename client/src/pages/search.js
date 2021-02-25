import React, { Component } from "react";
import Container from "../components/Container/Container";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: [],
    gender: [],
    error: "",
  };

  componentDidMount() {
    API.searchPerson()
      .then((res) => {
        this.setState({ results: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchPersonByGender(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(console.log("we gots an error mate"));
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ err: err.message }));
  };
  render() {
    return (
      <div>
        <Container>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            gender={this.state.gender}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
