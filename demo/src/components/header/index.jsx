export function Header(props) {
  const { title, text, onInputChange } = props;
  const lowTitle = title.toUpperCase();
  return (
    <>
      <h1>{lowTitle} </h1>
      <input
        type='text'
        value={text}
        onChange={(event) => onInputChange(event.target.value)}
        placeholder='Text header'
      />
    </>
  );
}
