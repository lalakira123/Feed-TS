import style from './Header.module.css'
import igniteLogo from './../../assets/ignite-symbol.svg';

export function Header() {
  return(
    <header className={style.header}>
      <img src={igniteLogo} alt='Ignite Symbol'/>
      <strong>Ignite Feed</strong>
    </header>
  );
}