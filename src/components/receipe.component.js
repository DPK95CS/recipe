import React, { Component } from "react";

export default class Receipe extends Component {
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
            <h4>DETAILS</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Item</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  readOnly ={true}
                  defaultValue={currentItem.items.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  readOnly = {true}
                  className="form-control"
                  id="description"
                  defaultValue={currentItem.items.description}
                />
              </div>

            </form>

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