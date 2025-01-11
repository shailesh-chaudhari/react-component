import React, { Component } from "react"
import BlogCard from './BlogCard';
import './App.css'
import { isArrayEmpty } from './utils';
import classes from './BlogCard.Module.css'

class App extends Component {
  state = {
    showBlog: true,
    blogArr: [
      {
        id: 1,
        title: "Blog Title 1",
        description: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum ",
        likeCount: 0
      },
      {
        id: 2,
        title: "Blog Title 2",
        description: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum ",
        likeCount: 0
      },
      {
        id: 3,
        title: "Blog Title 3",
        description: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum ",
        likeCount: 0
      }
    ]

  }

  onLikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr
    const updatedBlogObj = updatedBlogList[pos]

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1
    updatedBlogList[pos] = updatedBlogObj

    this.setState({ blogArr: updatedBlogList })
    // console.log(updatedBlogObj)
  }



  onHideBtnClick = () => {
    //  let updatedState = !this.state.showBlog
    this.setState((prevState, prevProps) => {
      return { showBlog: !prevState.showBlog }
    })
    // console.log(this.state.showBlog)
  }



  render() {
    //console.log('Render called')
    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {

      return (
        <BlogCard className={'Blog'} key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id} onLikeBtnClick={() => this.onLikeBtnClick(pos)} />
        // <div className="BlogCard" key={item.id}>
        //   <h3>{item.title}</h3>
        //   <p>{item.description}</p>
        // </div> 
      )
    })
    return (
      <div className="App" >
        <button className={classes.ShowHideBtn} onClick={this.onHideBtnClick}>{this.state.showBlog ? 'Hide List' : 'Show List'}</button>
        {this.state.showBlog ? blogCards : null}
      </div>
    )
  }

}

export default App;
