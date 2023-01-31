import ImageForm from "./ImageForm"
import SavedImages from "./SavedImages"
import styles from "./aside.module.scss";

export default function Aside(){
    return <aside className={styles['aside']}>
        <ImageForm />
        <SavedImages />
    </aside>
}