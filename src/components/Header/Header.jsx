import React, { PureComponent } from "react";

// Class Component
class Header extends PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.subtitle}</h1>
      </div>
    );
  }
}

// Function Component
/*
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.subtitle}</h1>
    </div>
  );
}
*/

Header.defaultProps = {
   title: "Header title from default props...",
   subtitle:"Content subtitle from default props..."
}

export default Header;
