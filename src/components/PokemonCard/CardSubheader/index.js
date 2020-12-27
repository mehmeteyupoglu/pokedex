import React from "react";
import { CardSubtitle, CardBody } from "reactstrap";

export default function CardSubheader({ item }) {
  return (
    <div>
      <CardBody>
        <CardSubtitle tag="h6" className="mb-2 text-muted text-capitalize">
          {item.name}
        </CardSubtitle>
      </CardBody>
    </div>
  );
}
