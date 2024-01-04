import React from "react";
import "./header-component.css";
class Header extends React.Component {
  render() {
    let content = this.props.parentToChild;
    return (
      <div class="header-container">
        <h5>{content}</h5>
    </div>
    )
  }
}


export default Header;
