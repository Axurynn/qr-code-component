import s from './App.module.scss';
import Card from '../../layouts/Card/Card'

function App() {
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
      </header>
      <main>
        <Card />
      </main>
      <footer className={s.appFooter}>
        <div className={s.attribution}>
          Challenge by&nbsp;
          <a
            href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
            target="_blank"
          >
            Frontend Mentor
          </a>. Coded by <a href="https://github.com/Axurynn">Axurynn</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
