import { CSSProperties } from 'react';
import styles from './Header.module.css';

const stylebody: CSSProperties = {
    display: "flex",
    height: "var(--headerheight)",
    backgroundColor: "var(--headerbg)",
    position: "fixed",
    top: 0,
    width: "100vw",
}

export function Header() {
    return (
      <div className={styles.headerstyle} style={stylebody}>
        
      </div>
    )
}