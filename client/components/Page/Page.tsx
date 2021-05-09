import BlockList from "components/BlockList";
import { IBlock } from "components/BlockRenderer/BlockRenderer";
// import { Emoji } from "components/EmojiPicker/EmojiPicker";
import { motion } from "framer-motion";
import React from "react";

export type IPage = {
  pages?: IPage[];
  blocks: IBlock[];
  emoji: string;
  title: string;
};

type Props = {
  page: IPage;
};

/**
 * Renders a page
 *
 * @param page
 * @returns
 */
const Page = ({ page }: Props) => {
  return (
    <div>
      <motion.div className="text-7xl mb-6 p-2 w-min hover:bg-gray-100 rounded-md cursor-pointer relative">
        {page.emoji}
      </motion.div>

      <h1 className="text-4xl font-bold">{page.title}</h1>
      <BlockList blocks={page.blocks} />
    </div>
  );
};

export default Page;
