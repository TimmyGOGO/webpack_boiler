import React from 'react'
import styled from 'styled-components'

export const StyledTodoListContainer = styled.div``

export interface ITodoList {}

export class TodoList extends React.PureComponent<ITodoList> {
  render() {
    return <StyledTodoListContainer>TodoList component</StyledTodoListContainer>
  }
}
