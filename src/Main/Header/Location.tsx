import Button from "../../shared/components/Button"
import styles from "./header.module.scss"

function Location() {
  return (
    <div className={styles["location-wrapper"]}>
      <Button icon="ic:sharp-location-on">Mombasa, Kenya</Button>
    </div>
  )
}

export default Location