import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home: React.FC = () => {
  const now: Date = new Date();

  // Format time
  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : String(time);
  };

  const hours: number = now.getHours();
  const mins: string = formatTime(now.getMinutes());
  const ampm: string = hours >= 12 ? "PM" : "AM";
  const formattedHours: string = formatTime(hours % 12 || 12); // Convert to 12-hour format

  // Format date
  const weekdays: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayOfMonth: number = now.getDate();
  const month: string = months[now.getMonth()];
  const year: number = now.getFullYear();
  const formattedDate: string = `${
    weekdays[now.getDay()]
  }, ${month} ${dayOfMonth}, ${year}`;

  return (
    <section className="flex flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover bg-right bg-no-repeat">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at {formattedHours}:{mins} {ampm}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {formattedHours}:{mins} {ampm}
            </h1>
            <p className="text-lg font-medium text-sky-3 lg:text-2xl">
              {formattedDate}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
