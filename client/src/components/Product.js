import React from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import  "../App.css"
import { useEffect } from "react";
import { connect } from "react-redux";
import { basketAdded,initialState } from "./redux/actions/index";


const Product = (props) => {
  useEffect(() => {
    const url = "http://localhost:3000/posts"
    fetch(url)
    .then( response => response.json())
    .then(resdata => props.initialState(resdata))
  }, [] ); 

  const totalBook = props.cart.reduce((total, book) => (total = total + book.count), 0)
  
  const totalFunction = (book) => {
    alertify.success(book.title + " Sepete Eklendi.", 1)
    props.basketAdded(book);
  } 
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim({props.cart.length})({totalBook})</Link>
      </h2>
      {props.booklist.map((book,index) =>
        <div className="book" key={index}>
          <img
            src={book.thumbnailUrl}
            alt="Simyaci"
          />
          <div>
            <h4 className="fontBold">{book.title}</h4>
            <p> <span className="fontBold">Yazar: </span><span>{book.authors} </span></p>
            <p> <span className="fontBold">Fiyat: </span><span>&#8378;{book.price}  </span></p>
            <p> <span className="fontBold">Sayfa Sayısı: </span><span>{book.pageCount === 0 ? 58 : book.pageCount }  </span></p>
            <button className="btn btn-primary" onClick={() => totalFunction(book)}> Sepete Ekle</button>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    booklist: state.booklist,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { basketAdded, initialState })(Product);
