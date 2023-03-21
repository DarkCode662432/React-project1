import { Link, NavLink } from "react-router-dom";

function Header(){
  return (
    <>
      <header className="hide-when-mobile">
        <h1><NavLink to="/">Courses 4 Arab</NavLink></h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            <ul className="sub-ul">
              <li>
                <Link to="#test">Full Course</Link>
              </li>
              <li>
                <Link to="#test">Crash Course</Link>
              </li>
              <li>
                <Link to="#test">learn in 1h</Link>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
            <ul className="sub-ul">
              <li>
                <Link to="#test">Full Course</Link>
              </li>
              <li>
                <Link to="#test">CSS Examples</Link>
              </li>
              <li className="mini-projects">
                <Link to="#test">mini projects&nbsp; + </Link>
                <ul className="sub-sub-ul">
                  <li>
                    <Link to="#test">project 1</Link>
                  </li>
                  <li>
                    <Link to="#test">project 2</Link>
                  </li>
                  <li>
                    <Link to="#test">project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <Link to="#test">coming soon🔥</Link>
              </li>
            </ul>
          </li> 
        </ul>
      </header>

      <header className="show-when-mobile">
        <h1>Courses 4 Arab</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="#test">Full Course</Link>
              </li>
              <li>
                <Link to="#test">Crash Course</Link>
              </li>
              <li>
                <Link to="#test">learn in 1h</Link>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="#test">Full Course</Link>
              </li>
              <li>
                <Link to="#test">CSS Examples</Link>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <Link to="#test">project 1</Link>
                  </li>
                  <li>
                    <Link to="#test">project 2</Link>
                  </li>
                  <li>
                    <Link to="#test">project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="#test">coming soon🔥</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
