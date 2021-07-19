import React, { FC } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

const SnsShare: FC = () => {
  return (
    <>
      <h6 id="snswin_title">シェアする</h6>
      <div id="snsbutton">
        <FacebookShareButton
          className="facebook"
          url={"http://localhost:3000/"}
        >
          <FacebookIcon size={50} round />
        </FacebookShareButton>
        <TwitterShareButton className="twitter" url={"http://localhost:3000/"}>
          <TwitterIcon size={50} round />
        </TwitterShareButton>
        <LineShareButton className="line" url={"http://localhost:3000/"}>
          <LineIcon size={50} round />
        </LineShareButton>
      </div>
    </>
  );
};

export default SnsShare;
