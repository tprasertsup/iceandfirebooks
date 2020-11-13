import React, { useState } from 'react';
import axios from 'axios';
import ProductItem from './BookItem';
import { Button } from 'react-bootstrap';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function BooksGrid() {

    const [books, setbooks] = useState(null)
    const [showScroll, setShowScroll] = useState(false)

    const apiURL = "https://www.anapioficeandfire.com/api/books";
    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setbooks(response.data)
        console.log(response.data)
    }

    return (
        <div>
            <h2>Fetch a list from an API and display it</h2>

            <div>
                <Button className="fetch-button" onClick={fetchData}>
                    Fetch Data
        </Button>
            </div>
            <div class="d-flex flex-wrap justify-content-center bd-highlight mb-3 book">
                {books &&
                    books.map((book, index) => <ProductItem book={book} index={index} />)}
            </div>
        </div >

    );
}