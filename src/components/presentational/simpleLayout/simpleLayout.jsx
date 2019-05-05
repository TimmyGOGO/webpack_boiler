import React from "react";
import "./simpleLayout.css";

const SimpleLayout = () => (
  <div className="container">
    <label>СТРАСТИ</label>
    <div className="wrapper">
      <div className="row">
        <div className="item">
          <img src="src/img/login.png" />
          <div className="subtitle">Заголовок</div>
          <div class="text">Текст</div>
        </div>
      </div>
    </div>
  </div>
);

export default SimpleLayout;
