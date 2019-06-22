import React from 'react'
import styled from 'styled-components'
import { TodoList } from '../modules/TodoList/TodoList'

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <TodoList />
      </>
    )
  }
}
