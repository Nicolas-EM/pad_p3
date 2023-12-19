import axios from 'axios';
import ReactDOM from 'react-dom/client';
import BookCard from './BookCard';

function Search() {
    function searchBooks(event) {
        event.preventDefault();

        const default_thumbnail_url = "https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4="
        const apiKey = "AIzaSyARjoFFYw_iyO-qYuNuXap8yWa2q9WCjqo";

        const searchType = document.querySelector('input[name="searchType"]:checked').value;
        const textInput = document.getElementById("searchQuery").value
        const searchQuery = `${searchType}${textInput}`;

        if (textInput) {
            console.log("Searching:", searchQuery);

            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}&maxResults=40`)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    const books = response.data.items;
                    const bookComponents = [];

                    for (let x in books) {
                        const bookInfo = books[x].volumeInfo;
                        const authors = bookInfo.authors || [];
                    
                        let authorsString = authors.join(', ');
                    
                        // Create book
                        const book = {
                            imagesrc: bookInfo.imageLinks?.thumbnail || default_thumbnail_url,
                            title: bookInfo.title || 'No Title',
                            author: authorsString || 'Unknown Author',
                            infoLink: bookInfo.infoLink || '#',
                        };
                    
                        // Create a BookCard component and add it to the array
                        bookComponents.push(<BookCard key={x} book={book} />);
                    }
                    
                    // Render the array of BookCard components in the "booksRow" div
                    const booksRoot = document.getElementById('booksRow');
                    const root = ReactDOM.createRoot(booksRoot);
                    root.render(bookComponents);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    };

    return (
        <form id="searchForm" onSubmit={searchBooks}>
            {/* Query text field */}
            <div className="mb-3">  
                <label htmlFor="searchQuery" className="form-label">Search:</label>
                <input type="text" className="form-control" id="searchQuery" aria-describedby="searchHelp"></input>
                <div id="searchHelp" className="form-text">
                    Enter a book title or author
                </div>
            </div>
            {/* Search type radio btns */}
            <div className="form-check">
                <input className="form-check-input" type="radio" name="searchType" id="radioBtntitle" value="intitle:" defaultChecked></input>
                <label className="form-check-label" htmlFor="radioBtntitle">Search by Title</label>
            </div>
            <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="searchType" id="radioBtnAuthor" value="inauthor:"></input>
                <label className="form-check-label" htmlFor="radioBtnAuthor">Search by Author</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Search;