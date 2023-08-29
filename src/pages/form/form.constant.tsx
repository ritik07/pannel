import React from "react";
import TextAtom from "../../components/atoms/text/text";

interface ITabHeaderProps {
  label: string;
  heading: string;
  title: string;
  isActive: boolean;
}

const getTabHeader = ({
  label,
  heading,
  title,
  isActive,
}: ITabHeaderProps): JSX.Element => {
  return (
    <div>
      <TextAtom text={label} type="label" />
      <TextAtom
        style={{ color: isActive ? "#38b65a" : "" }}
        text={heading}
        type="heading-1"
      />
      <TextAtom text={title} type="heading" />
    </div>
  );
};

interface IItemsProps {
  active: number;
}

export const ITEMS = ({ active = 1 }: IItemsProps) => [
  {
    key: 1,
    path: "/layout/earn",
    label: getTabHeader({
      label: "current",
      heading: "1.Lorem ipsum dolor sit",
      title: "lorem ipsum dolor sit",
      isActive: active === 1 ? true : false,
    }),
    // children: `Content of Tab Pane 1`,
  },
  {
    key: 2,
    path: "/layout/redeem",
    label: getTabHeader({
      label: "current",
      heading: "2.Lorem ipsum dolor sit",
      title: "lorem ipsum dolor sit",
      isActive: active === 2 ? true : false,
    }),
    // children: `Content of Tab Pane 2`,
  },
  {
    key: 3,
    path: "/layout/giveaway",
    label: getTabHeader({
      label: "current",
      heading: "3.Lorem ipsum dolor sit",
      title: "lorem ipsum dolor sit",
      isActive: active === 3 ? true : false,
    }),
    // children: `Content of Tab Pane 3`,
  },
  {
    key: 4,
    path: "/layout/configuration",
    label: getTabHeader({
      label: "current",
      heading: "4.Lorem ipsum dolor sit",
      title: "lorem ipsum dolor sit",
      isActive: active === 4 ? true : false,
    }),
    // children: `Content of Tab Pane 3`,
  },
];
