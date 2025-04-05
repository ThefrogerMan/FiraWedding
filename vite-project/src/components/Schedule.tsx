type ScheduleType = {
  day: string;
  events: {
    name: string;
    time: string;
    location: string;
  }[];
};

export default function Schedule() {
  const Schedule: ScheduleType[] = [
    {
      day: "2025-04-20",
      events: [
        {
          name: "Drinks",
          time: "10:00",
          location: "Anor Londo",
        },
        {
          name: "Dance",
          time: "12:00",
          location: "Anor Londo",
        },
        {
          name: "Photos",
          time: "12:00",
          location: "Anor Londo",
        },
      ],
    },
  ];
  return (
    <div className="mt-12">
      scedule
      <div className="flex flex-col gap-4">
        {Schedule.map((day) => (
          <div key={day.day} className="flex flex-col gap-4">
            <div className="text-2xl font-bold">{day.day}</div>
            {day.events.map((event) => (
              <div key={event.name} className=" rounded-lg flex gap-2">
                <div>{event.time}</div>
                <div>{event.name}</div>
                {/* <div>{event.location}</div> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
