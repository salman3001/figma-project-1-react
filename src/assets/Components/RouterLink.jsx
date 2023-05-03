import { Link } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";

const RouterLink = (prop) => {
  return (
    <Link
      component={RouteLink}
      to={prop.to}
      sx={{ textDecoration: "none", fontSize: prop.size || "1rem" }}
    >
      {prop.children}
    </Link>
  );
};

export default RouterLink;
