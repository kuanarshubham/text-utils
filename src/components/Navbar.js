

function Navbar(props){

    return (
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>

          <div className={`form-check form-switch mx-4 text-light ${props.mode === "light"?"dark":"light"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleSwitch[0]}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style = {props.mode==="light" ? {color: "black"} : {color: "white"}}>Dark</label>
          </div>

          {/* Pastel Blue*/}
          <div className={`form-check form-switch mx-4 text-light ${props.mode === "light"?"dark":"light"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleSwitch[1]}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style = {props.mode==="light" ? {color: "black"} : {color: "white"}}>Blue</label>
          </div>

          {/* grad red-blue */}
          <div className={`form-check form-switch mx-4 text-light ${props.mode === "light"?"dark":"light"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleSwitch[2]}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style = {props.mode==="light" ? {color: "black"} : {color: "white"}}>Red</label>
          </div>
        </div>
      </nav>
    );
}

// Navbar.propsTypes = {
//     title: propsTypes.string
// }

export default Navbar;