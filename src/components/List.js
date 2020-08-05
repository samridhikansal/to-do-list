import React, { Component } from "react";

import { connect } from "react-redux";
import listReducer from "../reducer/listReducer";

class List extends Component {
  render() {
    var list = this.props;
    console.log(list);
    return (
      <div>
        <ul>
          {list.listitem.map((item) => {
            return <li>{item.listItem}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return { listitem: state };
};
export default connect(mapStatetoProps)(List);
