import React from 'react';

export default function BookItem(props) {
    return (
        <div class="p-2 bd-highlight">
            <div class="card" key={props.index}>
                <div class="card-body">
                    <h3 class="card-title">{props.book.name}</h3>
                    <h5 class="card-subtitle mb-2 text-muted">Book {props.index + 1}</h5>

                    <div class="card-text" className="details">
                        <p>ISBN: {props.book.isbn}</p>
                        <p>Authors: {props.book.authors.join(', ')}</p>
                        <p>Number of pages: {props.book.numberOfPages}</p>
                        <p>Publisher: {props.book.publisher}</p>
                        <p>Country: {props.book.country}</p>
                    </div>
                </div>

            </div>
        </div>

    );
}