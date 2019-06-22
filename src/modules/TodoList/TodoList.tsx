import React from 'react'
import styled from 'styled-components'

export const StyledTodoListContainer = styled.div`
  height: 100vh;
  margin: 20px;
  background: linear-gradient(#fff, #e7f3f1);
`

const StyledHeadline = styled.div`
  font-family: Roboto;
  font-size: 24px;
  line-height: 30px;
`

export interface ITodoList {}

export class TodoList extends React.PureComponent<ITodoList> {
  state = {}

  render() {
    return (
      <StyledTodoListContainer>
        <StyledHeadline>TodoList component</StyledHeadline>
      </StyledTodoListContainer>
    )
  }
}
