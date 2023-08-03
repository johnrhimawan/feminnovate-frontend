import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);

  const verifyToken = () => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") === null) {
      setIsAuth(false);
      return;
    }
    setIsAuth(true);
    return navigate("/jobs");
  };

  useEffect(() => {
    verifyToken();
  });

  return children;
};

export default PublicRoute;
