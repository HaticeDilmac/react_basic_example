import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  render() {
    const { products, addToCart, currentCategory, info } = this.props;

    return (
      <div>
        {/* <h2>{info.title}-{currentCategory}</h2> */}
        <Row>
          {products.map(product => (
            <Col key={product.id} md={4}>
              <ProductCard
                product={product}
                addToCart={addToCart}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

class ProductCard extends Component {
  render() {
    const { product, addToCart } = this.props;

    return (
       
      <Card className="mb-3" >
             <div  >
            <Button  onClick={() => addToCart(product)} color="danger">
            +
            </Button>
          </div>
        {/* Eğer product resminin bir URL'si varsa */}
        {product.imageURL && (
          <img src={product.imageURL} alt={product.productName} className="card-img-top" />
        )}

        <CardBody>
          <CardTitle tag="h5">{product.productName}</CardTitle>
          <CardText>
            <strong>Quantity Per Unit:</strong> {product.quantityPerUnit}<br />
            <strong>Unit Price:</strong> {product.unitPrice}<br />
            <strong>Units In Stock:</strong> {product.unitsInStock} 
          </CardText>
         
          {/* <Button  onClick={() => addToCart(product)} color="info">
           Satın Al
          </Button> */} 
          <Link to="/sign"> 
               <Button color="info"> Satın Al  </Button>
           </Link> 
        </CardBody>
      </Card>
    );
  }
}
 
  



// import React, { Component } from 'react';
// // import { Table } from "reactstrap";
// import  { Button } from 'reactstrap';

// export default class ProductList extends Component {



//     render() {//render componentleri değişen veriye göre yenileme sürecidir
//         return (
//             <div>
//                 <h2>{this.props.info.title}-{this.props.currentCategory}</h2>
//                 {/* <h2>{this.props.info.default}-{this.props.currentCategory}</h2> */}
//                 <table class="table">
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Product Name</th>
//                             <th>Quantity Per unit</th>
//                             <th >unitPrice</th>
//                             <th>Unit In Stock</th>
//                             <th>{this.props.cart.length}</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.props.products.map(product => (
//                             <tr key={product.id}>
//                                 <th  >{product.id}</th>
//                                 <td>{product.productName}</td>
//                                 <td>{product.quantityPerUnit}</td>
//                                 <td>{product.unitPrice}</td>
//                                 <td>{product.unitsInStock}</td>
//                                 <td> <Button onClick={()=>this.props.addToCart(product)}  color="info"> Add</Button></td>
                           
//                             </tr>
//                         ))}

//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// } 


//import React, { Component } from 'react';
// import { Button, Card, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';

// export default class ProductList extends Component {
//   render() {
//     return (
//       <div>
//         <h2>{this.props.info.title}-{this.props.currentCategory}</h2>
//         <Row>
//           {this.props.products.map(product => (
//             <Col key={product.id} md={6}>
//               <ProductCard
//                 product={product}
//                 addToCart={this.props.addToCart}
//               />
//             </Col>
//           ))}
//         </Row>
//       </div>
//     );
//   }
// }

// class ProductCard extends Component {
//   render() {
//     const { product, addToCart } = this.props;

//     return (
//       <Card className="mb-3">
//         <CardBody>
//           <CardTitle tag="h5">{product.productName}</CardTitle>
//           <CardText>
//             <strong>Quantity Per Unit:</strong> {product.quantityPerUnit}<br />
//             <strong>Unit Price:</strong> {product.unitPrice}<br />
//             <strong>Units In Stock:</strong> {product.unitsInStock}
//           </CardText>
//           <Button onClick={() => addToCart(product)} color="info">
//             Add to Cart
//           </Button>
//         </CardBody>
//       </Card>
//     );
//   }
// }