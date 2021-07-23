import React, { FC, useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const UpdateInformation: FC = () => {
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id="updatewin_title" type="button">
        Update Info
      </Button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="updatewin_title"
        toggle={toggle}
      >
        <PopoverHeader>Ver.1.0</PopoverHeader>
        <PopoverBody>
          USDJPY,USDCAD,USDCHFのロット計算を実装。USDCAD,USDCHFの2種はCADJPY,CHFJPYのレートを入力する必要があります。利用状況により対円レートの取得、及び他通貨のロット計算を実装予定です。
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default UpdateInformation;
