import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "./styles/3DTheme.css";
import Login from "./pages/Login";

import StudentDashboard from "./pages/StudentDashboard";
import StudentSeating from "./pages/StudentSeating";

import StaffDashboard from "./pages/StaffDashboard";
import Examinations from "./pages/Examinations";
import Students from "./pages/Students";
import StaffSeating from "./pages/StaffSeating";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ================= LOGIN ================= */}

        <Route
          path="/"
          element={<Login />}
        />


        {/* ================= STUDENT ================= */}

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/student-seating"
          element={<StudentSeating />}
        />


        {/* ================= STAFF ================= */}

        <Route
          path="/staff-dashboard"
          element={<StaffDashboard />}
        />

        <Route
          path="/examinations"
          element={<Examinations />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/staff-seating"
          element={<StaffSeating />}
        />


        {/* ================= INVALID URL ================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;