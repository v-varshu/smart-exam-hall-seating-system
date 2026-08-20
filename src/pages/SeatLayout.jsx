* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #eef2f7;
}

.seat-app {
  min-height: 100vh;
}

/* HEADER */

.top-header {
  height: 85px;
  background: #0b2345;
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 35px;
}

.brand {
  width: 250px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: bold;
}

.brand svg {
  font-size: 28px;
}

.page-title {
  text-align: center;
}

.page-title h1 {
  margin: 0;
}

.page-title p {
  margin: 6px;
  color: #d6ddea;
}

.user-area {
  width: 280px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 10px;
}

.user-area div {
  display: flex;
  flex-direction: column;
}

.user-icon {
  font-size: 35px;
}

.user-area button {
  margin-left: 10px;

  padding: 10px 18px;

  background: #416bc4;
  color: white;

  border: none;
  border-radius: 6px;

  cursor: pointer;
}

/* LAYOUT */

.main-layout {
  display: flex;
}

.sidebar {
  width: 240px;
  min-height: calc(100vh - 140px);

  padding: 22px 16px;

  border-right: 1px solid #cbd5e1;
}

.sidebar-menu {
  display: flex;
  gap: 15px;
  align-items: center;

  padding: 15px;

  margin-bottom: 8px;

  border-radius: 8px;
}

.sidebar-menu.active {
  background: #416bc4;
  color: white;
}

/* CONTENT */

.content {
  flex: 1;
  padding: 24px 20px;
}

.info-grid {
  display: grid;

  grid-template-columns:
    1.2fr
    1.2fr
    0.8fr
    1.4fr
    1.4fr;

  gap: 15px;

  margin-bottom: 18px;
}

.info-card {
  background: white;

  border: 1px solid #ccd6e2;
  border-radius: 10px;

  padding: 18px;

  min-height: 125px;
}

.info-card p {
  color: #657386;
  font-size: 14px;
}

.info-card h2,
.info-card h3 {
  margin-top: 8px;
}

/* SEATING */

.dashboard-grid {
  display: grid;

  grid-template-columns: 1fr 320px;

  gap: 18px;
}

.seating-section {
  background: white;

  border: 1px solid #d1d9e3;
  border-radius: 10px;

  overflow: hidden;
}

.seating-header {
  display: flex;
  justify-content: space-between;

  padding: 14px 18px;
}

.seating-header h2 {
  margin: 0;
  font-size: 17px;
}

.seating-header span {
  font-size: 13px;
}

.column-numbers {
  display: grid;

  grid-template-columns: 90px repeat(3, 1fr);

  background: #edf2f7;
}

.column-numbers div {
  padding: 8px;

  text-align: center;

  border: 1px solid #d8e0e9;
}

.seat-row {
  display: grid;

  grid-template-columns: 90px repeat(3, 1fr);

  min-height: 80px;
}

.row-label {
  display: flex;
  align-items: center;
  justify-content: center;

  background: #edf2f7;

  border: 1px solid #d8e0e9;
}

.bench {
  width: 185px;
  height: 65px;

  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 8px;

  background: #f2e5d1;

  border: 1px solid #d4b57d;
  border-radius: 10px;
}

.student-bench {
  background: #d9f1df;
  border-color: #8ac79a;
}

.seat {
  text-align: center;

  font-size: 12px;
}

.chair-icon {
  width: 44px;
  height: 24px;

  margin: 2px auto 5px;

  background: #cbd3dd;

  border: 1px solid #a9b5c2;

  border-radius: 6px;
}

.my-seat .chair-icon {
  background: #9bdbaa;
  border-color: #6fb780;
}

/* LEGEND */

.legend {
  display: flex;
  justify-content: center;

  gap: 40px;

  padding: 20px;
}

.legend div {
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 13px;
}

.box {
  width: 25px;
  height: 22px;

  border-radius: 4px;
}

.green {
  background: #b5e6c0;
}

.gray {
  background: #cfd7e1;
}

.brown {
  background: #f2e5d1;
  border: 1px solid #d4b57d;
}

/* RIGHT */

.right-panel {
  display: flex;
  flex-direction: column;

  gap: 15px;
}

.seat-details-card,
.hall-map-card {
  background: white;

  border: 1px solid #ccd6e2;
  border-radius: 10px;

  overflow: hidden;
}

.seat-details-card > h3 {
  margin: 0;

  padding: 15px;

  background: #e2f1e7;
}

.seat-content {
  padding: 18px;
}

.seat-content h2 {
  color: #39804e;
}

.success-message {
  display: flex;
  align-items: center;

  gap: 10px;

  padding: 14px;

  background: #e4f4e8;

  border-radius: 7px;
}

/* MAP */

.hall-map-card {
  padding: 18px;
}

.floor-plan {
  width: 200px;
  height: 200px;

  margin: 20px auto;

  position: relative;

  border: 1px solid #435366;

  background: #edf2f7;
}

.stairs {
  position: absolute;

  top: 0;
  left: 65px;

  width: 70px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;

  border: 1px solid #718096;

  font-size: 12px;
}

.hall-room {
  position: absolute;

  top: 52px;
  left: 35px;

  width: 130px;
  height: 110px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #d8e4f2;

  border: 1px solid #7d8da0;
}

.pin {
  position: absolute;

  right: -10px;
  bottom: 10px;

  color: #e74c3c;

  font-size: 28px;
}

.entrance {
  position: absolute;

  bottom: 0;
  left: 50px;

  width: 100px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;

  border: 1px solid #718096;

  font-size: 12px;
}

.map-link {
  text-align: center;
  color: #3563b7;
}

/* BUTTON */

.ticket-btn {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  width: 190px;

  margin: auto;

  padding: 12px;

  background: #416bc4;
  color: white;

  border: none;
  border-radius: 5px;

  cursor: pointer;
}

/* INSTRUCTIONS */

.instructions {
  margin-top: 20px;

  padding: 14px;

  background: #eef5ff;

  border: 1px solid #85a8da;
  border-radius: 7px;
}

.instructions h3 {
  margin: 0;
}

/* FOOTER */

footer {
  background: #0b2345;
  color: white;

  padding: 20px 35px;
}

/* RESPONSIVE */

@media (max-width: 1100px) {

  .info-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}