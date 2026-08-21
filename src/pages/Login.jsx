import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [role, setRole] = useState("student");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const credentials = {
        student: {
            username: "student",
            password: "Student@123"
        },

        staff: {
            username: "staff",
            password: "Staff@123"
        }
    };


    const handleLogin = (e) => {

        e.preventDefault();

        setError("");

        const correctUsername =
            credentials[role].username;

        const correctPassword =
            credentials[role].password;


        if (
            username.trim() === correctUsername &&
            password === correctPassword
        ) {

            if (role === "student") {

                navigate("/student-dashboard");

            } else {

                navigate("/staff-dashboard");

            }

        } else {

            setError(
                "Invalid username or password. Please try again."
            );

        }
    };


    return (

        <div className="login-container">

            <div className="login-card">

                <div className="login-logo">

                    Smart<span>Seat</span>

                </div>


                <h1>
                    Welcome Back
                </h1>


                <p className="login-subtitle">
                    Smart Examination Hall Seating System
                </p>


                {/* ROLE */}

                <div className="role-selection">

                    <button
                        type="button"
                        className={
                            role === "student"
                                ? "role-btn active"
                                : "role-btn"
                        }
                        onClick={() => {
                            setRole("student");
                            setError("");
                            setUsername("");
                            setPassword("");
                        }}
                    >
                        🎓 Student
                    </button>


                    <button
                        type="button"
                        className={
                            role === "staff"
                                ? "role-btn active"
                                : "role-btn"
                        }
                        onClick={() => {
                            setRole("staff");
                            setError("");
                            setUsername("");
                            setPassword("");
                        }}
                    >
                        👨‍🏫 Staff
                    </button>

                </div>


                {/* LOGIN FORM */}

                <form onSubmit={handleLogin}>

                    <div className="input-group">

                        <label>
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder={
                                role === "student"
                                    ? "Enter student username"
                                    : "Enter staff username"
                            }
                            value={username}
                            onChange={(e) =>
                                setUsername(e.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="input-group">

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />

                    </div>


                    {error && (

                        <div className="login-error">

                            ⚠️ {error}

                        </div>

                    )}


                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Login
                    </button>

                </form>


                <div className="login-footer">

                    {role === "student"
                        ? "Student Portal"
                        : "Staff Portal"
                    }

                </div>

            </div>

        </div>
    );
}

export default Login;