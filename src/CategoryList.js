import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state =
    //     {
    //         categories: [
    //             { categoryId: 1, categoryname: "Beverage" },
    //             { categoryId: 2, categoryname: "Contiments" }
    //         ],
    //     }
    // }
    state = {
        categories: []
    }

    //component yerleşti.
    componentDidMount() {
        this.getCategories();
    }


    //urli çalıştırıyor 
    //daha sonra çalıştırdıktan sonra sonucu jsona döndürüyor.
    //en son da dönen datayı thene gönderiyor.Statei değiştiriyoruz ve state değerinidata yapıyoruz.
    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(data => this.setState({ categories: data }));;
    }

    render() {//render componentleri değişen veriye göre yenileme sürecidir
        //mevcut kategorinin ismi gelen kategorinin ismine eşitse true  değilse false
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <ListGroup>
                    {this.state.categories.map(category =>
                        <ListGroupItem active={category.categoryName === this.props.currentCategory ? true : false}
                            onClick={() => this.props.changeCategory(category)} key={category.id}>
                            {category.categoryName}
                        </ListGroupItem>)}
                </ListGroup>
                <h4>{this.props.currentCategory}</h4>
            </div>
        );
    }
} 
