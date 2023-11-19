import React, { Component } from 'react';
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from 'reactstrap';//Containerı ve rowu kullanabilmek için eklendi
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import sign from './sign';
import Sign from './sign';


export default class App extends Component {
  //component yerleşti.
  componentDidMount() {
    this.getProducts();
  }
  state = { currentCategory: "", products: [], cart: [] }
  //arrow function = fonksiyonlar aslında bir değişken aslında 
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category);
    this.getProducts(category.id)//buraya eklememizdeki sebep category sayfasında yer alan derğişkene erişmek 
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;//url sonuna değişkenlerimiz arasında yer alan seoUrli koyarız.
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));;
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      //Gçnderilen elemanı 1 adadi ile yeni sepete ekleriz.
      newCart.push({ product: product, quantity: 1 });
    }
    newCart.push({ product: product, quantity: 1 });
    this.setState({ cart: newCart });
  }

  render() {
    let productinfo = { title: "ProductList", default: "defaultValue" }
    let categoryinfo = { title: "Online Marketiniz" }
    return (//jsx -> javşascript xml yapısını ifade ediyor
      //changeCategory fonklsiyonun evenmtini ona gönderdim
      //navbara cart gönderilir.
      <div>
        <Container>
          <Navi cart={this.state.cart} />
          <Row>
            
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryinfo}
              />

            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProductList
                      cart={this.state.cart}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={productinfo}
                    />
                  }
                />
                <Route path="/sign" element={<Sign />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

