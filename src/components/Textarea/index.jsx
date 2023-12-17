import './index.css';
import { FaRegCopy } from 'react-icons/fa';

export default function Textarea(props) {
  const
  function handleCopy() {
    const textarea = document.querySelector('.textarea');
    if (textarea) {
      textarea.select();
      document.execCommand('copy');
    }
  }

  return (
    <div className='textarea-wrapper'>
      <textarea className="textarea" name="" id="" cols="30" rows="10"></textarea>
      <div className='copy'>
        <FaRegCopy onClick={handleCopy} />
      </div>
    </div>
  );
}

