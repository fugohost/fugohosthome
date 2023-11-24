import '../style/Footer.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <div>
          <h4>FugoHost INC. All rights reserved</h4>
          <a href="#development">Web Development</a> 
          <a href="#hosting">Web Hosting</a> 
          <a href="#services">Services</a> 
          <a href="#about">About Us</a> 
        </div>

        <div>
          <h4>Contact Us</h4>
          <a href="mailto:support@fugohost.com" className="link">support@fugohost.com</a>
          <address>
          FUGOHOST INC. <br/>
          140 King Street East Suite 323 <br/>
          Hamilton, ON L8N 1B2, Canada
          </address>
        </div>
      </div>
    </div>
  )
}

export default Footer