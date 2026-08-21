import { useNavigate } from "react-router-dom";
import ExamHall3D from "../components/ExamHall3D";
import "./StudentSeating.css";

function StudentSeating() {
    const navigate = useNavigate();

    const student = {
        name: "Student Name",
        registerNo: "23IT001",
        department: "Information Technology",
    };

    return (
        <div className="dashboard-layout">

            {/* SIDEBAR */}
            <aside className="sidebar">

                <div className="logo">
                    Smart<span>Seat</span>
                </div>

                <button
                    className="nav-item"
                    onClick={() => navigate("/student-dashboard")}
                >
                    🏠 Dashboard
                </button>

                <button className="nav-item active">
                    💺 Exam Seating
                </button>

                <button
                    className="logout-btn"
                    onClick={() => navigate("/")}
                >
                    🚪 Logout
                </button>

            </aside>

            {/* MAIN CONTENT */}
            <main className="main-content">

                {/* TOP BAR */}
                <div className="topbar">

                    <div>
                        <h1>My Exam Seating</h1>

                        <p>
                            Your exact examination seating location
                        </p>
                    </div>

                    <div className="student-profile">

                        <strong>
                            {student.name}
                        </strong>

                        <small>
                            {student.registerNo}
                        </small>

                        <small>
                            {student.department}
                        </small>

                    </div>

                </div>

                {/* EXAM DETAILS */}
                <div className="section">

                    <h2 className="section-title">
                        Examination Details
                    </h2>

                    <div className="details-grid">

                        <div>
                            <span>Exam</span>
                            <strong>
                                End Semester Examination
                            </strong>
                        </div>

                        <div>
                            <span>Subject</span>
                            <strong>
                                Data Structures
                            </strong>
                        </div>

                        <div>
                            <span>Date</span>
                            <strong>
                                25 August 2026
                            </strong>
                        </div>

                        <div>
                            <span>Time</span>
                            <strong>
                                10:00 AM – 1:00 PM
                            </strong>
                        </div>

                    </div>

                </div>

                {/* SEATING LOCATION */}
                <div className="section">

                    <h2 className="section-title">
                        Your Seating Location
                    </h2>

                    <div className="seat-location">

                        <div className="hall-info">

                            <h2>
                                🏫 HALL 203
                            </h2>

                            <p>
                                Block A • 2nd Floor
                            </p>

                            <div className="seat-details">

                                <div>
                                    <span>Row</span>
                                    <strong>4</strong>
                                </div>

                                <div>
                                    <span>Bench</span>
                                    <strong>2</strong>
                                </div>

                                <div>
                                    <span>Position</span>
                                    <strong>LEFT</strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* 3D EXAM HALL */}
                <div className="section">

                    <h2 className="section-title">
                        📍 Find Your Seat
                    </h2>

                    <p className="seat-description">
                        Explore the 3D examination hall.
                        Your assigned seat is highlighted in cyan.
                    </p>

                    <ExamHall3D />

                </div>

                {/* YOUR BENCH */}
                <div className="section">

                    <h2 className="section-title">
                        Your Bench
                    </h2>

                    <p className="seat-description">
                        You are seated on the LEFT side of this bench.
                    </p>

                    <div className="bench">

                        <div className="seat your-seat">

                            <span>
                                ⭐ YOU
                            </span>

                            <strong>
                                {student.registerNo}
                            </strong>

                            <small>
                                {student.name}
                            </small>

                        </div>

                        <div className="seat">

                            <span>
                                STUDENT
                            </span>

                            <strong>
                                23CS042
                            </strong>

                            <small>
                                Other Student
                            </small>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default StudentSeating;