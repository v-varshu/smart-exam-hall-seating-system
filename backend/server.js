const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "smart_exam_seating",
});

// =========================
// TEST
// =========================
app.get("/", (req, res) => {
    res.json({
        message: "SmartSeat Backend Running",
    });
});

// =========================
// GET ALL STUDENTS
// =========================
app.get("/api/students", async (req, res) => {
    try {
        const [rows] = await db.query(`
      SELECT *
      FROM students
      ORDER BY register_number
    `);

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to load students" });
    }
});

// =========================
// ADD STUDENT
// =========================
app.post("/api/students", async (req, res) => {
    try {
        const {
            name,
            register_number,
            department,
            year,
            semester,
            email,
        } = req.body;

        await db.query(
            `
      INSERT INTO students
      (name, register_number, department, year, semester, email)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
            [
                name,
                register_number,
                department,
                year,
                semester,
                email,
            ]
        );

        res.json({
            message: "Student added successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to add student",
        });
    }
});

// =========================
// UPDATE STUDENT
// =========================
app.put("/api/students/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const {
            name,
            register_number,
            department,
            year,
            semester,
            email,
        } = req.body;

        await db.query(
            `
      UPDATE students
      SET
        name = ?,
        register_number = ?,
        department = ?,
        year = ?,
        semester = ?,
        email = ?
      WHERE id = ?
      `,
            [
                name,
                register_number,
                department,
                year,
                semester,
                email,
                id,
            ]
        );

        res.json({
            message: "Student updated successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to update student",
        });
    }
});

// =========================
// DELETE STUDENT
// =========================
app.delete("/api/students/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await db.query(
            `DELETE FROM students WHERE id = ?`,
            [id]
        );

        res.json({
            message: "Student deleted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to delete student",
        });
    }
});

// =========================
// GET EXAMINATIONS
// =========================
app.get("/api/examinations", async (req, res) => {
    try {
        const [rows] = await db.query(`
      SELECT *
      FROM examinations
      ORDER BY exam_date ASC
    `);

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to load examinations",
        });
    }
});

// =========================
// ADD EXAMINATION
// =========================
app.post("/api/examinations", async (req, res) => {
    try {
        const {
            exam_name,
            subject,
            exam_date,
            start_time,
            end_time,
            department,
            semester,
        } = req.body;

        await db.query(
            `
      INSERT INTO examinations
      (
        exam_name,
        subject,
        exam_date,
        start_time,
        end_time,
        department,
        semester
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
            [
                exam_name,
                subject,
                exam_date,
                start_time,
                end_time,
                department,
                semester,
            ]
        );

        res.json({
            message: "Examination created successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to create examination",
        });
    }
});

// =========================
// DELETE EXAMINATION
// =========================
app.delete("/api/examinations/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await db.query(
            `DELETE FROM examinations WHERE id = ?`,
            [id]
        );

        res.json({
            message: "Examination deleted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to delete examination",
        });
    }
});

// =========================
// GET HALLS
// =========================
app.get("/api/halls", async (req, res) => {
    try {
        const [rows] = await db.query(`
      SELECT *
      FROM exam_halls
      ORDER BY hall_name
    `);

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to load halls",
        });
    }
});

// =========================
// CREATE SEATING
// =========================
app.post("/api/seating/allocate", async (req, res) => {
    try {
        const {
            exam_id,
            hall_id,
        } = req.body;

        const [examRows] = await db.query(
            `SELECT * FROM examinations WHERE id = ?`,
            [exam_id]
        );

        if (examRows.length === 0) {
            return res.status(404).json({
                message: "Examination not found",
            });
        }

        const [hallRows] = await db.query(
            `SELECT * FROM exam_halls WHERE id = ?`,
            [hall_id]
        );

        if (hallRows.length === 0) {
            return res.status(404).json({
                message: "Hall not found",
            });
        }

        const hall = hallRows[0];

        const [students] = await db.query(
            `
      SELECT *
      FROM students
      WHERE department = ?
      AND semester = ?
      ORDER BY register_number
      `,
            [
                examRows[0].department,
                examRows[0].semester,
            ]
        );

        if (students.length === 0) {
            return res.status(400).json({
                message: "No students available for this examination",
            });
        }

        const totalSeats =
            hall.rows_count * hall.seats_per_row;

        if (students.length > totalSeats) {
            return res.status(400).json({
                message: `Not enough seats. Students: ${students.length}, Seats: ${totalSeats}`,
            });
        }

        // Remove old allocation
        await db.query(
            `DELETE FROM seating_allocations WHERE exam_id = ?`,
            [exam_id]
        );

        let studentIndex = 0;

        for (let row = 1; row <= hall.rows_count; row++) {
            for (
                let seat = 1;
                seat <= hall.seats_per_row;
                seat++
            ) {
                if (studentIndex >= students.length) {
                    break;
                }

                const student = students[studentIndex];

                await db.query(
                    `
          INSERT INTO seating_allocations
          (
            exam_id,
            student_id,
            hall_id,
            row_number,
            seat_number
          )
          VALUES (?, ?, ?, ?, ?)
          `,
                    [
                        exam_id,
                        student.id,
                        hall_id,
                        row,
                        seat,
                    ]
                );

                studentIndex++;
            }
        }

        res.json({
            message: "Seating allocated successfully",
            total_allocated: students.length,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Seating allocation failed",
        });
    }
});

// =========================
// GET SEATING
// =========================
app.get("/api/seating/:examId", async (req, res) => {
    try {
        const { examId } = req.params;

        const [rows] = await db.query(`
      SELECT
        sa.id,
        sa.row_number,
        sa.seat_number,

        s.name,
        s.register_number,
        s.department,

        h.hall_name

      FROM seating_allocations sa

      JOIN students s
        ON sa.student_id = s.id

      JOIN exam_halls h
        ON sa.hall_id = h.id

      WHERE sa.exam_id = ?

      ORDER BY
        sa.row_number,
        sa.seat_number
    `, [examId]);

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to load seating",
        });
    }
});

// =========================
// STUDENT SEAT
// =========================
app.get(
    "/api/student-seat/:registerNumber",
    async (req, res) => {
        try {
            const { registerNumber } = req.params;

            const [rows] = await db.query(`
        SELECT
          s.name,
          s.register_number,
          s.department,

          e.exam_name,
          e.subject,
          e.exam_date,
          e.start_time,
          e.end_time,

          h.hall_name,

          sa.row_number,
          sa.seat_number

        FROM seating_allocations sa

        JOIN students s
          ON sa.student_id = s.id

        JOIN examinations e
          ON sa.exam_id = e.id

        JOIN exam_halls h
          ON sa.hall_id = h.id

        WHERE s.register_number = ?

        ORDER BY e.exam_date ASC
      `, [registerNumber]);

            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Failed to load student seating",
            });
        }
    }
);

// =========================
// SERVER
// =========================
app.listen(5000, () => {
    console.log(
        "SmartSeat Backend running on http://localhost:5000"
    );
});