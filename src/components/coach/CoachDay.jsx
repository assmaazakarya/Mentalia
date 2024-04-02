import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { format, parseISO } from 'date-fns';
import stylo from "./Coach.module.css";

function CoachDay({ data }) {
  const dateObject = parseISO(data.createdAt);
  const formattedDate = format(dateObject, 'h:mm a');
  const date = new Date(data.createdAt);
  const formattedDate2 = format(date, 'MMMM dd');
  const date2 = new Date(data.createdAt);
  const formattedDay = format(date2, 'EEEE');

  const nav = useNavigate();
  function go() {
    nav(`/userDashboard/coach/CoachDayDetails/${data._id}`, { state: data });
  }
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 32,
          display: "inline-flex",
        }}
        onClick={go}
      >
        <div
          className={stylo.con}
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 14,
                wordWrap: "break-word",
              }}
            >
              {formattedDate}
            </div>
            <div
              style={{
                textAlign: "center",
                color: "#666666",
                fontSize: 14,
                wordWrap: "break-word",
              }}
            >
              {formattedDate2}
            </div>
          </div>
          <div style={{ width: 4, height: 64, background: "#c6bbff" }} />
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: 300,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  background: "#c6bbff",
                  borderRadius: 9999,
                  backgroundColor: "#c6bbff",
                }}
              />
              <div
                style={{
                  color: "black",
                  fontSize: 18,
                  wordWrap: "break-word",
                }}
              >
                {formattedDay}
              </div>
            </div>
            <div
              style={{
                width: 422,
                color: "#3C3C43",
                fontSize: 14,
                wordWrap: "break-word",
              }}
            >

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CoachDay
