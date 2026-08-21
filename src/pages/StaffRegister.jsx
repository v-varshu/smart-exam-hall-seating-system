import { Link } from "react-router-dom";

function StaffRegister() {
    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>Staff Registration</h1>

                <p>Create your staff account</p>

                <form>

                    <input
                        type="text"
                        placeholder="Full Name"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

                <p>
                    Already have an account?
                    <Link to="/staff-login"> Login</Link>
                </p>

            </div>

        </div>
    );
}

export default StaffRegister;