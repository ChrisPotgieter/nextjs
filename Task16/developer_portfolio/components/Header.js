import Link from 'next/link'; 

const Header = () => (
  <div>
    {/*Bootstap navbar */}
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">
          <a className="navbar-brand" href="#">Portfolio</a>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <Link href="/"><a className="nav-link">Home</a></Link>   {/*Home link*/}
                  </li>
                  <li className="nav-item">
                      <Link href="/about"><a className="nav-link">About</a></Link>      {/*About link*/}
                  </li>
                  <li className="nav-item">
                      <Link href="/contact"><a className="nav-link">Contact</a></Link>    {/*Contact link*/}
                  </li>
                  <li className="nav-item">
                      <Link href="/projects"><a className="nav-link">Projects</a></Link>    {/*Projects link*/}
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</div>
    );

export default Header;