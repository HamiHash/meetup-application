import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 1,
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1543872084-c7bd3822856f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    address: "Some address 5, 1235 some city",
    description: "This is the first meetup",
  },
  {
    id: 2,
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1543872084-c7bd3822856f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    address: "Some address 5, 1235 some city",
    description: "This is the second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
