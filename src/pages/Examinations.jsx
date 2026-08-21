import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./examinations.css";

function Examinations() {
    const navigate = useNavigate();

    const [exams, setExams] = useState([]);

    const [form, setForm] = useState({
        name: "",
        subject: "",
        date: "",
        startTime: "",
        endTime: "",
        department: "",
        semester: ""
    });

    const [editingId, setEditingId] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !form.name ||
            !form.subject ||
            !form.date ||
            !form.startTime ||
            !form.endTime ||
            !form.department ||
            !form.semester
        ) {
            alert("Please fill all fields");
            return;
        }

        if (editingId) {
            setExams(
                exams.map((exam) =>
                    exam.id === editingId
                        ? { ...form, id: editingId }
                        : exam
                )
            );

            setEditingId(null);
        } else {
            setExams([
                ...exams,
                {
                    ...form,
                    id: Date.now()
                }
            ]);
        }

        setForm({
            name: "",
            subject: "",
            date: "",
            startTime: "",
            endTime: "",
            department: "",
            semester: ""
        });
    };

    const handleEdit = (exam) => {
        setForm(exam);
        setEditingId(exam.id);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this exam?")) {
            setExams(exams.filter((exam) => exam.id !== id));
        }
    };

    const today = new Date().toISOString().split("T")[0];

    const todayExams = exams.filter(
        (exam) => exam.date === today
    );

    return (
        <div className="examinations-page">

            {/* TOP BAR */}
            <div className="exam-topbar">

                <div>
                    <h1>Examinations</h1>
                    <p>Create and manage examinations</p>
                </div>

                <button
                    className="back-btn"
                    onClick={() => navigate("/staff-dashboard")}
                >
                    ← Dashboard
                </button>

            </div>

            {/* STAT CARDS */}
            <div className="exam-stats">

                <div className="exam-stat-card">
                    <div className="stat-icon">📋</div>
                    <div>
                        <span>Total Exams</span>
                        <strong>{exams.length}</strong>
                    </div>
                </div>

                <div className="exam-stat-card">
                    <div className="stat-icon today-icon">📅</div>
                    <div>
                        <span>Today's Exams</span>
                        <strong>{todayExams.length}</strong>
                    </div>
                </div>

                <div className="exam-stat-card">
                    <div className="stat-icon subject-icon">📚</div>
                    <div>
                        <span>Subjects</span>
                        <strong>
                            {new Set(exams.map((e) => e.subject)).size}
                        </strong>
                    </div>
                </div>

                <div className="exam-stat-card">
                    <div className="stat-icon dept-icon">🏫</div>
                    <div>
                        <span>Departments</span>
                        <strong>
                            {new Set(exams.map((e) => e.department)).size}
                        </strong>
                    </div>
                </div>

            </div>

            {/* CREATE EXAM */}
            <div className="exam-form-card">

                <div className="section-heading">
                    <div>
                        <h2>
                            {editingId
                                ? "Edit Examination"
                                : "Create Examination"}
                        </h2>

                        <p>
                            Add examination details for students
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="exam-form-grid">

                        <div className="input-group">
                            <label>Examination Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Example: Internal Assessment - 1"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Example: Database Management"
                                value={form.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>Exam Date</label>
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>Department</label>
                            <select
                                name="department"
                                value={form.department}
                                onChange={handleChange}
                            >
                                <option value="">
                                    Select Department
                                </option>
                                <option value="IT">
                                    Information Technology
                                </option>
                                <option value="CSE">
                                    Computer Science
                                </option>
                                <option value="ECE">
                                    Electronics & Communication
                                </option>
                                <option value="EEE">
                                    Electrical & Electronics
                                </option>
                                <option value="MECH">
                                    Mechanical
                                </option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Semester</label>
                            <select
                                name="semester"
                                value={form.semester}
                                onChange={handleChange}
                            >
                                <option value="">
                                    Select Semester
                                </option>
                                <option value="1">Semester 1</option>
                                <option value="2">Semester 2</option>
                                <option value="3">Semester 3</option>
                                <option value="4">Semester 4</option>
                                <option value="5">Semester 5</option>
                                <option value="6">Semester 6</option>
                                <option value="7">Semester 7</option>
                                <option value="8">Semester 8</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Start Time</label>
                            <input
                                type="time"
                                name="startTime"
                                value={form.startTime}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>End Time</label>
                            <input
                                type="time"
                                name="endTime"
                                value={form.endTime}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="form-actions">

                        {editingId && (
                            <button
                                type="button"
                                className="cancel-btn"
                                onClick={() => {
                                    setEditingId(null);
                                    setForm({
                                        name: "",
                                        subject: "",
                                        date: "",
                                        startTime: "",
                                        endTime: "",
                                        department: "",
                                        semester: ""
                                    });
                                }}
                            >
                                Cancel
                            </button>
                        )}

                        <button
                            type="submit"
                            className="create-exam-btn"
                        >
                            {editingId
                                ? "Update Examination"
                                : "+ Create Examination"}
                        </button>

                    </div>

                </form>
            </div>

            {/* TODAY'S EXAM */}
            <div className="today-exam-card">

                <div className="section-heading">
                    <div>
                        <h2>📅 Today's Examinations</h2>
                        <p>Examinations scheduled for today</p>
                    </div>
                </div>

                {todayExams.length === 0 ? (
                    <div className="empty-box">
                        <div>📭</div>
                        <h3>No examinations today</h3>
                        <p>
                            No exam has been scheduled for today.
                        </p>
                    </div>
                ) : (
                    <div className="today-list">

                        {todayExams.map((exam) => (
                            <div
                                className="today-exam-item"
                                key={exam.id}
                            >
                                <div className="exam-date-icon">
                                    📅
                                </div>

                                <div className="today-exam-info">
                                    <h3>{exam.name}</h3>

                                    <p>
                                        {exam.subject} •{" "}
                                        {exam.department} •{" "}
                                        Semester {exam.semester}
                                    </p>

                                    <span>
                                        ⏰ {exam.startTime} -{" "}
                                        {exam.endTime}
                                    </span>
                                </div>

                                <button
                                    className="allocate-btn"
                                    onClick={() =>
                                        navigate(
                                            "/seating-allocation"
                                        )
                                    }
                                >
                                    Allocate Seating →
                                </button>
                            </div>
                        ))}

                    </div>
                )}

            </div>

            {/* ALL EXAMS */}
            <div className="all-exams-card">

                <div className="section-heading">
                    <div>
                        <h2>All Examinations</h2>
                        <p>Manage your examination schedule</p>
                    </div>
                </div>

                {exams.length === 0 ? (
                    <div className="empty-box">
                        <div>📋</div>
                        <h3>No examinations created</h3>
                        <p>
                            Create your first examination using
                            the form above.
                        </p>
                    </div>
                ) : (
                    <div className="table-wrapper">

                        <table className="exam-table">

                            <thead>
                                <tr>
                                    <th>Examination</th>
                                    <th>Subject</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Department</th>
                                    <th>Semester</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {exams.map((exam) => (
                                    <tr key={exam.id}>

                                        <td>
                                            <strong>
                                                {exam.name}
                                            </strong>
                                        </td>

                                        <td>
                                            {exam.subject}
                                        </td>

                                        <td>
                                            {exam.date}
                                        </td>

                                        <td>
                                            {exam.startTime} -{" "}
                                            {exam.endTime}
                                        </td>

                                        <td>
                                            <span className="dept-badge">
                                                {exam.department}
                                            </span>
                                        </td>

                                        <td>
                                            Sem {exam.semester}
                                        </td>

                                        <td>
                                            <div className="action-buttons">

                                                <button
                                                    className="edit-btn"
                                                    onClick={() =>
                                                        handleEdit(exam)
                                                    }
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="delete-btn"
                                                    onClick={() =>
                                                        handleDelete(
                                                            exam.id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </div>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>
                )}

            </div>

        </div>
    );
}

export default Examinations;