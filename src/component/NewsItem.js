

import React from 'react'

function NewsItem(props) {



    return (
      <div className='my-3'>
        <div className="card">
          <img src={props.url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}... <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.name}
              <span class="visually-hidden">unread messages</span>
            </span></h5>
            <p className="card-text">{props.description}...</p>
            <p class="card-text"><small class="text-body-secondary">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
          </div>
          <a href={props.newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>

    )
  
}

export default NewsItem
