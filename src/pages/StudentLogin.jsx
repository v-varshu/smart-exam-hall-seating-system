import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
    const navigate = useNavigate();

    const [registerNo, setRegisterNo] = useState("");
    const [dob, setDob] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5000/api/student/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    register_no: registerNo,
                    dob: dob,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Student details save pannikkalam
                localStorage.setItem("student", JSON.stringify(data.student));

                navigate("/student-seating");
            } else {
                setError(data.message || "Invalid Register Number or Date of Birth");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("Unable to connect to server. Please try again.");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">

                <h1>Student Login</h1>

                <p>Find your examination seating</p>

                <form onSubmit={handleLogin}>

                    <input
                        type="text"
                        placeholder="Register Number"
                        value={registerNo}
                        onChange={(e) => setRegisterNo(e.target.value)}
                        required
                    />

                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />

                    {error && (
                        <div className="login-error">
                            ⚠️ {error}
                        </div>
                    )}

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>
        </div>
    );
}

export default StudentLogin;