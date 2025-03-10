import React from 'react';

import {
  Card,
  CardBody,
  CardHeader, Col, Row
} from "reactstrap";

export default function(props) {
  return (
    <Card className="bg-gradient-default shadow">
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <Col>
            <h6 className="text-uppercase text-light ls-1 mb-1">
              服务器统计
            </h6>
            <h2 className="text-white mb-0">{props.statName}</h2>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="text-center mt-2 mb-2">
          没有权限!
        </div>
        <div className="btn-wrapper text-center">
          <i className="fas fa-lock fa-4x"/>
        </div>
        <div className="text-center mt-2 mb-2">
          您无权查看服务器统计.
        </div>
      </CardBody>
    </Card>
  );
}