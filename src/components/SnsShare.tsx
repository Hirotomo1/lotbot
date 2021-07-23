import React, { FC, useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

const SnsShare: FC = () => {
  const [dropdownOpen, setOpen] = useState<boolean>(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret id="snswin_title">
        Share
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>シェアする</DropdownItem>
        <DropdownItem>
          <FacebookShareButton
            className="facebook"
            url={"http://localhost:3000/"}
          >
            <FacebookIcon size={40} round />
          </FacebookShareButton>
        </DropdownItem>
        <DropdownItem>
          <TwitterShareButton
            className="twitter"
            url={"http://localhost:3000/"}
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>
        </DropdownItem>
        <DropdownItem>
          <LineShareButton className="line" url={"http://localhost:3000/"}>
            <LineIcon size={40} round />
          </LineShareButton>
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default SnsShare;
