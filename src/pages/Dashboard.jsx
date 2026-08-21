function Dashboard() {

    return (
        <div className="dashboard">

            <h1>Staff Dashboard</h1>

            <p>
                Welcome to Smart Exam Hall Seating System
            </p>

            <div className="dashboard-cards">

                <div className="dashboard-card">
                    <h2>Students</h2>
                    <p>Manage student records</p>
                </div>

                <div className="dashboard-card">
                    <h2>Halls</h2>
                    <p>Manage examination halls</p>
                </div>

                <div className="dashboard-card">
                    <h2>Exams</h2>
                    <p>Create and manage exams</p>
                </div>

                <div className="dashboard-card">
                    <h2>Seating</h2>
                    <p>Generate smart seating</p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;