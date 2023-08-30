import React from "react";
import { Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface ITabHeaderProps {
  label: string;
  heading: string;
  title: string;
  isActive: boolean;
  active: number;
  key: number;
}

const getTabHeader = ({
  label,
  heading,
  title,
  isActive,
  active,
  key,
}: ITabHeaderProps): JSX.Element => {
  return (
    <div>
      <Text disabled>
        {+active > key ? "Complete" : active === key ? "Current" : "Pending"}
      </Text>
      <div className="cs-dis-flex cs-jc-sb">
        <Title className={isActive ? "cs-color-secondary" : ""} level={4}>
          {heading}
        </Title>
        <div className="cs-dis-flex cs-center cs-rm-16">
          {+active > key && (
            <CheckOutlined className="cs-color-primary cs-fs-32" />
          )}
        </div>
      </div>
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
      active: active,
      key: 1,
    }),
    // children: `Content of Tab Pane 1`,
  },
  {
    key: 2,
    path: "/layout/redeem",
    label: getTabHeader({
      label: "Pending",
      heading: "2.Lorem ipsum dolor sit",
      title: "lorem ipsum dolor sit",
      isActive: active === 2 ? true : false,
      active: active,
      key: 2,
    }),
    // children: `Content of Tab Pane 2`,
  },
  {
    key: 3,
    path: "/layout/giveaway",
    label: getTabHeader({
      label: "Pending",
      heading: "3.Lorem ipsum dolor sit",
      title: "lorem ipsum dolor sit",
      isActive: active === 3 ? true : false,
      active: active,
      key: 3,
    }),
    // children: `Content of Tab Pane 3`,
  },
  {
    key: 4,
    path: "/layout/configuration",
    label: getTabHeader({
      label: "Pending",
      heading: "4.Lorem ipsum dolor sit",
      title: "lorem ipsum dolor sit",
      isActive: active === 4 ? true : false,
      active: active,
      key: 4,
    }),
    // children: `Content of Tab Pane 3`,
  },
];
