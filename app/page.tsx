import React from "react";
import LightRays from "./components/LightRays";
import ExploreBtn from "./components/ExploreBtn";
import EventCard from "./components/EventCard";
import { events } from "@/lib/constants";





const Home = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        {" "}
        Hackathons, Meetups, and Conferences, all in One Place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7" id="events">
        <h3>Featured Events</h3>  
        <ul className="events list-none">
          {events.map((event: any) => (
            <li key={event}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
