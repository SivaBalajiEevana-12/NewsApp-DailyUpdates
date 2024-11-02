import React from 'react'
// import React from 'react'



import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './Search';
// import News from './News';

export default function NavBar() {
 
  //wojtekmaj.pl
 
const handleOnclick=(e)=>{
  let b=e.target.value;
  <Search value={b}/>
}

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link> </li> */}
                <li className="nav-item"><Link className="nav-link" to="/business"> Business</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment"> Entertainment</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/health"> Health</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/science"> Science </Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/sports"> Sports</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/technology"> Technology</Link> </li>
                {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a> */}
                {/* <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul> */}
                {/* </li>
                            <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li> */}
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2 search-input" type="search"  name="search-form" id="search-form" placeholder="Search user" aria-label="Search" />
                <button className="btn btn-outline-success" onClick={handleOnclick} type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  
}
