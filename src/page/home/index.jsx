import React from 'react';
import PageTitle from 'component/page_title/index.jsx';
class Home extends React.Component {
  render () {
    return (
      <div id="page-wrapper">
        <PageTitle title="首页" />
        <div className="row">
          <div className="col--md-12" />
          body
        </div>
      </div>
    );
  }
}

export default Home;
