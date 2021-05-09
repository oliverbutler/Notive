import Navbar from "components/Navbar/Navbar";
import Page, { IPage } from "components/Page/Page";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";

const Home = () => {
  const pages: IPage[] = [
    {
      title: "Projects",
      emoji: "🚀",
      blocks: [{ id: 1, type: "typography.h1", text: "Many Projects" }],
      pages: [
        {
          title: "Notive",
          emoji: "💻",
          blocks: [
            { id: 1, type: "typography.h1", text: "Notive ❤️" },
            { id: 2, type: "typography.p", text: "Brand new text editor" },
          ],
        },
      ],
    },
    {
      title: "Todo List",
      emoji: "✅",
      blocks: [
        { id: 1, type: "typography.h1", text: "Heading 1" },
        { id: 2, type: "typography.p", text: "Wow, look at this line!" },
        { id: 3, type: "typography.h2", text: "Subheading 🚀" },
        { id: 3, type: "typography.p", text: "No - Look at me! 🙏" },
      ],
    },
    {
      title: "House Hunting",
      emoji: "🏡",
      blocks: [
        { id: 1, type: "typography.h1", text: "Heading 1" },
        { id: 2, type: "typography.p", text: "Wow, look at this line!" },
        { id: 3, type: "typography.h2", text: "Subheading 🚀" },
        { id: 3, type: "typography.p", text: "No - Look at me! 🙏" },
      ],
    },
  ];
  return (
    <div id="app" className="flex flex-row">
      <Sidebar pages={pages} />
      <div id="page-container" className="flex flex-col flex-grow">
        <Navbar />
        <div className="w-1/2 mx-auto my-6">
          <Page page={pages[1]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
