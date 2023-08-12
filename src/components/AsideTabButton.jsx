import '../styles/Aside.css';

function AsideTabButton({ onClick, innerHTML }) {
  return (
    <button onClick={onClick} className='aside-tab-button'>
      {innerHTML}
    </button>
  );
}

export default AsideTabButton;
