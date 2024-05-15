import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const Forecast = ({ data }) => {
  
  const WEEK_DAYS = [
    "Monday",
    "Tuesdasy",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const today = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, today)
  );
  return (
    <>
      <label className="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.floor(item.main.temp_min)}°C / {item.main.temp_max}
                      °C
                    </label>
                    <img
                      alt="weather"
                      className="small-icon"
                      src={`icon/${item.weather[0].icon}.png`}
                    />
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="panel">
                  <div className="panel-items">
                    <label className="feels_like">
                      Feels Like: {item.main.feels_like} °C
                    </label>
                  </div>
                  <div className="panel-items">
                    <label className="wind">
                      Wind Speed: {item.wind.speed} m/s
                    </label>
                  </div>
                  <div className="panel-items">
                    <label className="humidity">
                      Humidity: {item.main.humidity} %
                    </label>
                  </div>
                  <div className="panel-items">
                    <label className="pressure">
                      Pressure: {item.main.pressure} Pa
                    </label>
                  </div>
                  <div className="panel-items">
                    <label className="Sea Level">
                      Sea Level: {item.main.sea_level} m
                      </label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default Forecast;
