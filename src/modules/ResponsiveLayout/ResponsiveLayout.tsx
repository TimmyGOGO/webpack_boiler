import React from 'react'
import styled from 'styled-components'

import './responsiveLayout.scss'
import slides from './slides.fixture.json'

export const StyledResponsiveLayoutContainer = styled.div`
`

export interface IResponsiveLayout {
  className?: string
}

export class ResponsiveLayout extends React.PureComponent<IResponsiveLayout> {
  constructor(props: any) {
    super(props)

    this.state = {
      slides: this.getSlides()
    }
  }

  getSlides = () => {
    return slides.map((slide, index) => (
      <div data-target={`${index+1}`} className={`slide slide--${index+1}`}>
        <div className="slide__text slide__text--1">{slide.headline}</div>
        <div className="slide__bg"></div>
        <div className="slide__img">
          <div className="slide__close"></div>
          <div className="slide__img-wrapper"></div>
        </div>
        <div className="slide__bg-dark"></div>
        <a href="https://twitter.com/mrspok407" target="_blank" className="icon-link icon-link--twitter">
          <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
        </a>
      </div>
    ))
  }

  render() {
    return (
      <StyledResponsiveLayoutContainer>
        <div className="cont ">
          <div data-target='1' className="slide slide--1">
            <div className="slide__text slide__text--1">quis risus</div>
            <div className="slide__bg"></div>
            <div className="slide__img">
              <div className="slide__close"></div>
              <div className="slide__img-wrapper"></div>
            </div>
            <div className="slide__bg-dark"></div>
            <a href="https://twitter.com/mrspok407" target="_blank" className="icon-link icon-link--twitter">
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
            </a>
          </div>
          
          <div data-target='2' className="slide slide--2">
            <div className="slide__text">Lorem ipsum</div>
            <div className="slide__bg"></div>
            <div className="slide__img">
              <div className="slide__close"></div>
              <div className="slide__img-wrapper">
                
              </div>
            </div>
            <div className="slide__bg-dark"></div>
            <a href="https://twitter.com/mrspok407" target="_blank" className="icon-link icon-link--twitter">
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"/>
            </a>
          </div>
          
          <div data-target='3' className="slide slide--3">
            <div className="slide__text">Sed tincidunt</div>
            <div className="slide__bg"></div>
            <div className="slide__img">
              <div className="slide__close"></div>
              <div className="slide__img-wrapper">
                
              </div>
            </div>
            <div className="slide__bg-dark"></div>
            <a href="https://twitter.com/mrspok407" target="_blank" className="icon-link icon-link--twitter">
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"/>
            </a>
          </div>
          
          <div data-target='4' className="slide slide--4">
            <div className="slide__text">Vivamus dui</div>
            <div className="slide__bg"></div>
            <div className="slide__img">
              <div className="slide__close"></div>
              <div className="slide__img-wrapper"></div>
            </div>
            <div className="slide__bg-dark"></div>
              <a href="https://twitter.com/mrspok407" target="_blank" className="icon-link icon-link--twitter">
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"/>
            </a>
          </div>
          
          <div data-target='5' className="slide slide--5">
            <div className="slide__text">Viva</div>
            <div className="slide__bg"></div>
            <div className="slide__img">
              <div className="slide__close"></div>
              <div className="slide__img-wrapper"></div>
            </div>
            <div className="slide__bg-dark"></div>
              <a href="https://twitter.com/mrspok407" target="_blank" className="icon-link icon-link--twitter">
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
            </a>
          </div>

        </div>
      </StyledResponsiveLayoutContainer>
    )
  }
}
