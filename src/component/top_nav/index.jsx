import React from 'react';
import {Link} from 'react-router-dom';

class TopNav extends React.Component {
  constructor (props) {
    super (props);
  }
  //退出登录
  onLogout () {}

  render () {
    return (
      <nav className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/"><b>HAPPY</b>MMALL</Link>
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a
              className="dropdown-toggle"
              data-toggle="dropdown"
              href="javascript:;"
            >
              <i className="fa fa-user fa-fw" />
              <span>欢迎，admin</span>
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a
                  onClick={() => {
                    this.onLogout ();
                  }}
                >
                  <i className="fa fa-sign-out fa-fw" />
                  <span>退出登录</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopNav;
