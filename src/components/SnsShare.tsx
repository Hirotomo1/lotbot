import React, { FC } from "react";
import { Card } from "reactstrap";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

const SnsShare: FC = () => {
  return (
    <>
      <Card className="card-header" id="snswin_title">
        シェアする
      </Card>
      <FacebookShareButton className="facebook" url={"http://localhost:3000/"}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <TwitterShareButton className="twitter" url={"http://localhost:3000/"}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <LineShareButton className="line" url={"http://localhost:3000/"}>
        <LineIcon size={40} round />
      </LineShareButton>
    </>
  );
};

export default SnsShare;
