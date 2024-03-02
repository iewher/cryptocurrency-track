import { AiOutlineUser } from "react-icons/ai";
import "../../scss/auth/auth.scss";

const Auth = () => {
  return (
    <div className="auth-user">
      <button className="auth-settings">
        <AiOutlineUser />
      </button>
    </div>
  );
};

export default Auth;
