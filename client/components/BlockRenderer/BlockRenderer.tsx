import React, { useState } from "react";

export type BlockInterface = {
  id: number;
  type: string;
  text: string;
};

const typography = (block: BlockInterface) => {
  switch (block.type) {
    case "typography.h1":
      return "text-2xl font-bold mt-6";
    case "typography.h2":
      return "text-xl font-bold mt-4";
    case "typography.h3":
      return "text-lg font-bold mt-3";
    default:
      return "text-base";
  }
};

interface BlockRendererProps {
  block: BlockInterface;
}

const BlockRenderer = ({ block }: BlockRendererProps) => {
  // Current block value
  const [text, setText] = useState(block.text);

  return (
    <input
      className={
        "bg-transparent w-full outline-none y-auto " + typography(block)
      }
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default BlockRenderer;
