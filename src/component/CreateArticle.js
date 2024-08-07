import React, { Component } from 'react'


class CreateArticle extends Component{
    render(){
        console.log('CreateArticle 실행');

        return(
        <article>
            <h2>Creat Task</h2>
            <form action="/create_process" method="POST" onSubmit={e=>{
                e.preventDefault();
                this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }}>
                <p>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" placeholder="title" id="title" required/>
                </p>
                <p>
                    <label htmlFor="desc">Description:</label>
                    <textarea id="desc" name="desc" placeholder="description"></textarea>
                </p>
                <button className="primary">Submit</button>
                </form>
        </article>
        )
    }
}

export default CreateArticle;