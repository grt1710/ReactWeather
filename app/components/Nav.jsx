var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e){
    e.preventDefault();
    var searchValue = this.refs.navsearch.value;
    var encodedSearchValue = encodeURIComponent(searchValue);

    if (searchValue.length > 0){
      this.refs.navsearch.value = "";
      window.location.hash = "#/?location="+encodedSearchValue;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeclassNameName='active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeclassNameName='active' activeStyle={{fontWeight:'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeclassNameName='active' activeStyle={{fontWeight:'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather by City" ref="navsearch"/>
              </li>
              <li>
                <button type="submit" className="button">Search</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
