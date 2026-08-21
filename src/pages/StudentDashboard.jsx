import { useLocation, useNavigate } from "react-router-dom";

function StudentDashboard() {

    const location = useLocation();
    const navigate = useNavigate();

    const student = location.state || {
        registerNo: "23IT001",
        name: "Student Name",
        department: "Information Technology",
    };

    return (
        <div className="dashboard-layout">

            {/* SIDEBAR */}

            <aside className="sidebar">

                <div className="logo">
                    Smart<span>Seat</span>
                </div>

                <div className="student-menu">

                    <button
                        className="nav-item active"
                        onClick={() => navigate("/student-dashboard")}
                    >
                        🏠 Dashboard
                    </button>

                    <button
                        className="nav-item"
                        onClick={() => navigate("/student-seating")}
                    >
                        💺 Exam Seating
                    </button>

                </div>

                <button
                    className="logout-btn"
                    onClick={() => navigate("/")}
                >
                    🚪 Logout
                </button>

            </aside>

            {/* MAIN */}

            <main className="main-content">

                {/* TOP BAR */}

                <div className="topbar">

                    <div>
                        <h1>Student Dashboard</h1>
                        <p>Welcome back, {student.name} 👋</p>
                    </div>

                    <div className="student-profile">

                        <strong>{student.name}</strong>

                        <small>
                            {student.registerNo}
                        </small>

                        <small>
                            {student.department}
                        </small>

                    </div>

                </div>

                {/* EXAM CARD */}

                <div className="section">

                    <h2 className="section-title">
                        Upcoming Examination
                    </h2>

                    <div className="exam-card">

                        <div>

                            <span className="exam-label">
                                EXAMINATION
                            </span>

                            <h2>
                                End Semester Examination
                            </h2>

                            <p>
                                Data Structures and Algorithms
                            </p>

                        </div>

                        <div className="exam-info">

                            <div>
                                📅
                                <strong>25 Aug 2026</strong>
                            </div>

                            <div>
                                ⏰
                                <strong>10:00 AM – 1:00 PM</strong>
                            </div>

                        </div>

                    </div>

                </div>

                {/* SEATING BUTTON */}

                <div className="section seating-action">

                    <h2>
                        Find Your Examination Seat
                    </h2>

                    <p>
                        View your examination hall, bench and exact seat
                        position.
                    </p>

                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/student-seating")}
                    >
                        💺 View Exam Seating
                    </button>

                </div>

            </main>

        </div>
    );
}

export default StudentDashboard;