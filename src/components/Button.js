import React from 'react';

class Button extends React.Component {
  render() {
    const { color } = this.props;
    return <button style={{ backgroundColor: color }}></button>;
  }
}

Button.propTypes = {
  color: React.PropTypes.string
};

export default Button;