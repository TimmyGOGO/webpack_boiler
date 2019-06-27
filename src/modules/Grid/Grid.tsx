import * as React from 'react'
import styled from 'styled-components'
import './grid.css'

const StyledGridContainer = styled.div``

interface IGridProps {
  className?: string
}

class Grid extends React.PureComponent<IGridProps> {
  render() {
    return (
      <StyledGridContainer>
        <section className="hero">
          <h1>You thirsty?</h1>
          <article>
            <p>
              Explore local breweries with just one click and stirred by starlight across the
              centuries light years great turbulent clouds circumnavigated paroxysm of global death.
            </p>
            <a href="#breweries">Browse Breweries</a>
          </article>
        </section>
      </StyledGridContainer>
    )
  }
}

export default Grid
