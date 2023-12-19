import "../style/Hosting.scss";
import { Link } from "react-router-dom";

const Hosting = () => {
  return (
    <div className="hosting-container" id="hosting">
      <h1>Web Hosting</h1>
      <div>
        <p>
          In the vast ecosystem of the internet, web hosting is the foundation
          upon which websites thrive. Choosing the right hosting service is
          crucial for the performance, security, and scalability of your online
          presence. Selecting the right web hosting service is a crucial
          decision that directly impacts the success of your online venture.
          Consider factors such as budget, technical expertise, and the specific
          requirements of your website or application. Whether you opt for
          shared hosting, VPS, dedicated servers, cloud hosting, managed
          WordPress hosting, or reseller hosting, understanding the nuances of
          each type will empower you to make an informed choice and ensure a
          robust foundation for your online presence.
        </p>
      </div>

      <div>
        <div>
          <h2>Shared Hosting</h2>
          <p>
            Experience the perfect launchpad for your online success with our
            Shared Hosting solution. Affordable, reliable, and user-friendly,
            it's the ideal starting point for individuals and businesses alike.
            Enjoy the benefits of a secure and fully managed hosting environment
            without breaking the bank. Seamlessly scale your online presence as
            you grow, backed by our expert support.
          </p>
        </div>

        <div>
          <h2>VPS Hosting</h2>
          <p>
            Empower your online journey with our VPS hosting solution — your key
            to unparalleled performance, control, and scalability. Unleash the
            full potential of your website with dedicated resources,
            lightning-fast speeds, and the freedom to customize your virtual
            server environment. Elevate your digital presence to new heights,
            backed by our robust infrastructure and expert support.
          </p>
        </div>

        <div>
          <h2>Wordpress Hosting</h2>
          <p>
            Unlock the full potential of your WordPress site with our premium
            hosting solution. Blending speed, security, and simplicity, our
            WordPress Hosting is designed to elevate your online presence.
            Experience lightning-fast load times, ironclad security, and
            effortless scalability, empowering you to focus on what matters –
            creating exceptional content. Elevate your WordPress experience.
          </p>
        </div>
      </div>

      <div className="hosting-button">
        <a
          type="button"
          href="https://calendly.com/fugohost/30min"
          target="_blank"
          rel="noreferrer"
        >
          Let's Discuss
        </a>
      </div>
    </div>
  );
};

export default Hosting;
