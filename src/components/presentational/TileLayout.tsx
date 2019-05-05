import React from "react";
import styled from 'styled-components';
import './TileLayout.css';

const ContentContainer = styled.div`
    background-color: white;
    height: 100%;
`;

const Grid = styled.div`
    max-width: 1300px;
    margin:0 auto;
    height: 100%;
    padding: 0 5px;
    overflow: hidden;
`;

const Row = styled.div`
    border: 1px solid #ff0;
    text-align: center;
    margin: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Tile = styled.div`
    border: 1px solid black;
    background-color: #ff0;
    color: #fff;
    font-size: 1.5rem;
    margin: 3px;
    flex-grow: 1;
    flex-basis: 25%;

    @media (max-width: 768px) {
        background-color: green;
        flex-basis: 50%;
    }
`;

const BackImage = styled.img`

`;

const Text = styled.div`
    color: red;
`;

const TileLayout = () => (
  <ContentContainer>
    <Grid>
      <Row>
        <Tile>
            <div className="top">
                <div>
                    <div>
                        <img src="src/img/login.png"></img>
                        <Text>Элемент 1</Text>
                    </div>
                </div>
            </div>
        </Tile>
        <Tile>
          <img src="src/img/login.png"></img>
          <Text>Элемент 2</Text>
        </Tile>
        <Tile>
          <img src="src/img/login.png"></img>
          <Text>Элемент 3</Text>
        </Tile>
        <Tile>
          <img src="src/img/login.png"></img>
          <Text>Элемент 4</Text>
        </Tile>
        <Tile>
          <img src="src/img/login.png"></img>
          <Text>Элемент 5</Text>
        </Tile>
        <Tile>
          <img src="src/img/login.png"></img>
          <Text>Элемент 6</Text>
        </Tile>
        <Tile>
          <img src="src/img/login.png"></img>
          <Text>Элемент 7</Text>
        </Tile>
        <Tile>
          <img src="src/img/login.png"></img>
          <Text>Элемент 8</Text>
        </Tile>
      </Row>
    </Grid>
  </ContentContainer>
);

export default TileLayout;
