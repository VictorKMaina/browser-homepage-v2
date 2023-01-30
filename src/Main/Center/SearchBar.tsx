import styles from "./center.module.scss";
import { Icon } from "@iconify-icon/react";
import { FormEvent } from "react";
import Button from "../../shared/components/Button";

function SearchBar() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={styles["search-bar-wrapper"]}
    >
      <label htmlFor="search" className={styles["search-bar"]}>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search the web..."
        />

        <Icon icon="bxl:google" />

        <Button type="submit" icon="material-symbols:search" />
      </label>
    </form>
  );
}

export default SearchBar;
