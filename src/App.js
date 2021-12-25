import { useState } from "react";
import StudentList from "./components/StudentList";
import data from "./data";
import { StudentContext } from "./context/StudentContext";

function App() {
  const [students, setStudents] = useState(data);

  return (
    <div>
      <StudentContext.Provider value={{ students }}>
        <StudentList />
      </StudentContext.Provider>
    </div>
  );
}

export default App;
