import React from "react";
import "../../scss/check/check.scss";

import { GET_SELECTION_COIN } from "../get_api/GET_API_CHECK";

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
