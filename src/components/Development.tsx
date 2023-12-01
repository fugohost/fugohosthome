import "../style/Development.scss";
import image from "../images/Hero-Wrapper__image.png";
import image1 from "../images/web-design/Case-study__image_1.png";
import image2 from "../images/web-design/Case-study__image_2.png";
import image3 from "../images/web-design/Case-study__image_3.png";

const Development = () => {
  return (
    <>
      <div className="web-development" id="development">
        <div>
          <div>
            <h1>
              Great <span>Product</span> is built by great <span>teams</span>
            </h1>
            <p>
              We help build and manage a team of world-class developers to bring
              your vision to life.
            </p>
            <a type="button" href="https://calendly.com/fugohost/30min?month=2023-11" target="_blank" rel="noreferrer">Let's get started!</a>
          </div>
        </div>

        <div className="dev-image">
          <img src={image} alt="image not available" />
        </div>
      </div>

      <div className="web-design">
        <div style={{backgroundColor: "#F1F2FF"}}>
          <div>
            <img src={image1} alt="case study image" />
          </div>
          <div>
            <h3>Website Design for SCFC Canada</h3>
            <p>
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
          </div>
        </div>

        <div style={{backgroundColor: "#F0FFF7"}}>
          <div>
            <img src={image2} alt="case study image" />
          </div>
          <div>
          <h3>Website Design for SCFC Canada</h3>
            <p>
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
          </div>
        </div>

        <div  style={{backgroundColor: "#FFF4F4"}}>
          <div>
            <img src={image3} alt="case study image" />
          </div>
          <div>
          <h3>Website Design for SCFC Canada</h3>
            <p>
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Development;
