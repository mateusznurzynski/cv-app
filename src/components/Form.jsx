import '../styles/Form.css';
import Input from './FormInput';

function Form({ tab, onChange }) {
  return (
    <form className='form' action='#'>
      {tab.fieldSet.map((field, index) => {
        return (
          <Input
            key={field.id}
            field={field}
            onChange={onChange}
            index={index}
          />
        );
      })}
    </form>
  );
}

export default Form;
