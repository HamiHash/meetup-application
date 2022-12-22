import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

//* Data fetching for pre-rendering
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Me meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch
  const client = await MongoClient.connect(
    "mongodb+srv://UserNo1:88714659@atlascluster.ra9n7jk.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((i) => ({
        title: i.title,
        image: i.image,
        address: i.address,
        id: i._id.toString(),
      })),
    },
    revalidate: 1, //? /////// if data changes frequently (we regenerate every 1 sec here)
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     //? getServerSideProps will revalidate on every run
//   };
// }

export default HomePage;
