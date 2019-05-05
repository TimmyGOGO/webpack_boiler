import * as React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './components/containers/FormContainer';

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
