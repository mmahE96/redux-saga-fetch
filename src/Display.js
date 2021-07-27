import React from 'react'
import { connect } from 'react-redux'


let Display = ({ article }) => (
    
    article ?
    <article  >
      <div>
        <h1>{article.title}</h1>
        
        <h4>{article.description}</h4>
        <a href={article.url} target="_blank">READ MORE</a>
      </div>
    </article> :
    null

    
    );

const mapStateToProps = (state) => ({
article: state.news,
})
Display = connect(mapStateToProps,null)(Display)
export default Display;


  
   
 





