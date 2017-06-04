var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h3>Examples Component</h3>
//       </div>
//     );
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Bangalore">Bangalore Weather</Link>
        </li>
        <li>
          <Link to="/?location=Chennai">Chennai Weather</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
