import { IBlock } from "components/BlockRenderer/BlockRenderer";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const BlockList = dynamic(import("components/BlockList/BlockList"));

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
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  }, []);

  return (
    <div>
      <div className="text-7xl mb-6 p-2 w-min hover:bg-gray-100 rounded-md cursor-pointer relative select-none">
        {page.emoji}
      </div>

      <h1 className="text-4xl font-bold">{page.title}</h1>
      {winReady ? <BlockList blocks={page.blocks} /> : null}
    </div>
  );
};

export default Page;
