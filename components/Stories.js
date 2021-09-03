import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Sarwar Hussain Dinar",
    src: "https://firebasestorage.googleapis.com/v0/b/facebook-75bc8.appspot.com/o/india%20photo-min.jpg?alt=media&token=a4d67471-fc31-4cad-819d-49b15e568caa",
    profile: "https://firebasestorage.googleapis.com/v0/b/facebook-75bc8.appspot.com/o/logo.png?alt=media&token=2a9e1ad8-652f-4c26-b256-7d273d023d60",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://firebasestorage.googleapis.com/v0/b/hsfacebook-8a90b.appspot.com/o/Story%2Findia%20photo.jpg?alt=media&token=b847ccaf-599e-4f37-87bc-505bebae2bd2",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
