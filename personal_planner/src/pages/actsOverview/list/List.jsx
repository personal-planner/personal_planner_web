import React from "react";

import { List, Avatar, Space, Divider } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import Search from "antd/lib/input/Search";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const PlanList = () => {
  return (
    <div
      style={{
        margin: "2em",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div>
        <Search
          size="large"
          placeholder="Search"
          style={{ marginBottom: "1em" }}
        />
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={(item) => (
            <List.Item
              style={{
                background: "white",
                borderRadius: "12px",
                marginBottom: "1em",
              }}
              key={item.title}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
              <Divider />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default PlanList;
