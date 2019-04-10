import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Input from "../components/Form";
import Book from "../components/Book";
import Card from "../components/Card";


class Books extends Component {

  state = {
    books: [],
    q: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  loadBooks = () => {
    API.getBooks(this.state.q)
      .then(res => {
        console.log(res);

        this.setState({ books: res.data })
      }
      )
      .catch(() =>
      this.setState({
        books: [],
      })
    );
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  onSubmit = event => {
    event.preventDefault();
    this.loadBooks();
  };

  handleSave = id => {
    const book = this.state.books.find(book => book.id === id);

      API.saveBook({
        googleBookId: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        link: book.volumeInfo.infoLink,
        image: book.volumeInfo.imageLinks.thumbnail,
      })
      .then(() => this.loadBooks());
    
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Google Books Search</h1>
        </Jumbotron>
        <Row>
          <Col size="md-12">
            {/* <Jumbotron>
              <h1>Google Books Search</h1>
            </Jumbotron> */}
            <Card title="Book Search" icon="far fa-book">
              <Input
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <Card title="Book Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book key={book.id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      link={book.volumeInfo.infoLink}
                      image={book.volumeInfo.imageLinks.thumbnail} 
                      Button={() => (
                        <button onClick={() => this.handleSave(book.id)}
                        className="btn btn-primary">Save</button>
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

export default Books;
