import { Icon } from "@iconify-icon/react";
import styles from './main.module.scss';

export default function Arrows() {
  return (
    <div className={styles['arrows']}>
      <Icon icon="material-symbols:arrow-circle-left-rounded" />
      <Icon icon="material-symbols:arrow-circle-right-rounded" />
    </div>
  );
}
