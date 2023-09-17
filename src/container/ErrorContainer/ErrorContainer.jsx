import { Link } from "react-router-dom";
import "./ErrorContainer.css";

const ErrorContainer = ({message,status}) => {


  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">{status}</h1>
                <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
              </div>

              <div className="contant_box_404">
                <h3 className="h2">
                  Error Occured! 😡
                </h3>

                <p>{message}</p>

                <Link to="/" className="link_404">Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ErrorContainer;