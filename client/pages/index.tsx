import Navbar from "components/Navbar/Navbar";
import Page from "components/Page/Page";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
import { Block, PageBlock, TypographyBlock } from "types/block";

const Home = () => {
  const page: PageBlock = {
    id: "1",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    title: "Page time 🚀",
    icon: {
      emoji: "🥰",
    },
    children: [
      {
        id: "4",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        variant: "h1",
        content: "Heading init",
        parentId: "1",
      },
      {
        id: "2",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        variant: "p",
        content: "I love you Tommy ❤️",
        parentId: "1",
      },
      {
        id: "6",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        variant: "h2",
        content: "Links init",
        parentId: "1",
      },
      {
        id: "3",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        title: "Bubbles Space",
        icon: {
          emoji: "🐈‍⬛",
        },
      },
      {
        id: "5",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        title: "Crypto",
        icon: {
          emoji: "🤑",
        },
      },
    ],
  };

  const blocks: Block[] = [page];

  return (
    <div id="app" className="flex flex-row">
      <Sidebar blocks={blocks} />
      <div id="page-container" className="flex flex-col flex-grow">
        <Navbar />
        <div className="w-1/2 mx-auto my-6 min-h-full">
          <Page page={page} />
        </div>
      </div>
    </div>
  );
};

export default Home;
