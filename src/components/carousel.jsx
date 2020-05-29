import React, { Component } from 'react';

import { BrowserRouter as Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './card';

import SDA from '../assets/images/sda2.png';
import OneTechnology from '../assets/images/OneTechnology2.png';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Some Damn Agency',
          subTitle: 'Digital Ad solutions Agency',
          imgSrc: SDA,
          imgBG: '#EA595E',
          link: 'https://www.somedamnagency.com/',
          linkText: 'View',
          selected: false,
        },
        {
          id: 1,
          title: 'One Technology',
          subTitle: 'Total Tech Solutions',
          imgSrc: OneTechnology,
          imgBG: '#004563',
          link: 'https://www.onetechnology.nz/',
          linkText: 'View',
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid="lg">
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
          <div className=" card-flip align-self-center">
            <Link
              to="/contact"
              className="align-self-center d-flex justify-content-around align-items-center position-relative c-blank-cont"
            >
              <div className="c-blank c-card-front position-relative d-flex align-items-center justify-content-around">
                <p className="c-card-title text-center px-4 py-5">
                  Help fill this space
                </p>
              </div>
              <div className="c-blank c-card-back position-absolute d-flex align-items-center justify-content-around">
                <p className="c-card-title text-center px-4 py-5">
                  Get in Touch!
                </p>
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Carousel;
