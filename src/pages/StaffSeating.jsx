import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StaffSeating.css";

function StaffSeating() {
    const navigate = useNavigate();

    const [exam, setExam] = useState("");
    const [room, setRoom] = useState("");
    const [rows, setRows] = useState(5);
    const [columns, setColumns] = useState(6);
    const [allocated, setAllocated] = useState(false);

    const handleGenerate = () => {
        if (!exam || !room) {
            alert("Please select examination and examination hall");
            return;
        }

        setAllocated(true);
    };

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="staff-seating-page">

            {/* HEADER */}
            <header className="seating-header">
                <div>
                    <h1>Smart Exam Seating</h1>
                    <p>Staff Panel</p>
                </div>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </header>

            {/* MAIN CONTENT */}
            <main className="seating-container">

                <div className="page-title">
                    <button
                        className="back-btn"
                        onClick={() => navigate("/staff-dashboard")}
                    >
                        ← Back
                    </button>

                    <div>
                        <h2>Seating Allocation</h2>
                        <p>
                            Generate and manage examination hall seating arrangements
                        </p>
                    </div>
                </div>

                {/* CONFIGURATION CARD */}
                <section className="allocation-card">

                    <h3>Configure Seating</h3>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>Examination</label>

                            <select
                                value={exam}
                                onChange={(e) => setExam(e.target.value)}
                            >
                                <option value="">Select Examination</option>
                                <option value="Data Structures">
                                    Data Structures
                                </option>
                                <option value="Database Management Systems">
                                    Database Management Systems
                                </option>
                                <option value="Computer Networks">
                                    Computer Networks
                                </option>
                                <option value="Operating Systems">
                                    Operating Systems
                                </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Examination Hall</label>

                            <select
                                value={room}
                                onChange={(e) => setRoom(e.target.value)}
                            >
                                <option value="">Select Hall</option>
                                <option value="Hall A">Hall A</option>
                                <option value="Hall B">Hall B</option>
                                <option value="Hall C">Hall C</option>
                                <option value="Hall D">Hall D</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Number of Rows</label>

                            <input
                                type="number"
                                min="1"
                                value={rows}
                                onChange={(e) => setRows(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Seats per Row</label>

                            <input
                                type="number"
                                min="1"
                                value={columns}
                                onChange={(e) => setColumns(e.target.value)}
                            />
                        </div>

                    </div>

                    <button
                        className="generate-btn"
                        onClick={handleGenerate}
                    >
                        Generate Seating
                    </button>

                </section>

                {/* SEATING RESULT */}
                {allocated && (
                    <section className="result-card">

                        <div className="result-header">
                            <div>
                                <h3>Generated Seating Arrangement</h3>

                                <p>
                                    {exam} • {room}
                                </p>
                            </div>

                            <span className="status-badge">
                                Allocated
                            </span>
                        </div>

                        {/* LEGEND */}
                        <div className="legend">
                            <span>
                                <i className="available"></i>
                                Student
                            </span>

                            <span>
                                <i className="aisle"></i>
                                Aisle
                            </span>
                        </div>

                        {/* SEATING GRID */}
                        <div
                            className="seating-grid"
                            style={{
                                gridTemplateColumns: `repeat(${columns}, 1fr)`
                            }}
                        >

                            {Array.from(
                                { length: rows * columns },
                                (_, index) => (
                                    <div
                                        className="seat"
                                        key={index}
                                    >
                                        <span className="seat-number">
                                            {index + 1}
                                        </span>

                                        <strong>
                                            {`REG${String(index + 1).padStart(3, "0")}`}
                                        </strong>

                                        <small>
                                            Student
                                        </small>
                                    </div>
                                )
                            )}

                        </div>

                        {/* ACTIONS */}
                        <div className="result-actions">

                            <button
                                className="secondary-btn"
                                onClick={() => setAllocated(false)}
                            >
                                Clear
                            </button>

                            <button
                                className="print-btn"
                                onClick={() => window.print()}
                            >
                                Print Seating
                            </button>

                        </div>

                    </section>
                )}

            </main>
        </div>
    );
}

export default StaffSeating;