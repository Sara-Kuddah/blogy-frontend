import React from 'react';

class Article extends React.Component{
    render(){
        return(
            <div className="article">
             <h2>Title : {this.props.title}</h2>
             <sub>Author : {this.props.author}</sub>
             <p>
                 Content : {this.props.content}
             </p>                                                                               
            </div>
        );
    }
}

export default Article;