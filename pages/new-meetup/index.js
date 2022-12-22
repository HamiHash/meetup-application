import { useRouter } from "next/router";
import { Fragment } from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredData) {
    console.log(enteredData);

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
