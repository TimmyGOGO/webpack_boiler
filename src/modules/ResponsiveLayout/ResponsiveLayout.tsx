import React from 'react'
import styled, { css } from 'styled-components'

import './responsiveLayout.scss'
import slides from './slides.fixture.json'
import cloneDeep from 'lodash/cloneDeep'

export const StyledResponsiveLayoutContainer = styled.div``

interface ISlide {
  slideIndex: string
  enlarge: boolean
}

const StyledSlide = styled.div<ISlide>`
  ${({slideIndex, enlarge}) => enlarge 
    && css`

    `}

`

export interface IResponsiveLayoutProps {
  className?: string
}

export interface IResponsiveLayoutState {
  mainClassName?: string
  numSlides: number
  slides: any
  slidesStyles: any[]
}

export class ResponsiveLayout extends React.PureComponent<
  IResponsiveLayoutProps,
  IResponsiveLayoutState
> {
  constructor(props: any) {
    super(props)

    this.state = {
      slides: this.getSlides(),
      numSlides: slides.length,
      mainClassName: 'cont',
      slidesStyles: [{}]
    }
  }

  componentDidMount() {
    // появление анимации:
    setTimeout(() => {
      this.setState({
        mainClassName: 'cont active'
      })
    }, 1000)
  }

  handleMouseMove = (e: any) => {
    e.stopPropagation()
    const { numSlides } = this.state
    const currentEvent = cloneDeep(e)
    const currentTarget = currentEvent.currentTarget
    const target = currentTarget.dataset.target
    console.log({ currentTarget, target })
    // if(initialAnim || clickAnim) return;
    // let _this = $(this);
    // let target = +_this.attr('data-target');

    currentTarget.style.cssText = `
      transform: translate3d(-${(((100 / numSlides) * (numSlides - (target - 1))) + 5)}%, 0, 0);
      transition: 750ms;
    `

    // _this.find('.slide__text')
    currentTarget.children[0].style.cssText = `
      transform: translate3d(0, -40%, 0) rotate(0.01deg);
      -moz-transform: translate3d(0, -40%, 0) rotate(0.01deg);
      opacity: 1;
      transition: 750ms;
      -webkit-transition: 750ms;
    `

    for(let i = target; i < numSlides; i++) {
      currentTarget.parentElement
    // 	$('.slide--' + (i + 1)).css({
    // 		'transform': 'translate3d(-' + (((100 / numSlides) * (numSlides - ((i + 1) - 1))) - 5) + '%, 0, 0)',
    // 		'transition': '750ms'
    // 	})
    }

    for(let i = target; i > 1; i--) {
    // 	$('.slide--' + (i - 1)).css({
    // 		'transform': 'translate3d(-' + (((100 / numSlides) * (numSlides - ((i - 1) - 1))) + 5) + '%, 0, 0)',
    // 		'transition': '750ms'
    // 	})
    }

    // _this.find('.slide__img-wrapper').css({
    // 	'transform': 'translate3d(-200px, 0, 0) scale(.85, .85)',
    // 	'transition': '750ms'
    // })

    // $slide.not(_this).find('.slide__img-wrapper').css({
    // 	'transform': 'translate3d(-200px, 0, 0) scale(.90, .90)',
    // 	'transition': '1000ms'
    // })

    // $slide.not(_this).find('.slide__bg-dark').css({
    // 	'opacity': '.75'
    // })
  }

  getSlides = () => {
    return slides.map((slide, index) => (
      <StyledSlide
        key={index}
        slideIndex={`${index + 1}`}
        data-target={`${index + 1}`}
        className={`slide slide--${index + 1}`}
        onMouseMove={this.handleMouseMove}
      >
        <div className={`slide__text slide__text--${index + 1}`}>{slide.headline}</div>
        <div className="slide__bg" />
        <div className="slide__img">
          <div className="slide__close" />
          <div className="slide__img-wrapper" />
        </div>
        <div className="slide__bg-dark" />
        <a
          href="https://twitter.com/mrspok407"
          target="_blank"
          className="icon-link icon-link--twitter"
        >
          <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
        </a>
      </StyledSlide>
    ))
  }

  render() {
    const { mainClassName, slides } = this.state
    return (
      <StyledResponsiveLayoutContainer>
        <div className={mainClassName}>{slides}</div>
      </StyledResponsiveLayoutContainer>
    )
  }
}
