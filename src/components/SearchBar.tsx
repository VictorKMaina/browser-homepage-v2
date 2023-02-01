import styles from "@styles/modules/Searchbar.module.scss";
import { Icon } from "@iconify-icon/react";
import { FormEvent } from "react";
import Button from "./Button";
import Input from "@/components/Input";

function SearchBar() {
  function handleSearchOnChange() {}
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={styles["search-bar-wrapper"]}
    >
      <Input
        onChange={handleSearchOnChange}
        id="search"
        name="search"
        icon="material-symbols:search"
        placeholder="Search the web..."
        value=""
        button={
          <Button
            style={{ order: 2 }}
            type="submit"
            icon="material-symbols:search"
          />
        }
      >
        <div className={styles["google-icon"]}>
          <Icon icon="bxl:google" />
        </div>
      </Input>
    </form>
  );
}

export default SearchBar;
