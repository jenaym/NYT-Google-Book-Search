import React, { Component } from "react";

import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List } from "../components/List";

import Book from "../components/Book";
import Card from "../components/Card";

class SavedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
    .then(res => this.setState({ books: res.data }))
    .catch(err => console.log(err));
  }

  handleDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Books</h1>
            </Jumbotron>
                <Card title="Saved Books">
                  {this.state.books.length ? (
                    <List>
                      {this.state.books.map(book => (
                        <Book key={book._id}
                          title={book.title}
                          authors={book.authors}
                          description={book.description}
                          link={book.link}
                          image={book.image} 
                          Button={() => (
                            <button onClick={() => this.handleDelete(book._id)}
                            className="btn btn-primary">Delete</button>
                          )}
                        />
                      ))}
                    </List>
                  ) : (
                    <h3>No Results to Display</h3>
                  )}  
                </Card>
              </Col>

            </Row>
      </Container>
    );
  }
}

export default SavedBooks;
