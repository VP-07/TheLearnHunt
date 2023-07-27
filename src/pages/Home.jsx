import React, { useState, useEffect } from "react";
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../styles/home.css";
import heroImg from '../assets/Images/hero.jpg'
import '../styles/hero-section.css'

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import products from "../assets/Data/products";
import ProductCard from '../components/UI/product-card/ProductCard';

import whyImg from '../assets/Images/whyUs.jpg';





const Home = () => {

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "TECHNOLOGICAL") {
      const filteredProducts = products.filter(
        (item) => item.category === "Technological"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "CREATIVE") {
      const filteredProducts = products.filter(
        (item) => item.category === "Creative"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "INTERPERSONAL") {
      const filteredProducts = products.filter(
        (item) => item.category === "Interpersonal"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);


  return <Helmet title="Home">
  <section>
    <Container>
      <Row>
        <Col lg="6" md="6">
        <div className="hero__content">
        <h5 className = "mb-3"> Where learning is the ultimate treasure!
         </h5>
         <h1 className = "mb-4 hero__title"> 
          <span>Want to upskill yourself? </span> 
        </h1>
        <p>
        but don't know how or where to start? Don't you worry, <br/> 
        TheLearnHunt provides you with all the maps that lead to <br/>  your treasured dreams!
        </p>

        <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="enroll__btn d-flex align-items-center justify-content-between">
                    Enroll now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__courses-btn">
                    <Link to="/courses">See all courses</Link>
                  </button>
        </div>

        <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="message__icon">
                    <i class="ri-chat-3-line"></i>
                    </span>{" "}
                    24 x 7 Support
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="message__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    Certified Courses
                  </p>
                </div>

        </div>
        </Col>

        <Col lg="6" md="6">
        <div className="hero__img">
        <img src={heroImg} alt="hero-img" className="w-75" />
        </div>

        </Col>
      </Row>
    </Container>
  </section>

  <section className="pt-0">
        <Category />
      </section>

  <section>
    <Container>
      <Row>
      <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we offer</h5>
              <h2 className="feature__title">Have trust in our courses,</h2>
              <h2 className="feature__title">
                and surely you'll <span>transform your dreams into reality!</span>
              </h2>
      </Col>
      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row>
      <Col lg="12" className="text-center">
              <h2>Recommended Courses</h2>
            </Col>
            <Col lg="12">
              <div className="course__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "courseBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "TECHNOLOGICAL" ? "courseBtnActive" : ""
                  } `}
                  onClick={() => setCategory("TECHNOLOGICAL")}
                >
                  Technological
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "INTERPERSONAL" ? "courseBtnActive" : ""
                  } `}
                  onClick={() => setCategory("INTERPERSONAL")}
                >
                  Interpersonal
                </button>

                <button
                  className= {`d-flex align-items-center gap-2 ${
                    category === "CREATIVE" ? "courseBtnActive" : ""
                  } `}
                  onClick={() => setCategory("CREATIVE")}
                >
                  Creative
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
           
      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="" className="w-75" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__us">
                <h2 className="why__us-title mb-4">
                  Why <span>TheLearnHunt?</span>
                </h2>
                <p className="why__us-title-desc">
                  The one and only spot for the best and most updated 
                  courses on the internet. Be it learning for fun or 
                  becoming a Pro, we have got you covered!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Only The Best Content
                    </p>
                    <p className="choose__us-desc">
                      Reliable and easy to follow content with the aid of excellent professors
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality Support
                    </p>
                    <p className="choose__us-desc">
                      Waiting for too long? That never happens here.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Self-paced Learning{" "}
                    </p>
                    <p className="choose__us-desc">
                      There's no rush or deadlines. Learn at your leisure and explore as much as you'd like!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>


      </Row>
    </Container>
  </section>
  </Helmet>
}

export default Home