import React from 'react';

class Article extends React.Component{
    deleteArticle=(event)=>{
        event.preventDefault();
        this.props.deleteArticle(this.props.id);
    }
    render(){
        return(
            <div className="article">
             <h2>Title : {this.props.title}</h2>
             <sub>Author : {this.props.author}</sub>
             <p>
                 Content : {this.props.content}
             </p>    
             <a  href="#" onClick ={this.deleteArticle}>Delete</a>                                                                           
            </div>
        );
    }
}

export default Article;