import { Col, Row } from "antd"
import { Feed } from "../components/Feed"
import {CreateTweetForm} from "../components/CreateTweetForm";
import { SignupForm } from "../components/SignupForm";
import { Profile } from "../components/Profile";

export default () => (
  <Row>
   
    <Col md={{ span: 10, offset: 8 }}>
    <Profile/>
    </Col>
    <Col md={{ span: 10, offset: 8 }}>
    <CreateTweetForm/>
    </Col>
    <Col md={{ span: 10, offset: 8 }}>
    <Feed/>
    </Col>
  </Row>
)
