import React from "react";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Logout from "./Logout";
import { useUser } from "reactfire";

const SigningIn = () => {
   const user = useUser();

  return (
    <>
      <div className="App">
        {user && <Logout />}
        {!user && (
          <>
            <SignUp />
            <LogIn />
          </>
        )}
      </div>
    </>
  );
};

export default SigningIn;
