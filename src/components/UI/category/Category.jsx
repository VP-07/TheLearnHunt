import React from 'react'

import { Container, Row, Col } from "reactstrap";
import "../../../styles/category.css";

import categoryImg01 from "../../../assets/Images/html.png";
import categoryImg02 from "../../../assets/Images/softskills.png";
import categoryImg03 from "../../../assets/Images/gamedev.png";
import categoryImg04 from "../../../assets/Images/writingskills.png";


const categoryData = [
  {
    display: "Web Development",
    imgUrl: categoryImg01,
  },
  {
    display: "Soft Skills",
    imgUrl: categoryImg02,
  },

  {
    display: "Game Development",
    imgUrl: categoryImg03,
  },

  {
    display: "Writing Skills",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Category