'use client';
import React, { useCallback, useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import moment from 'moment';
import { EventProps, Views } from 'react-big-calendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventPopup from './EventPopup';
import './index.css';
import { EVENTS } from './constants';
import { EventItem } from './types';
import Calendar from './Calendar';
import { getWeekNumber, getMonthRange, formatTimeTo12Hour } from './Helpers';
import CustomSelect from './CustomSelect';

export enum TimeSlotMinutes {
  Five = 5,
  Ten = 10,
  Fifteen = 15,
  Thirty = 30,
}

type Keys = keyof typeof Views;

export default function NewCalendar() {
  const [isClient, setIsClient] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.MONTH);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Only set `isClient` to `true` after component mounts on client
    setIsClient(true);
  }, []);

  const onPrevClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).subtract(1, 'd').toDate());
    } else if (view === Views.WEEK) {
      setDate(moment(date).subtract(1, 'w').toDate());
    } else {
      setDate(moment(date).subtract(1, 'M').toDate());
    }
  }, [view, date]);

  const onNextClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).add(1, 'd').toDate());
    } else if (view === Views.WEEK) {
      setDate(moment(date).add(1, 'w').toDate());
    } else {
      setDate(moment(date).add(1, 'M').toDate());
    }
  }, [view, date]);

  const components: any = {
    event: ({ event }: EventProps<EventItem>) => {
      const data = event?.data;
      return (
        <div
          onClick={() => setShowPopup(true)}
          className={`event-${data?.type} h-[26px] rounded-md overflow-hidden text-[12px] px-[5px] py-[1px] flex justify-between items-center`}
        >
          <div className="flex justify-center items-center gap-2 font-semibold">
            <span className={`priority-${event?.importance}`}></span>
            <span>{data?.name}</span>
          </div>
          <span>{event.start && formatTimeTo12Hour(event.start)}</span>
        </div>
      );
    },
  };

  const onTodayClick = useCallback(() => {
    setDate(moment().toDate());
  }, []);

  const STEP = 5;
  const TIME_SLOTS = 60 / STEP;

  if (!isClient) return null; // Ensure components are rendered only on the client

  return (
    <div className="flex flex-col h-full w-full gap-2 rounded-lg bg-white shadow-sm">
      {/* TOP Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-center relative px-4 py-4 gap-5">
        {/* Left area */}
        <div className="flex items-center">
          <div className="flex w-[68px] h-[56px] flex-col p-1 text-xs justify-center rounded-lg uppercase items-center border-[1px] border-[#E9EAEB] bg-gray-100 gap-2">
            <span className="text-[#717680] text-[12px] font-semibold">
              {date.toLocaleString('en-US', { month: 'short' })}
            </span>
            <span className="font-bold text-[18px] text-[#20356A]">
              {date.getDate()}
            </span>
          </div>
          <div className="flex flex-col items-start ml-4 w-[290px]">
            <div className="flex justify-between items-center max-w-[290px]">
              <div className="relative text-[18px] text-[#181D27] font-bold w-[145px] flex items-center">
                <DatePicker
                  selected={date}
                  onChange={(date: Date) => setDate(date)}
                  showTimeSelect={false}
                  dateFormat="MMMM yyyy"
                />
              </div>
              <div className="border-[1px] text-[12px] border-[#E9EAEB] py-[2px] px-[4px] h-[27px] rounded-lg w-full flex items-center justify-center max-w-[80px] shadow-sm">
                Week {getWeekNumber(date)}
              </div>
            </div>
            <div className="text-[14px] text-[#535862] tracking-wider">
              {getMonthRange(date)}
            </div>
          </div>
        </div>

        {/* Right area */}
        <div className="flex gap-4 md:justify-end w-[374px]">
          <div className="flex h-[40px] w-[162px] justify-between border-[1px] rounded-md border-[#E9EAEB] px-1 shadow font-semibold text-[#414651]">
            <button className="mx-2" aria-label="Previous" onClick={onPrevClick}>
              <FiArrowLeft />
            </button>
            <button
              className="btn px-2 border-[#E9EAEB] border-x-2"
              onClick={onTodayClick}
            >
              Today
            </button>
            <button className="mx-2" aria-label="Next" onClick={onNextClick}>
              <FiArrowRight />
            </button>
          </div>
          <CustomSelect selected={view} onChange={setView} />
        </div>
      </div>

      {/* Calendar */}
      <div className="flex-1 w-full overflow-auto relative">
        <Calendar
          events={EVENTS}
          defaultDate={date}
          defaultView={Views.MONTH}
          min={moment('2022-10-10T09:00:00').toDate()}
          max={moment('2022-10-10T18:00:00').toDate()}
          components={components}
          toolbar={false}
          date={date}
          view={view}
          onView={setView}
          onNavigate={setDate}
          step={STEP}
          timeslots={TIME_SLOTS}
          style={{ minHeight: '22px' }}
        />
      </div>

      {showPopup && <EventPopup date={date} setShowPopup={setShowPopup} />}
    </div>
  );
}
