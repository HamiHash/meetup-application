// import MeetupDetail from "../../components/meetups/MeetupDetail";
// import Head from "next/head";
// import { Fragment } from "react";
// import { useRouter } from "next/router";

// let placeId;
// let dbId;
// function MeetupDetails(props) {
//   router = useRouter();
//   placeId = router.pathname.slice(1);
//   dbId = props.meetupData.id;
//   return (
//     <Fragment>
//       <Head>
//         <title>{props.meetupData.title}</title>
//       </Head>
//       <MeetupDetail
//         image={props.meetupData.image}
//         title={props.meetupData.title}
//         address={props.meetupData.address}
//         description={props.meetupData.description}
//       />
//     </Fragment>
//   );
// }

// export function getStaticPaths() {
//   return {
//     fallback: false,
//     paths: [
//       {
//         params: {
//           meetupId: placeId,
//         },
//       },
//     ],
//   };
// }

// export async function getStaticProps(context) {
//   // fetch
//   const client = await MongoClient.connect(
//     "mongodb+srv://UserNo1:88714659@atlascluster.ra9n7jk.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection("meetups");

//   const data = await meetupsCollection.find().toArray();

//   client.close();

//   // const meetupsdata = data
//   //   .filter((i) => i._id.toString() !== placeId)
//   //   .map((i) => ({
//   //     title: i.title,
//   //     image: i.image,
//   //     address: i.address,
//   //     description: i.description,
//   //     id: i._id.toString(),
//   //   }));
//   return {
//     props: {
//       meetups: data,
//     },
//     revalidate: 1, //? /////// if data changes frequently (we regenerate every 1 sec here)
//   };
// }

export default MeetupDetails;
