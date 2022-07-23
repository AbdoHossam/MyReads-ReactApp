import React, {Component} from 'react'
import BookShelf from './BookShelf'


class BooksList extends Component {
    render() {
        const {books, shelves, onChangeShelf} = this.props;
        function shelfBooks(shelf) {
            return books.filter((book) => book.shelf === shelf.key)
        }
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                    <div className="list-books-content">
                        <div>
                         {shelves.map(shelf => (
                             <BookShelf key={shelf.key} shelf={shelf} books={shelfBooks(shelf)} onChangeShelf={onChangeShelf} />
                            ))}
                        </div>
                    </div>
            </div>
        )
    }
}
export default BooksList