import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import pageNotFoundImg from "../../assets/404.svg";
import serverErrorImg from "../../assets/500.svg";

const ErrorPage = () => {
    const error = useRouteError();
    const pageNotFound = `${error.status} ~ Page not found!`;
    const unexpectedError = `${error.status} ~ Unexpected error :(`;

    return (
        <div className="text-center align-items-center">
            {isRouteErrorResponse(error) ? <img src={pageNotFoundImg} style={{ width: "40%" }} /> : <img src={serverErrorImg} style={{ width: "40%" }} />}
            <p>{isRouteErrorResponse(error) ? pageNotFound : unexpectedError}</p>
            <Link to="/">Return home</Link>
        </div>
    );
};

export default ErrorPage;
