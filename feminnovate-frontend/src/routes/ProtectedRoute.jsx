import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);

  const verifyToken = () => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") === null) {
      setIsAuth(false);
      return navigate("/");
    }
    setIsAuth(true);
  };

  useEffect(() => {
    verifyToken();
  });

  return children;
};

export default ProtectedRoute;
