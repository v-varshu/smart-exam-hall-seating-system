
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
    return (
        <div className="home">

            <nav className="navbar">
                <h2>SmartSeat</h2>

                <div>
                    <Link to="/staff-login">Staff Login</Link>
                    <Link to="/student-login">Student Login</Link>
                </div>
            </nav>

            <section className="hero">

                <div className="hero-content">

                    <h1>
                        Smart Exam Hall
                        <span> Seating System</span>
                    </h1>

                    <p>
                        Automatically organize examination seating,
                        manage students and halls, and generate
                        smart seating arrangements with ease.
                    </p>

                    <div className="buttons">

                        <Link to="/staff-login" className="primary-btn">
                            Staff Login
                        </Link>

                        <Link to="/student-login" className="secondary-btn">
                            Student Login
                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;