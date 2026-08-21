import { Link, useNavigate } from "react-router-dom";

function StaffLogin() {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        navigate("/dashboard");
    };

    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>Staff Login</h1>

                <p>Login to manage examinations</p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p>
                    Don't have an account?
                    <Link to="/staff-register"> Register</Link>
                </p>

            </div>

        </div>
    );
}

export default StaffLogin;