import Link from 'next/link';
import style from './Header.module.css';

export function Header() {
    return (
      <div className={style.header}>
        <Link href={'/info'} className={style.link}>Information</Link>
        <Link href={'/mysaved'} className={style.link}>My Saved Images</Link>
        <Link href={'/local'} className={style.link}>Local Storage</Link>
      </div>
    )
}