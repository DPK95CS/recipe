import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Payment extends Component {
  constructor(props) {
    super(props);

    this.getItem = this.getItem.bind(this);

    this.state = {
      currentItem: {
        id: null,
        items: []
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getItem(this.props.match.params.id);
  }
  getItem(id) {
    fetch("http://starlord.hackerearth.com/recipe")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
            currentItem:{
          id: id,
          items: result[id]
        }});
        console.log(result);
        console.log(this.state.currentItem.items);
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
    const { currentItem } = this.state;

    return (
      <div>
        {currentItem ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="title">Item</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  readOnly = {true}
                  defaultValue={currentItem.items.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Price</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly = {true}
                  id="price"
                  defaultValue={currentItem.items.price}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Enter credit/debit card number</label>
                <input
                  type="text"
                  className="form-control"
                  id="creditdebitnumber"
                  defaultValue={0}
                />
              </div>

            </form>

              <Link 
    to={"/otp/"}
                className="badge badge-warning"
              >
                SUBMIT
      </Link>
            
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Item...</p>
          </div>
        )}
      </div>
    );
  }
}