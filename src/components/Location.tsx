import Button from "./Button"
import styles from "@styles/modules/Location.module.scss";

function Location() {
  return (
    <div className={styles["location-wrapper"]}>
      <Button icon="ic:sharp-location-on">Mombasa, Kenya</Button>
    </div>
  )
}

export default Location