import React from "react";
import "./Calendar.css";
import Event from "./Event";

const Calendar = () => {
  const scheduleData = [
    {
      time: "8 am",
      events: {
        mon: "Gym (Early Session)",
        wed: "CodePath Sync",
        fri: "Review PRs & GitHub",
      },
    },
    {
      time: "9 am",
      events: {
        tue: "Standup Meeting",
        thu: "System Design Reading",
        sat: "LeetCode Weekly Contest",
      },
    },
    {
      time: "10 am",
      events: {
        mon: "LeetCode (Daily Easy/Med)",
        wed: "LeetCode (Daily Easy/Med)",
        fri: "LeetCode (Daily Easy/Med)",
      },
    },
    {
      time: "11 am",
      events: {
        tue: "LeetCode (Review Mistakes)",
        thu: "LeetCode (Review Mistakes)",
      },
    },
    { time: "12 pm", events: {} }, // Lunch break block
    {
      time: "1 pm",
      events: {
        mon: "CodePath Practice",
        wed: "CodePath Practice",
        fri: "CodePath Practice",
      },
    },
    {
      time: "2 pm",
      events: {
        tue: "CodePath Practice",
        thu: "CodePath Practice",
        sat: "Side Project Architecture",
      },
    },
    {
      time: "3 pm",
      events: {
        mon: "Side Project Coding",
        wed: "Side Project Coding",
        fri: "Open Source Contributions",
      },
    },
    {
      time: "4 pm",
      events: { tue: "Peer Mock Interview", thu: "Peer Mock Interview" }, // Live interactive practice
    },
    { time: "5 pm", events: {} },
    { time: "6 pm", events: {} },
    {
      time: "7 pm",
      events: {
        mon: "Daily Gym",
        tue: "Daily Gym",
        wed: "Daily Gym",
        thu: "Daily Gym",
        fri: "Daily Gym",
        sun: "Daily Gym",
      },
    },
  ];

  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="time-header">Time</th>
            {days.map((day) => (
              <th key={day} style={{ textTransform: "capitalize" }}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((row, i) => {
            return (
              <tr key={i}>
                <td className="time">{row.time}</td>
                {days.map((day) => {
                  const eventsGivenDay = row.events[day];
                  return (
                    <td key={day}>
                      {eventsGivenDay && <Event name={eventsGivenDay} />}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
