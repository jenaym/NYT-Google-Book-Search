import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
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

  loadBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({ books: res.data })
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadBooks();
  };

  handleSave = id => {
    const book = this.state.books.find(book => book.id === id);

      API.saveBook({
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        link: book.volumeInfo.imageLink,
        image: book.volumeInfo.imageLink.thumbnail,
        googleBookId: book.id
      })
      .then(() => this.loadBooks());
    
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Google Books Search</h1>
            </Jumbotron>
            <Card title="Book Search" icon="far fa-book">
            <form>
              <Input
                value={this.props.q}
                onChange={this.handleInputChange}
                name="q"
                placeholder="Title (required)"
                onClick={this.handleFormSubmit}
              />
              <FormBtn
                // disabled={!(this.state.q)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <Card title="Book Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                  <ListItem>
                    <Book key={book._id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      link={book.volumeInfo.infoLink}
                      image={book.volumeInfo.imageLinks.thumbnail} 
                    />
                    <FormBtn onClick={() => this.handleSave(book._id)}></FormBtn>
                  </ListItem>
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
