import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";
import { useLoader } from "../../context/loaderContext.jsx";
import { useFormik } from "formik";
import { object, string } from "yup";
import { LoginAPI } from "../../backend-services/api.js";
import { toast } from "react-toastify";

const LoginModal = ({ onSuccess }) => {
    const [, setAuth] = useAuth();
    const [, setLoader] = useLoader();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: object({
            email: string().email("Must be a valid email").required(),
            password: string().min(6, "Minimum 6 characters long").required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            // Prevent the default form submission behavior
            // e parameter is not used in the function, so it can be removed
            setLoader(true);
            try {
                const data = await LoginAPI(values);
                if (data.status === "success") {
                    localStorage.setItem("auth", JSON.stringify(data));
                    setAuth({
                        user: data.user,
                        token: data.createToken,
                    });
                    toast.success("Login successful");
                    resetForm({
                        values: "",
                    });

                    // Call the onSuccess callback to close the modal
                    onSuccess();
                }
            } catch (error) {
                console.error(error);
                toast.error(error.response.data.error.message);
            } finally {
                setLoader(false);
            }
        },

    });

    return (
        <form className="form-group mb-0" onSubmit={formik.handleSubmit}>
            <div>
                <div className="card animated fadeInUp p-5 mb-0">
                    <h1 className="card-title mb-4 text-center">Sign in</h1>
                    <input
                        type="email"
                        className="form-control my-2 py-3"
                        placeholder="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <span className="text-danger my-1 ms-2">
              &#9432; {formik.errors.email}
            </span>
                    )}
                    <input
                        type="password"
                        className="form-control my-2 py-3"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <span className="text-danger my-1 ms-2">
              &#9432; {formik.errors.password}
            </span>
                    )}
                    <button
                        type="submit"
                        className="btn bg-gradient-primary my-2"
                    >
                        Sign in
                    </button>
                    <p className="text-center mt-2">
                        New Here?
                        <NavLink
                            className="text-info ms-2"
                            to="/register"
                        >
                            Sign up
                        </NavLink>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default LoginModal;
