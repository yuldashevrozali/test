import './index.css';
import { FaRegCopy } from 'react-icons/fa';

export default function Textarea(props) {
  const { placeholder, isDisabled, inputRef } = props;
  function handleCopy() {
    const textarea = document.querySelector('.textarea');
    if (textarea) {
      textarea.select();
      document.execCommand('copy');
    }
  }

  return (
    <div className='textarea-wrapper' style={isDisabled ? { backgroundColor: 'lightgray' } : { backgroundColor: 'white' }}>
      <textarea
        className="textarea"
        ref = {inputRef}
        placeholder={placeholder}
        style={isDisabled ? { backgroundColor: 'lightgray' } : { backgroundColor: 'white' }}
        disabled={isDisabled ? true : false}
        cols="30"
        rows="10">

      </textarea>
      {
        isDisabled && (<div className='copy'>
          <FaRegCopy onClick={handleCopy} />
        </div>)
      }

    </div>
  );
}

