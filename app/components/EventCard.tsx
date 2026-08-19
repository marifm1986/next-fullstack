"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

interface Props {
  title: string;
  image: string;
  url: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, url, location, date, time }: Props) => {
  const handleClick = () => {
    posthog.capture("event_card_clicked", {
      event_title: title,
      event_location: location,
      event_date: date,
    });
  };

  return (
    <Link href={`${url}`} id="event-card" onClick={handleClick}>
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      ></Image>
      <div className="flex gap-2">
        <Image
          src="/icons/pin.svg"
          alt="location"
          width={14}
          height={14}
        ></Image>
        <p>{location}</p>
      </div>
      <p className="Title">
        {title} | <small>{date}</small>
      </p>
      <div className="datetime">
        <div>
          <Image
            src="/icons/calendar.svg"
            alt="date"
            width={14}
            height={14}
          ></Image>
          <p>{date}</p>
        </div>
        <div>
          <Image
            src="/icons/clock.svg"
            alt="date"
            width={14}
            height={14}
          ></Image>
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
