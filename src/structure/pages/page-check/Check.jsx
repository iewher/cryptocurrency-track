import React, { useState } from "react";
import "./style/check-style.scss";

import { GET_SELECTION_COIN } from "../../../components/GET_API/GET_API_CHECK";

export default function Check() {
  return (
    <div className="check">
      <div className="check-body">
        <div className="check-table">
          <GET_SELECTION_COIN />
        </div>
      </div>
    </div>
  );
}
