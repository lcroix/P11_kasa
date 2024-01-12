import { Link } from "react-router-dom";
import Header from "../components/header/header";
import "./errorPage.css";

function ErrorPage() {
  return (
    <div className="errormain">
      <Header />
      <div className="errorcontainer">
        <h1 className="errortitle">404</h1>
        <div className="errortextContainer">
          <p className="errortext">
            Oups! La page que vous demandez n'existe pas.
          </p>
        </div>
        <Link to="/" className="errorlink">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
