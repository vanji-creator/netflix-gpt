// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
// import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Navigator = () => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // const { uid, email, displayName } = user;
        // dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        navigate("/");
        // dispatch(removeUser());
      }
    });
    //unsubrcibing when the component is unmounted
    return () => unsubscribe();
  }, []);

  return <div className="absolute"></div>;
};

export default Navigator;
