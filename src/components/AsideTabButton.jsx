import '../styles/Aside.css';

function AsideTabButton({ onClick, innerHTML, active }) {
  return (
    <button
      onClick={onClick}
      className={`aside-tab-button ${active ? 'active' : ''}`}
    >
      {innerHTML}
    </button>
  );
}

export default AsideTabButton;
