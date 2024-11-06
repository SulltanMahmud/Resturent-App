import axios from "axios";
import cook from "../../assets/Cook.png";
import spinImg from "../../assets/login-bg-spin-img.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ApiCall from "../../Components/ApiLink/ApiLink";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowpassword] = useState(false);

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // form data
  const [formData, setFormData] = useState({
    userName: "admin@mail.com",
    password: "Admin@123",
  });

   

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${ApiCall.baseUrl}Auth/SignIn`,
        formData
      );
      
      if (response.status === 200) {
        const token = "Bearer" + response.data.token;
        const user = response.data.user;
        console.log(user);

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        navigate('/admin')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loggin-section ">
      <div className="container">
        <div className="row    align-items-center">
          <div className="col-6 d-none d-xl-block">
            <div className="loggin-section__left  ">
              <div className="img-container">
                <img className="spin-img" src={spinImg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="loggin-section__right ">
              <div action="" className="form  ">
                <div className=" mb-3 form-img d-flex flex-column  align-items-center">
                  <img src={cook} alt="" />
                  <p>BSS RESTAURANT</p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column gap-3"
                >
                  <div className="from-item d-flex flex-column">
                    <label className="mb-2">User Name</label>
                    <input
                      onChange={handleChange}
                      value={formData.userName}
                      className="py-2 px-2 rounded-1"
                      type="text"
                      name="userName"
                    />
                  </div>

                  <div className="from-item d-flex flex-column position-relative">
                    <label className="mb-2">Password:</label>
                    <div className="position-relative">
                      <input
                        className="py-2 px-2 rounded-1 w-100"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                      />
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        className="position-absolute"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setShowpassword(!showPassword)}
                      >
                        <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                      </svg>
                    </div>
                  </div>
                  <button type="submit" className="w-100 py-3 mt-3 rounded-1">
                    Login
                  </button>
                </form>

                <div className="back-link mt-2 py-2 d-flex justify-content-center">
                  <a href="">Back To Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
