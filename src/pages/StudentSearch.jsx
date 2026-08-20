.student-search-page {
  min-height: 100vh;

  background: #edf3fa;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Arial, sans-serif;

  position: relative;
}

.back-btn {
  position: absolute;

  top: 30px;
  left: 40px;

  border: none;

  background: #0c2447;
  color: white;

  padding: 10px 20px;

  border-radius: 6px;

  cursor: pointer;
}

.search-card {
  width: 430px;

  background: white;

  padding: 45px;

  border-radius: 15px;

  text-align: center;

  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12);
}

.search-card h1 {
  color: #102b52;
}

.search-card p {
  color: #687585;

  line-height: 1.6;
}

.search-card input {
  width: 100%;

  padding: 15px;

  margin-top: 20px;

  border: 1px solid #bcc8d6;

  border-radius: 6px;

  font-size: 15px;
}

.search-card button:not(.back-btn) {
  width: 100%;

  margin-top: 18px;

  padding: 14px;

  background: #3d67bb;

  color: white;

  border: none;

  border-radius: 6px;

  font-size: 16px;

  cursor: pointer;
}