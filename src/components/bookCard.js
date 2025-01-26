import React, { Component } from 'react';

class BookCard extends Component {
  render() {
    const { title, author, isbn } = this.props.book;
    return (
      <div className="book-card">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>ISBN: {isbn}</p>
      </div>
    );
  }
}

export default BookCard;