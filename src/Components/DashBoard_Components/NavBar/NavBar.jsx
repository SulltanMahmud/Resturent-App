import logo from "../../../assets/logo (1).png";
import { IoBag } from "react-icons/io5";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg   nav-section">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center" href="#">
          <div className="nav-img">
            <img src={logo} alt="" />
          </div>
          <p>BSS RESTAURANT</p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="nav-collapse collapse  navbar-collapse"
          id="navbarSupportedContent"
        >
          <div className="nav-cart d-flex mr-3">
            <div className="admin-btn py-3 px-3 rounded-1">Admin</div>
            <div className="cart position-relative py-3 text-white px-3 d-flex align-items-center">
              <IoBag />
              <span className="card-value d-flex align-items-center justify-content-center">
                1
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
