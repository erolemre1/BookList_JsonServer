import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { basketDeleted, bookIncrease, bookDecrease } from "./redux/actions/index"
import { Container } from "reactstrap"
import alertify from "alertifyjs"

const Cart = (props) => {
  const totalPrice = props.cart.reduce((total, book) => (total = total + (book.price * book.count)), 0)
  const totalBook = props.cart.reduce((total, book) => (total = total + book.count), 0)

  const totalFunction = (book) => {
    alertify.error(book.title + " Sepetten Çıkartıldı!", 1)
    props.basketDeleted(book.id)
  }
  return (
    <Container>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>
      <h4>Sepetinizde toplam {totalBook} adet kitap var.</h4>
      <h3><span className="fontBold">Toplam Sepet Tutarı:</span>&#8378; {totalPrice.toFixed(2)}</h3>
      {props.cart.map((book, index) => (
        <div className="book" key={index}>
          <img
            src={book.thumbnailUrl}
            alt="Simyacı"
          />
          <div>
            <h2 className="FontBold">{book.title}</h2>
            <p> <span className="fontBold">Yazar: </span><span>{book.authors} </span></p>
            <p> <span className="fontBold">Fiyat: </span><span>&#8378;{book.price}  </span></p>
            <p> <span className="fontBold"> Bu Kitabın Toplam Fiyatı:</span> &#8378;{(book.price * book.count).toFixed(2)} </p>
            <p>Sepetinizde bu kitaptan toplam <span className="fontBold h4">{book.count} </span>  adet var.</p>
            <button className="btn btn-secondary mx-1" onClick={() => props.bookDecrease(book.id)}>-</button>
    
            <button className="btn btn-danger" onClick={() =>totalFunction(book) }>Sepetten Çıkar</button>
            <button className="btn btn-secondary mx-1" onClick={() => props.bookIncrease(book.id)} >+</button>

          </div>
        </div>

      ))}

    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, { basketDeleted, bookIncrease, bookDecrease })(Cart);
