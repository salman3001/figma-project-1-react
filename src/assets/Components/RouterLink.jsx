import { Link } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";

const RouterLink = (prop) => {
  return (
    <Link component={RouteLink} to={prop.to}>
      {prop.children}
    </Link>
  );
};

export default RouterLink;
