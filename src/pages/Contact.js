import { BsCalendarCheck } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { iconContainer } from '../styles/styles';

function Contact() {
  return (
    <div className="flex-col-container center">
      <div className="flex-row">
        Say hello:
      </div>
      <br />
      <div className="flex-row">
        <a className="flex-col icon-spacing" href="https://calendly.com/gwolianglien/30min" target="_blank" rel="noreferrer" aria-describedby="Calendly">
          <BsCalendarCheck style={iconContainer} />
        </a>
        <a className="flex-col icon-spacing" href="mailto:itsleolien@gmail.com" target="_blank" rel="noreferrer" aria-describedby="Gmail">
          <GoMail style={iconContainer} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
