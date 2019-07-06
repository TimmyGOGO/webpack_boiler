import React from 'react'
import styled from 'styled-components'
import galleryImages from './gallery.fixture.json'

export const StyledImageGalleryContainer = styled.div`
`

// основные стили:
const StyledGallery = styled.main`
  padding: 2rem;
`

const StyledGalleryHeadline = styled.h1`
  font-size: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Sergoe UI Emoji", "Sergoe UI Symbol";
  margin-bottom: 1rem;
  color: #333333;
  font-weight: 100;
`

const StyledGalleryList = styled.ul`
  list-style-type: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(6, 160px);
  grid-gap: 1rem;
  grid-auto-flow: dense;

`

const StyledGalleryListItem = styled.li`
  &:nth-child(4n) {
    grid-column: span 2;
    grid-row: span 2;
  }

  &:nth-child(8n) {
    grid-column: span 3;
    grid-row: span 3;
  }

  figure {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export interface IImageGalleryProps {
  
}

export interface IImageGalleryState {
  gallery: JSX.Element[]
}

export class ImageGallery extends React.PureComponent<IImageGalleryProps, IImageGalleryState> {
  constructor(props: any) {
    super(props)

    this.state = {
      gallery: this.getGalleryImages()
    }
  }

  getGalleryImages = () => {
    return galleryImages.map((img, index) => (
      <StyledGalleryListItem key={index}>
        <figure>
          <img src={img.src} alt={img.alt} />
        </figure>
      </StyledGalleryListItem>
    ))
  }

  render() {
    const { gallery } = this.state

    return (
      <StyledImageGalleryContainer>
        <StyledGallery>
          <StyledGalleryHeadline>A peek at Space 👀</StyledGalleryHeadline>
          <StyledGalleryList>
            {gallery}
          </StyledGalleryList>
        </StyledGallery>
      </StyledImageGalleryContainer>
    )
  }
}