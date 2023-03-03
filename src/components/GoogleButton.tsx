import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";

export default function GoogleLoginBtn() {
  // const login = useGoogleLogin({
  //   onSuccess: async (respose) => {
  //     try {
  //       const res = await axios.get(
  //         "https://www.googleapis.com/oauth2/v3/userinfo",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${respose.access_token}`,
  //           },
  //         }
  //       );
  //       console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  // });
  return (
    <>
      <GoogleLogin
        onSuccess={(response) => {
          localStorage.setItem("token", response.credential);
          const decoded = jwt_decode(response.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </>
  );
}
