import React from 'react'
import styled from 'styled-components'
import { TodoList } from '../modules/TodoList/TodoList'
import './globalStyles.css'
import BreweriesSimpleLayout from '../modules/BreweriesSimpleLayout/BreweriesSimpleLayout'
import { ImageGallery } from '../modules/ImageGalleryLayout/ImageGalleryLayout';
import { TrelloLayout } from '../modules/TrelloLayout/TrelloLayout';

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        {/* <BreweriesSimpleLayout /> */}
        {/* <ImageGallery /> */}
        <TrelloLayout />
        {/* <TodoList /> */}
      </>
    )
  }
}
