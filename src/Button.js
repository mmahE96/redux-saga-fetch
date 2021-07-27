import React from 'react';
import { connect } from 'react-redux'
import { getNews } from './actions';


function Button({getNews}) {
  return (
    <div>
      <button onClick={getNews}>Data fetch</button>
    </div>
  )
}

const mapDispatchToProps = {
     getNews: getNews,
};

Button = connect(null,mapDispatchToProps)(Button);
export default Button;