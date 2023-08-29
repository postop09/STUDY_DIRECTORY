import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ExcelBtn from "./ExcelBtn.jsx";
import Dropdown from "tuneit-tds-test/dist/components/Dropdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <div>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              start: "today",
              center: "title",
              end: "prev,next",
              right: "dayGridMonth,timeGridDay",
            }}
            height={"70vh"}
            dateClick={(item) => (item.view.type = "timeGridDay")}
            // editable
            events={[
              { title: "10호7772 (조윤식)", date: "2023-08-15 20:00" },
              { title: "12호7922", date: "2023-08-15" },
              { title: "12호7922", date: "2023-08-15" },
              { title: "12호7922", date: "2023-08-15" },
              { title: "62호3922", start: "2023-08-15", end: "2023-08-18" },
              { title: "event 2", date: "2023-08-02" },
            ]}
            // dayHeaderContent={(e) => DAY[e.dow]}
            locale={"ko"}
            dayMaxEventRows
            dayCellContent={(e) => e.dayNumberText.split("일")[0]}
            buttonText={{ today: "오늘" }}
            navLinks
            selectable
            // eventContent={(e) => <p>{e.event.title}</p>}
          />
        </div>
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
      <ExcelBtn />
      <Dropdown
        dropdownList={[{ code: "PLEASE", codeName: "1" }]}
        onChange={() => {}}
      />
    </>
  );
}

export default App;
