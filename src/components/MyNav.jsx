import { Container, Dropdown, Image, Navbar } from "react-bootstrap"
import { ArrowDown, BellFill, Search } from "react-bootstrap-icons"
import image from '../assets/netflix_logo.png'
import avatar from '../assets/kids_icon.png'
import avatar2 from '../assets/avatar.png'


const MyNav = () => {
    return (
        <Navbar expand="lg" className="navbar-dark bg-black">
        <Container fluid>
          <Navbar.Brand href="#home"><Image src={image} style={{width: '150px'}}/></Navbar.Brand>
          <span
              className="navbar-toggler border border-0 text-white fs-6 d-flex flex-grow-1 d-lg-none"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Sfoglia<ArrowDown/>
              <span className="dropdown-menu dropdown-menu-black bg-black"></span>
            </span>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav bg-black">
                <a className="nav-link text-white" aria-current="page" href="#home"
                  >Home</a
                >
                <a className="nav-link text-white" href="#shows">TV Shows</a>
                <a className="nav-link text-white" href="#movie">Movies</a>
                <a className="nav-link text-white" href="#added">Recently Added</a>
                <a className="nav-link text-white" href="#list">My List</a>
              </div>
              </div>
          <div
              id="icone-right"
              className="d-flex flex-nowrap me-lg-5 align-items-center"
            >
              <Search className="text-white me-2"/>
             <img
                  src={avatar}
                  alt=""
                  style={{width:'25px', height: '25px'}}
              />
              <BellFill className="text-white ms-2"/>
              <Dropdown>
               <Dropdown.Toggle variant="black" id="dropdown-basic">
                   <img
                    src={avatar2}
                    alt=""
                    width="25px"
                    height="25px"
                  />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{minWidth: '8.3 rem'}} className="bg-black">
        <Dropdown.Item href="#profile" className="text-white">Profile</Dropdown.Item>
        <Dropdown.Item href="#settings" className="text-white">Settings</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
        </Container>
      </Navbar>
    )
}

export default MyNav