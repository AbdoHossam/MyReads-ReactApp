import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component{
    render(){
        const{shelf, books,onChangeShelf} = this.props;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookself-books">
                <ul className="book-grid">
                    <li>
                        {books.map(book => (
                            <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
                        ))}
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}
export default BookShelf