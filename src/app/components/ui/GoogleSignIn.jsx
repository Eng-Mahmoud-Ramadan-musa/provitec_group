import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
// import { loginSuccess } from "@/features/auth"; // تأكد من صحة المسار
import axios from "axios";

export default function GoogleSignIn() {
  // const dispatch = useDispatch();

  // const handleSuccess = async (response) => {
  //   const idToken = response.credential;

  //   try {
  //     const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/google-login`, { idToken });
  //     const data = res.data?.data;

  //     // dispatch(loginSuccess({
  //     //   user: data.user,
  //     //   access_token: data.access_token,
  //     //   refresh_token: data.refresh_token,
  //     // }));

  //     const redirectAfterLogin = localStorage.getItem("redirectAfterLogin");
  //     window.location.href = redirectAfterLogin || "/dashboard";
  //   } catch (error) {
  //     console.error("Google login error:", error);
  //     alert("An error occurred during login.");
  //   }
  // };

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <div className="w-full mt-4">
        <div className="flex justify-center items-center gap-3 rounded-lg bg-gradient-to-r from-gray-900 via-black to-gray-900 hover:from-gray-800 hover:to-gray-800 transition-colors duration-300 p-3 shadow-lg hover:shadow-xl">
          <GoogleLogin
            onError={() => alert("Login Failed")}
            theme="filled_black"
            size="medium"
            text="continue_with"
            shape="pill"
            logo_alignment="left"
            width="250"
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
