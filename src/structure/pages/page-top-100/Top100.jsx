import React, { useState, useEffect, useMemo } from "react";
import "./style/top-100-style.scss";

import { GET_TOP_100 } from "../../../components/GET_API/GET_API";

export default function Top100() {
  return (
    <div className="top-100">
      <div className="top-100-body">
        <div className="top-100-body-header">Топ-100 криптовалют</div>
        <div className="top-100-table">
          <GET_TOP_100 />
        </div>
      </div>
    </div>
  );
}
