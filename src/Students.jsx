import React, { useEffect, useState } from "react";

function Students() {
    const [students, setStudents] = useState([]);

    const [form, setForm] = useState({
        register_no: "",
        name: "",
        department: "",
        year: "",
        section: "",
        email: ""
    });

    const loadStudents = async () => {
        const response = await fetch("http://localhost:5000/api/students");
        const data = await response.json();
        setStudents(data);
    };

    useEffect(() => {
        loadStudents();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const addStudent = async (e) => {
        e.preventDefault();

        const response = await fetch(
            "http://localhost:5000/api/students",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            }
        );

        const data = await response.json();

        if (response.ok) {
            alert("Student added successfully ❤️");

            setForm({
                register_no: "",
                name: "",
                department: "",
                year: "",
                section: "",
                email: ""
            });

            loadStudents();
        } else {
            alert(data.error);
        }
    };

    const deleteStudent = async (id) => {
        if (!window.confirm("Delete this student?")) return;

        await fetch(
            `http://localhost:5000/api/students/${id}`,
            {
                method: "DELETE"
            }
        );

        loadStudents();
    };

    return (
        <div className="students-page">

            <h1>Manage Student Records</h1>
            <p>Add and manage examination students</p>

            <div className="student-card">

                <h2>Add Student</h2>

                <form onSubmit={addStudent}>

                    <input
                        name="register_no"
                        placeholder="Register Number"
                        value={form.register_no}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="name"
                        placeholder="Student Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="department"
                        placeholder="Department"
                        value={form.department}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="year"
                        type="number"
                        placeholder="Year"
                        value={form.year}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="section"
                        placeholder="Section"
                        value={form.section}
                        onChange={handleChange}
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        + Add Student
                    </button>

                </form>

            </div>

            <div className="student-card">

                <h2>Student Records</h2>

                <table>

                    <thead>
                        <tr>
                            <th>Register No</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Year</th>
                            <th>Section</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {students.map((student) => (

                            <tr key={student.id}>

                                <td>{student.register_no}</td>
                                <td>{student.name}</td>
                                <td>{student.department}</td>
                                <td>{student.year}</td>
                                <td>{student.section}</td>
                                <td>{student.email}</td>

                                <td>
                                    <button
                                        onClick={() =>
                                            deleteStudent(student.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Students;