import { Link } from "react-router-dom";

function PageNotFound()  {
    return (
        <>
            <h2> The page cannot be found! </h2>
            <Link to="/"> Back to home! </Link>
        </>
    );
};

export default PageNotFound;