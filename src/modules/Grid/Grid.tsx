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
        <main className="wrapper">
          <section className="hero">
            <h1>You thirsty?</h1>
            <article>
              <p>
                Explore local breweries with just one click and stirred by starlight across the
                centuries light years great turbulent clouds circumnavigated paroxysm of global
                death.
              </p>
              <a href="#breweries">Browse Breweries</a>
            </article>
          </section>
          <section className="breweries" id="breweries">
            <ul>
              <li>
                <figure>
                  {/* Photo by Quentin Dr on Unsplash */}
                  <img
                    src="https://images.unsplash.com/photo-1471421298428-1513ab720a8e"
                    alt="Several hands holding beer glasses"
                  />
                  <figcaption>
                    <h3>Billions upon billions</h3>
                  </figcaption>
                </figure>
                <p>
                  Made in the interiors of collapsing stars star stuff harvesting star light venture
                  billions upon billions Drake Equation brain is the seed of intelligence?
                </p>
                <a href="#">Visit Website</a>
              </li>
              <li>
                <figure>
                  {/* Photo by Drew Farwell on Unsplash */}
                  <img
                    src="https://images.unsplash.com/photo-1513309914637-65c20a5962e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
                    alt="Several friends doing a toast"
                  />
                  <figcaption>
                    <h3>Drake Equation</h3>
                  </figcaption>
                </figure>
                <p>
                  Another world citizens of distant epochs from which we spring descended from
                  astronomers Orion's sword shores of the cosmic ocean.
                </p>
                <a href="#">Visit Website</a>
              </li>
              <li>
                <figure>
                  {/* Photo by Rawpixel on Unsplash */}
                  <img
                    src="https://images.unsplash.com/photo-1535359056830-d4badde79747?ixlib=rb-1.2.1&auto=format&fit=crop&w=3402&q=80"
                    alt="Three different glasses of beer"
                  />
                  <figcaption>
                    <h3>Vast cosmic arena</h3>
                  </figcaption>
                </figure>
                <p>
                  Galaxies the ash of stellar alchemy prime number science inconspicuous motes of
                  rock and gas brain is the seed of intelligence.
                </p>
                <a href="#">Visit Website</a>
              </li>
            </ul>
          </section>
        </main>
        <footer>
          <p>&copy; 2019. Made with ❤ and CSS Grid.</p>
        </footer>
      </StyledGridContainer>
    )
  }
}

export default Grid
