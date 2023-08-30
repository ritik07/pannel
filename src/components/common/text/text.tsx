import React, { memo, useState } from "react";
import { pxToRem } from "../../../utils/factory-functions.util";
import CSS from "./text.module.scss";

interface TextAtomProps {
  text: string;
  id?: string;
  type?: string;
  className?: string;
  fontWeight?: number;
  ellipsis?: boolean;
  maxEllipsisWidth?: string | number;
  lineHeight?: number;
  webkitLineClamp?: number;
  showReadMore?: boolean;
  maxTextLength?: number;
  textAlign?: string;
  expand?: boolean;
  onClickReadMore?: Function;
  style?: {};
}

const classes: any = {
  header: "cs-header",
  "header-1": "cs-header-1",
  heading: "cs-heading",
  title: "cs-title",
  label: "cs-label",
  "heading-label": "cs-heading-label",
  "section-heading": "cs-section-heading",
  "section-description": "cs-section-description",
  "heading-1": "cs-heading-1",
  "heading-2": "cs-heading-2",
  "heading-3": "cs-heading-3",
}; // TODO: create separate file to import types

function Text({
  text = "",
  id,
  type = classes.heading,
  className = "",
  ellipsis = false,
  lineHeight = undefined,
  maxEllipsisWidth = "",
  fontWeight = 500,
  webkitLineClamp = 1,
  showReadMore = false,
  onClickReadMore = () => console.log("clicked"),
  expand = false,
  maxTextLength = 100,
  style = {},
}: TextAtomProps): JSX.Element {
  // TODO: to impliment the on click functionality on read more

  const computedClassName: string = (
    CSS[classes[type]] ? CSS[classes[type]] : ""
  ) as string;

  const truncatedText = expand ? text : text?.slice(0, maxTextLength) + "...";

  return (
    <>
      <div
        style={{
          WebkitLineClamp: webkitLineClamp,
          fontWeight: fontWeight,
          lineHeight: pxToRem(lineHeight),
          width:
            ellipsis && maxEllipsisWidth
              ? pxToRem(maxEllipsisWidth)
              : undefined,
          ...style,
        }}
        data-testid={"text" + id}
        className={
          (ellipsis && !expand ? CSS.cs_text_ellipsis : "") +
          (ellipsis && expand ? CSS.cs_text_expand : "") +
          ` ${computedClassName} ${className}`
        }
      >
        {showReadMore ? truncatedText : text}
        {showReadMore && (
          <span className={CSS.read_more} onClick={() => onClickReadMore()}>
            {showReadMore && !expand && text?.length > maxTextLength
              ? " Read More"
              : expand && " Show less"}
          </span>
        )}
      </div>
    </>
  );
}

const TextAtom = memo(Text);
export default TextAtom;
