import React from 'react'
import styled from 'styled-components'
import './simpleLayout.css'

const Item = styled.div`
  text-align: center;
  margin: 15px;
`

const Subtitle = styled.div`
  color: #fff;
  font-size: 1.5rem;
  margin: 3px 0;
`

const Text = styled.div`
  color: red;
`

const SimpleLayout = () => (
  <div className="container">
    <label>СТРАСТИ</label>
    <div className="wrapper">
      <div className="row">
        <Item>
          <img src="src/img/login.png" />
          <Subtitle>Заголовок</Subtitle>
          <Text>Текст</Text>
        </Item>
        <div className="item">
          <img src="src/img/login.png" />
          <div className="subtitle">Заголовок</div>
          <div class="text">Текст</div>
        </div>
        <div className="item">
          <img src="src/img/login.png" />
          <div className="subtitle">Заголовок</div>
          <div class="text">Текст</div>
        </div>
      </div>
    </div>
  </div>
)

export default SimpleLayout
