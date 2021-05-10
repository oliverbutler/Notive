import React from "react";
import { Icon, Image, isIcon, isImage } from "types/block";

interface Props {
  icon: Image | Icon;
  className?: string;
}

/**
 * Render an Icon or Image dynamically as a small or large Icon,
 * this exists as for numerous images and icons throughout we
 * have the option of an Emoji icon or an Image
 */
const IconRender = ({ icon, className }: Props) => {
  if (isImage(icon))
    return (
      <div className={className || ""}>
        <img src={icon.url} />
      </div>
    );
  if (isIcon(icon)) return <div className={className}>{icon.emoji}</div>;
};

export default IconRender;
