import React from 'react';
import './index.css';
class Login extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      userName: '',
      password: '',
    };
  }
  // 获取输入框的值
  inputChange (e) {
    let inputValue = e.target.value, inputName = e.target.name;
    this.setState ({
      [inputName]: inputValue,
    });
  }
  // 提交登录
  onsubmit (e) {
    
    e.preventDefault()
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">
            <div className="panel-heading">欢迎登录，HAPPY MMALL</div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">用户名</label>
                  <input
                    type="text"
                    id="user"
                    name="userName"
                    className="form-control"
                    placeholder="请输入用户名"
                    onChange={e => this.inputChange (e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">密码</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="请输入密码"
                    onChange={e => this.inputChange (e)}
                  />
                </div>
                <button
                  className="btn btn-primary btn-block"
                  onClick={e => this.onsubmit (e)}
                >
                  登录
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
