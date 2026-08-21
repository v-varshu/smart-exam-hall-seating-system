import { useNavigate } from "react-router-dom";
import "./StaffDashboard.css";

function StaffDashboard() {

    const navigate = useNavigate();

    const staff = {
        name: "Exam Staff",
        staffId: "STAFF001",
        department: "Information Technology"
    };

    return (
        <div className="staff-dashboard">

            {/* SIDEBAR */}

            <aside className="staff-sidebar">

                <div className="staff-logo">
                    Smart<span>Seat</span>
                </div>

                <div className="staff-menu">

                    <button className="staff-nav active">
                        📊 Dashboard
                    </button>
                    <button
                        className="staff-nav"
                        onClick={() => navigate("/examinations")}
                    >
                        📝 Examinations
                    </button>

                    <button
                        className="staff-nav"
                        onClick={() => navigate("/students")}
                    >
                        👥 Students
                    </button>

                    <button
                        className="staff-nav"
                        onClick={() =>
                            navigate("/staff-seating")
                        }
                    >
                        💺 Seating Allocation
                    </button>

                </div>

                <button
                    className="staff-logout"
                    onClick={() => navigate("/")}
                >
                    🚪 Logout
                </button>

            </aside>


            {/* MAIN */}

            <main className="staff-main">

                {/* TOPBAR */}

                <div className="staff-topbar">

                    <div>
                        <h1>Staff Dashboard</h1>

                        <p>
                            Manage examinations and seating arrangements
                        </p>
                    </div>

                    <div className="staff-profile">

                        <div className="staff-avatar">
                            👨‍💼
                        </div>

                        <div>
                            <strong>
                                {staff.name}
                            </strong>

                            <small>
                                {staff.staffId}
                            </small>
                        </div>

                    </div>

                </div>


                {/* WELCOME */}

                <div className="staff-welcome">

                    <span>
                        STAFF PORTAL
                    </span>

                    <h2>
                        Welcome back, {staff.name} 👋
                    </h2>

                    <p>
                        Manage examination seating and
                        student allocations from one place.
                    </p>

                </div>


                {/* STATISTICS */}

                <div className="stats-grid">

                    <div className="stat-card">

                        <div className="stat-icon">
                            📝
                        </div>

                        <div>
                            <span>Total Exams</span>
                            <strong>08</strong>
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon">
                            👥
                        </div>

                        <div>
                            <span>Total Students</span>
                            <strong>420</strong>
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon">
                            🏫
                        </div>

                        <div>
                            <span>Exam Halls</span>
                            <strong>12</strong>
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon">
                            💺
                        </div>

                        <div>
                            <span>Seats Allocated</span>
                            <strong>380</strong>
                        </div>

                    </div>

                </div>


                {/* UPCOMING EXAM */}

                <section className="staff-section">

                    <div className="section-heading">

                        <div>
                            <span>UPCOMING EXAMINATION</span>

                            <h2>
                                End Semester Examination
                            </h2>
                        </div>

                        <div className="exam-status">
                            Upcoming
                        </div>

                    </div>


                    <div className="exam-details">

                        <div>
                            <span>Subject</span>
                            <strong>
                                Data Structures
                            </strong>
                        </div>

                        <div>
                            <span>Date</span>
                            <strong>
                                25 Aug 2026
                            </strong>
                        </div>

                        <div>
                            <span>Time</span>
                            <strong>
                                10:00 AM – 1:00 PM
                            </strong>
                        </div>

                        <div>
                            <span>Students</span>
                            <strong>
                                120
                            </strong>
                        </div>

                    </div>

                </section>


                {/* ACTIONS */}

                <section className="staff-section">

                    <h2 className="quick-title">
                        Quick Actions
                    </h2>

                    <div className="quick-actions">

                        <button className="action-card">

                            <div>
                                📋
                            </div>

                            <section>
                                <h3>
                                    Manage Exams
                                </h3>

                                <p>
                                    Create and manage examinations
                                </p>
                            </section>

                        </button>


                        <button className="action-card">

                            <div>
                                👥
                            </div>

                            <section>
                                <h3>
                                    Student List
                                </h3>

                                <p>
                                    View registered students
                                </p>
                            </section>

                        </button>


                        <button
                            className="action-card"
                            onClick={() =>
                                navigate("/staff-seating")
                            }
                        >

                            <div>
                                💺
                            </div>

                            <section>
                                <h3>
                                    Allocate Seating
                                </h3>

                                <p>
                                    Generate examination seating
                                </p>
                            </section>

                        </button>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default StaffDashboard;