import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Todos</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Todos</Link>
          </li>
          <li>
            <Link href='/new-todo'>Add New Todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;