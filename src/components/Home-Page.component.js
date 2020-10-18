import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {CardColumns } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("http://starlord.hackerearth.com/recipe")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }

  render() {
    const { error, isLoaded, items} = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <ul>

          {items.map(item => (
        <CardColumns>
    <Card style={{ width: '18rem' }} key={item.name}>
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
          <Card.Title>{item.name}{" /Price : "}{item.price}</Card.Title>
    <Link 
    to={"/payment/" + item.id}
                className="badge badge-warning"
              >
                PAYMENT
      </Link>
    <Link 
    to={"/receipes/" + item.id}
                className="badge badge-warning"
              >
                DETAILS
      </Link>
    </Card.Body>
    </Card>
    </CardColumns>   
          ))}
        </ul>
      );
    }
}
}

export default Home;