import ContentEditable from "react-contenteditable";
import React, { useState } from "react";

export type IBlock = {
  id: number;
  type: string;
  text: string;
};

const typography = (block: IBlock) => {
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
  block: IBlock;
}

const BlockRenderer = ({ block }: BlockRendererProps) => {
  // Current block value
  const [text, setText] = useState(block.text);

  return (
    <div className="relative">
      <ContentEditable
        className={
          "bg-transparent w-full outline-none y-auto text-left break-words " +
          typography(block)
        }
        onChange={(e) => setText(e.target.value)}
        contentEditable
        html={text}
      />
    </div>
  );
};

export default BlockRenderer;
