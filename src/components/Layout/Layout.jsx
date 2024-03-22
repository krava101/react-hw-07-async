import css from './Layout.module.css';

export const Layout = ({ children }) => <main className={css.container}>{children}</main>;