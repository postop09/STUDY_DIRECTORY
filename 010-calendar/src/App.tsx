import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function App() {
  const [count, setCount] = useState(0);
  // const DAY = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today",
            center: "title",
            end: "prev,next",
          }}
          height={"85vh"}
          dateClick={(item) => console.log(item)}
          editable
          events={[
            { title: "10호7772", date: "2023-08-15" },
            { title: "12호7922", date: "2023-08-15" },
            { title: "62호3922", start: "2023-08-15", end: "2023-08-18" },
            { title: "event 2", date: "2023-08-02" },
          ]}
          // dayHeaderContent={(e) => DAY[e.dow]}
          locale={"ko"}
          dayCellContent={(e) => e.dayNumberText.split("일")[0]}
          buttonText={{ today: "오늘" }}
        />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
