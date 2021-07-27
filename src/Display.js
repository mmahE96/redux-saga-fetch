import React from 'react'
import { connect } from 'react-redux'


let Display = ({ article, stats }) => (
    
    article ?
    <article  >
      <div>
        <h1>{article["1. Information"]}</h1>
        
        <h4>{article["2. Digital Currency Code"]} : {stats["2018-12-31"]["1a. open (CNY)"]} </h4>
        <h4>{article["3. Digital Currency Name"]} : {stats["2018-12-31"]["1b. open (USD)"]} </h4>
        <h4>{article["4. Market Code"]} : {stats["2018-12-31"]["2a. high (CNY)"]} </h4>
        <h4>{article["5. Market Name"]} : {stats["2018-12-31"]["2b. high (USD)"]} </h4>

       
      </div>
    </article> :
    null

    
    );

const mapStateToProps = (state) => ({
article: state.news,
stats: state.numbers
})
Display = connect(mapStateToProps,null)(Display)
export default Display;


  
   
 





