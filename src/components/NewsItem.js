import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, date, source } = this.props
    return (
      <div>
        <div className="card border-info mb-10 my-2 " >
          <img src={!imageUrl?"https://i.ndtvimg.com/i/2017-04/asteroid-generic-istock-650_650x400_41492570432.jpg" : imageUrl} className="card-img-top " alt="..." />
          <div className="card-body ">
            <div className='face'>
              <h5 className="card-front">{title}  <small><span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}> {source} </span></small>
                <small style={{ cursor: 'pointer' }}><span className="badge bg-secondary">New</span> </small></h5>
            </div>
            <div className='back'>
              <p className="card-back">{description}...</p>
            </div>
            <small className="text-body-secondary my-2">Last updated {new Date(date).toGMTString()}</small><br />
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-light btn-outline-info my-2">Read More...</a>

          </div>
        </div>
      </div >
      
    )
  }
}

export default NewsItem
