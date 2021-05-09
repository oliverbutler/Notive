import BlockList from "components/BlockList";
import { BlockInterface } from "components/BlockRenderer/BlockRenderer";
import { motion } from "framer-motion";
import React from "react";

const Page = () => {
  const blocks: BlockInterface[] = [
    { id: 1, type: "typography.h1", text: "Heading 1" },
    { id: 2, type: "typography.p", text: "Wow, look at this line!" },
    { id: 3, type: "typography.h2", text: "Subheading 🚀" },
    { id: 3, type: "typography.p", text: "No - Look at me! 🙏" },
  ];

  return (
    <div>
      <motion.div className="text-7xl mb-6 p-2 w-min hover:bg-gray-100 rounded-md cursor-pointer">
        🥰
      </motion.div>
      <h1 className="text-4xl font-bold">Page 1 📚</h1>
      <BlockList blocks={blocks} />
    </div>
  );
};

export default Page;
