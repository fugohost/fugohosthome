import "../style/Services.scss";
import image1 from "../images/services-images/Code_perspective_matte.png"
import image2 from "../images/services-images/Dashboard_perspective_matte.png"

const tiles = [{
  id: 1,
  image: image1,
  title: "Mobile App Developement",
  text: "Whether you need a consumer-facing app or an enterprise solution, we design and develop mobile applications that enhance user engagement, increase productivity, and provide a seamless experience across devices."
},
{
  id: 2,
  image: image2,
  title: "Custom Web Developement",
  text: "Transform your vision into a fully functional and visually appealing website. We focus on responsive design, intuitive user experience, and seamless navigation to engage your audience effectively."
},
{
  id: 3,
  image: image1,
  title: "E-Commerce Solutions",
  text: "From user-friendly interfaces and secure payment gateways to personalized shopping experiences and efficient order management, we ensure your e-commerce business thrives in the competitive digital market."
},
{
  id: 4,
  image: image2,
  title: "Content management Systems (CMS)",
  text: "We specialize in integrating and customizing content management systems like WordPress, Drupal, and Joomla. Our solutions empower you to manage and update your website effortlessly."
}]

const Services = () => {
  return (
    <div className="services-container" id="services">
      <h1>Services we offer</h1>
      <div>
        {
          tiles.map((tile) => (
            <div className="tile-container">
              <div>
                  <img src={tile.image} />              
                  <h4>{tile.title}</h4>
                  <p>{tile.text}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services;
