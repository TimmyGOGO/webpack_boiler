import React from 'react'
import styled from 'styled-components'

export const StyledTodoListContainer = styled.div`
  height: 100vh;
  margin: 20px;
  background: linear-gradient(#fff, #e7f3f1);
`

const StyledHeadline = styled.div`
  font-family: 'Coldiac';
  font-size: 48px;
  padding: 20px 10px;

  width: 100%;
  text-align: center;
`

const StyledParagraph = styled.p`
  font-family: 'Montserat';
  font-size: 16px;
  text-align: center;

`

export interface ITodoList {}

export class TodoList extends React.PureComponent<ITodoList> {
  state = {}

  render() {
    return (
      <StyledTodoListContainer>
        <StyledHeadline>TASKS LIST</StyledHeadline>
        <StyledParagraph>Тестовое приложение: GRID CSS</StyledParagraph>
      </StyledTodoListContainer>
    )
  }
}
