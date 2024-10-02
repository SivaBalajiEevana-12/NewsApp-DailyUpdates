import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
  const [articles,setarticles]=useState([]);
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)

  // constructor(props) {
  //   super(props);
  //   console.log('Hello Iam a Constructor')
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults: 0,
      
  //   }
    document.title=`${props.catogery} - NewsMonkey`;
  // }
const updateNews=async ()=> {
   props.setProgress(10);
  
    let url = `https://newsapi.org/v2/top-headlines?counry=us&category=${props.catogery}&apikey=5eff073b1e014bfe8d1a8b3f84e6a1e9&page=${page}&pageSize=${props.pageSize}`;
    console.log(url);
   setLoading(true)
   props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(40);
    // let a=this;
    let parsedata = await data.json();
    props.setProgress(50);
   setLoading(false)
   props.setProgress(70);
     setPage(page+1)
      setarticles(parsedata.articles)
      setTotalResults(parsedata.totalResults)
props.setProgress(100);
  }
useEffect(()=>{
updateNews();
},[props.category])

  // async componentDidMount() {
  //   // let url=`https://newsapi.org/v2/top-headlines?counry=us&category=${this.props.catogery}&apikey=5eff073b1e014bfe8d1a8b3f84e6a1e9&page=1&pageSize=12`;
  //   // let data=await fetch(url);
  //   // // let a=this;
  //   // let parsedata=await data.json();
  //   // this.setState({ articles: parsedata.articles,totalResults:parsedata.totalResults });
  //   this.updateNews();
  // }
  const handleNext = async () => {
    console.log("Next")
    //   if(!(this.state.page+1>Math.ceil(this.state.totalResults/12))){


    //   let url=`https://newsapi.org/v2/top-headlines?counry=us&category=${this.props.catogery}&apikey=5eff073b1e014bfe8d1a8b3f84e6a1e9&page=${this.state.page+1}&pageSize=12`;
    //   console.log(url);
    //   this.setState({loading:true})
    //   let data=await fetch(url);
    //   // let a=this;
    //   let parsedata=await data.json();
    //   this.setState({loading:false})
    //   this.setState({
    //     page: this.state.page+  1,
    //     articles: parsedata.articles,
    //     totalResults:parsedata.totalResults
    // })
   setPage(page + 1 )
   updateNews()
  }
  // fetchMoreData = async () => {
  //   // a fake async api call like which sends
  //   // 20 more records in 1.5 secs
  //   this.setState({ page: this.state.page + 1 })
  //     let url = `https://newsapi.org/v2/top-headlines?counry=us&category=${this.props.catogery}&apikey=5eff073b1e014bfe8d1a8b3f84e6a1e9&page=${this.state.page + 1}&pageSize=12`;
  //     console.log(url);
  //     let data = await fetch(url);
  //     // let a=this;
  //     let parsedata = await data.json();
   
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles:this.state.articles.concat(parsedata.articles),
  //       totalResults: parsedata.totalResults
  //     })
  // };

  const handlePrev = async () => {
    console.log("Previous")
    //   let url=`https://newsapi.org/v2/top-headlines?counry=us&category=${this.props.catogery}&apikey=5eff073b1e014bfe8d1a8b3f84e6a1e9&page=${this.state.page-1}&pageSize=12`;
    //   let data=await fetch(url);
    //   // let a=this;
    //   let parsedata=await data.json();

    //   this.setState({
    //     page: this.state.page - 1,
    //     articles: parsedata.articles,
    //     totalResults:parsedata.totalResults
    // })
    setPage(page-1)
    updateNews()
  }

    return (
      <>
      <div className='container'>
        {loading &&<Spinner/>}
        <div className='container d-flex justify-content-between'>
          <button disabled={page <= 1} type="button" className="btn btn-dark my-2" onClick={handlePrev}>&larr; Previous</button>
          <button type="button" className="btn btn-dark my-2" id="next" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} onClick={handleNext}>Next &rarr;</button>
        </div>
        <h1 className='text-center'>Latest News-Top HeadLines from {props.catogery}</h1>
        {/* {state.loading && <Spinner />} */}
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}
          > */}

        <div className='row'>
        {articles.map((element) => {
          return <div className='col-md-3 d-inline-block mx-5' key={element.url}>
            <NewsItem title={element.title === null ? element.title : element.title.slice(0, 50)} description={element.description === null ? element.description : element.description.slice(0, 50)} url={element.urlToImage}
              newsurl={element.url} author={element.author} date={element.publishedAt} name={element.source.id} />
              </div>
        })}
        </div>
{/* </InfiniteScroll> */}
        {/* <div className='col-md-3 my-2'><NewsItem/></div>
          <div className='col-md-3 my-1 '><NewsItem/></div>
          <div className='col-md-3 my-1'><NewsItem/></div>
        </div>
        <div className='row my-2'>
          <div className='col-md-3 my-1'>
          <NewsItem title='myTitle' description='myDescription'/>
          </div>
          <div className='col-md-3 my-1'><NewsItem/></div>
          <div className='col-md-3 my-1'><NewsItem/></div>
          <div className='col-md-3 my-1'><NewsItem/></div>
        </div>
        <div className='row my-2'>
          <div className='col-md-3 my-1'>
          <NewsItem title='myTitle' description='myDescription'/>
          </div>
          <div className='col-md-3 my-1'><NewsItem/></div>
          <div className='col-md-3 my-1'><NewsItem/></div>
          <div className='col-md-3 my-1'><NewsItem/></div>     */}

      </div>
      

      </>
    )
  }



News.defaultProps = {
  country: 'in',
  pageSize: 8,
  catogery: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News
