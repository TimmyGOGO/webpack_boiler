import React from 'react'
import styled from 'styled-components'
import { TodoList } from '../modules/TodoList/TodoList'
import './globalStyles.css'
import Grid from '../modules/Grid/Grid'

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <Grid />
        {/* <TodoList /> */}
      </>
    )
  }
}
