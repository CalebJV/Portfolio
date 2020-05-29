import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Caleb Vautier',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
      ],
      projects: {
        title: 'My Work',
        subTitle: "Check out some of the projects I've worked on",
      },
      home: {
        title: 'Caleb Vautier',
        subTitle: 'Welcome to my portfolio',
      },
      contact: {
        title: 'Get in Touch',
      },
    };
  }

  render() {
    return (
      <Router>
        <Container
          className="p-0 d-flex flex-column justify-content-start min-vh-100 c-navbar"
          fluid={true}
        >
          <Navbar
            className="border-bottom fixed-top primary-background-color"
            expand="md"
          >
            <Navbar.Brand>
              <Link to="/">Caleb Vautier</Link>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
              />
            )}
          />

          <Route
            path="/projects"
            exact
            render={() => (
              <ProjectsPage
                title={this.state.projects.title}
                subTitle={this.state.projects.subTitle}
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
