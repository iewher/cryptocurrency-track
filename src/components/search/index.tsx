"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import styles from "./index.module.scss";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.Search}>
      <form className={styles.Search}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Название монеты"
        />
        <button type="submit">
          <FiSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
