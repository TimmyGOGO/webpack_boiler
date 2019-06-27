import React from 'react'
import styled from 'styled-components'
import { TodoList } from '../modules/TodoList/TodoList'
import './globalStyles.css'
import BreweriesSimpleLayout from '../modules/BreweriesSimpleLayout/BreweriesSimpleLayout'

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <BreweriesSimpleLayout />
        {/* <TodoList /> */}
      </>
    )
  }
}
