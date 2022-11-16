const style = {
  background: 'lightblue',
  border: '2px solid blue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
  width: '100%',
  height: '100%',
};

export default function Square({ value, onClick }) {
  return (
    <div>
      <button style={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
}
