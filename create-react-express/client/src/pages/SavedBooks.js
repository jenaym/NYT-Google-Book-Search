import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getSavedBooks()
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  handleDelete = id => {
    API.deleteBook(id).then(res =>
      API.getSavedBooks()
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err))
      )
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Jumbotron>
              <h1>Saved Books</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Row>
                      <Col>
                        <h1>{book.title}</h1>
                        <h3>{book.authors}</h3>
                      </Col>
                      <Col>
                        <Link to={"/books/" + book._id}>View</Link>
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>{book.image}</Col>
                      <Col>{book.description}</Col>
                    </Row>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            <Jumbotron>
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
