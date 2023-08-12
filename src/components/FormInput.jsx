function Input({ field, onChange, index }) {
  return (
    <label className='input-label'>
      <h2>{field.label}:</h2>
      <input
        type='text'
        name={field.id}
        id={field.id}
        className='input-field'
        onChange={onChange}
        value={field.value}
        data-index={index}
      />
    </label>
  );
}

export default Input;
