import React from 'react';
import Nav from 'Nav';

// class Main extends React.Component {
//   render() {
//     return (
//       <div>
//         <Nav />
//         <h2>Main Components</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// };

var Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Main Components</h2>
      {props.children}
    </div>
  )
}

export default Main;
