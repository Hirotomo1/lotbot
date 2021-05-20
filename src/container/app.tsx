import React from "react";
import { connect } from "react-redux";

import LotCalc from "../components/LotCulc";
import changeMargin from "../action/marginAction";

function mapStateToProps(state: any) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return {
    numberChange: () => {
      dispatch(changeMargin);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LotCalc);
