import React,{Component} from 'react'
import Home from './Home'
import Book from './Book'
import * as BookAPI from './BooksAPI'

class BookSearch extends Component {
    state= {
        searchResults : [],
        value: ''
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState({value:value});

        if(value.length > 0) {
            BookAPI.search(value).then(book=>{
                if(book.error){
                    this.setState({searchResults:[]});
                }
                else{
                    this.setState({searchResults : book});
                }
            }).catch(this.setState({searchResults:[]}));
        }else{
            this.setState({searchResults:[]});
        }
    };
    searchReset = () => {
        this.setState({searchResults:[]});
    }

    render(){
        const { books, onChangeShelf } = this.props;
        this.state.searchResults.forEach(function(searched) {
            books.forEach(function(book) {
                if(book.id === searched.id){
                    searched.shelf = book.shelf;
                }
            });
           if(!searched.shelf){
               searched.shelf='none';
           }
        });
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Home resetSearch={this.resetSearch} />
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange} />
             
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResults.map(book => (
                        <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
                         ))}
                    </ol>
                 </div>
            </div>
        )
    }
}
export default BookSearch