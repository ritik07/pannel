import React from "react";
import { Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import CSS from "../form.page.module.scss";

const { Title, Text } = Typography;

interface ITabHeaderProps {
  label: string;
  heading: string;
  title: string;
  isActive: boolean;
  active: number;
  key: number;
  isProgress: boolean;
  progress?: number;
}

const getTabHeader = ({
  label,
  heading,
  title,
  isActive,
  active,
  key,
  isProgress,
  progress = 0,
}: ITabHeaderProps): JSX.Element => {
  const currentLocation = window.location.pathname.split("/");
  return (
    <div>
      <div className="cs-dis-flex">
        <Text disabled>
          {+active > key ? "Complete" : active === key ? "Current" : "Pending"}
        </Text>
        {isProgress && (
          <div className="cs-dis-flex">
            <div className="cs-dis-flex cs-center cs-lm-8">
              <div
                className={CSS.cs_progress_step}
                style={{
                  // backgroundColor: progress >= 1 ? "#27ae60" : "#c5c6c8",
                  backgroundColor: progress >= 1 ? "#27ae60" : "#c5c6c8",
                }}
              ></div>
            </div>
            <div className="cs-dis-flex cs-center cs-lm-8">
              <div
                className={CSS.cs_progress_step}
                style={{
                  backgroundColor: progress >= 2 ? "#27ae60" : "#c5c6c8",
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
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
  progressValue: number;
}

export const ITEMS = ({ active = 1, progressValue = 0 }: IItemsProps) => [
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
      isProgress: false,
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
      isProgress: false,
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
      isProgress: true,
      progress: progressValue,
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
      isProgress: false,
    }),
    // children: `Content of Tab Pane 3`,
  },
];
