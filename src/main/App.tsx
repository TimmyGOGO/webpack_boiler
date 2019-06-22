import React from 'react'
import styled from 'styled-components'
import { TodoList } from '../modules/TodoList/TodoList'
import './globalStyles.css'

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <TodoList />
      </>
    )
  }
}
