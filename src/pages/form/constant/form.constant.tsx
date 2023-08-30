import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

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
      <Text disabled>{label}</Text>
      <Title className={isActive ? "cs-color-secondary" : ""} level={4}>
        {heading}
      </Title>
      <Text>{title}</Text>
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
