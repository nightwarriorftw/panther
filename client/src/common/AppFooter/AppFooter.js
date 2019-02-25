import React, { Component } from 'react';

class DefaultFooter extends Component {
  render() {
      
    return (
      <div>
          <span><a href="https://coreui.io">CoreUI</a> &copy; 2018 creativeLabs.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
      </div>
    );
  }
}

export default DefaultFooter;
