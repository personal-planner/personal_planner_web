import { Avatar, Card, Col } from "antd";

const CardAct = () => {
  return (
    <Col style={{ height: "fit-content" }}>
      <Card
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Card.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </Col>
  );
};

export default CardAct;
