import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Soumyajit Ghosh",
      rollNumber: "231001102142",
      department: "BCA",
      semester: "6",
      cgpa: 7.44,
      photo: "https://i.pravatar.cc/300?img=12"
    },
    {
      name: "Rahul Sharma",
      rollNumber: "231001102101",
      department: "BCA",
      semester: "6",
      cgpa: 8.21,
      photo: "https://i.pravatar.cc/300?img=13"
    },
    {
      name: "Priya Das",
      rollNumber: "231001102115",
      department: "BCA",
      semester: "6",
      cgpa: 9.02,
      photo: "https://i.pravatar.cc/300?img=47"
    },
    {
      name: "Amit Roy",
      rollNumber: "231001102126",
      department: "BCA",
      semester: "6",
      cgpa: 7.89,
      photo: "https://i.pravatar.cc/300?img=11"
    }
  ]);

  const sortByCGPA = () => {
    const sortedStudents = [...students].sort(
      (a, b) => b.cgpa - a.cgpa
    );

    setStudents(sortedStudents);
  };

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <div className="title-section">
          <h2>Student Directory</h2>

          <button onClick={sortByCGPA}>
            Sort by CGPA
          </button>
        </div>

        <StudentList students={students} />
      </main>

      <Footer />
    </div>
  );
}

export default App;