import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
import TileLayout from "../presentational/TileLayout";
import './formContainer.css';
import styled from "styled-components";

const FormContainerWrapper = styled.div`
  margin: 10px;
`;

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <FormContainerWrapper>
        <TileLayout />
      </FormContainerWrapper>
    );
  }
}
export default FormContainer;