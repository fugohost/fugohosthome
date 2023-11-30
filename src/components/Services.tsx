import "../style/Services.scss";
import image1 from "../images/services-images/Code_perspective_matte.png"
import image2 from "../images/services-images/Dashboard_perspective_matte.png"

const tiles = [{
  id: 1,
  image: image1,
  title: "Custom Web Developement",
  text: "Transform your vision into a fully functional and visually appealing website. Our expert developers utilize cutting-edge technologies to create custom web applications, corporate websites, and interactive platforms. We focus on responsive design, intuitive user experience, and seamless navigation to engage your audience effectively."
},
{
  id: 2,
  image: image2,
  title: "Mobile App Developement",
  text: "Elevate your business with innovative mobile applications. Our skilled app developers specialize in iOS, Android, and cross-platform development. Whether you need a consumer-facing app or an enterprise solution, we design and develop mobile applications that enhance user engagement, increase productivity, and provide a seamless experience across devices."
},
{
  id: 3,
  image: image1,
  title: "E-Commerce Solutions",
  text: "Launch and grow your online store with our comprehensive e-commerce solutions. We build secure and feature-rich e-commerce platforms tailored to your product catalog and target audience. From user-friendly interfaces and secure payment gateways to personalized shopping experiences and efficient order management, we ensure your e-commerce business thrives in the competitive digital market."
},
{
  id: 4,
  image: image2,
  title: "Content management Systems (CMS)",
  text: "Take control of your website content with powerful and intuitive CMS platforms. We specialize in integrating and customizing content management systems like WordPress, Drupal, and Joomla. Our solutions empower you to manage and update your website effortlessly, allowing you to focus on delivering fresh and engaging content to your audience while ensuring seamless website functionality."
},
{
  id: 5,
  image: image1,
  title: "Digital Marketing Services",
  text: "Drive targeted traffic, enhance brand visibility, and boost conversions with our digital marketing expertise. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and email campaigns, we craft data-driven digital strategies tailored to your business objectives. Our goal is to maximize your online presence, attract quality leads, and foster long-term customer relationships."
},
{
  id: 6,
  image: image2,
  title: "Custom Software Development",
  text: "Address your unique business challenges with tailored software solutions. Our experienced developers create custom software applications, tools, and platforms designed to streamline your operations, enhance collaboration, and improve overall efficiency. We analyze your requirements meticulously to deliver scalable, secure, and high-performance software that aligns perfectly with your business goals."
},
{
  id: 7,
  image: image1,
  title: "UI/UX Design",
  text: "Make a lasting impression with visually stunning and intuitive user interfaces. Our creative designers focus on user experience (UX) and user interface (UI) design principles to craft visually appealing, user-friendly interfaces for your websites and applications. We prioritize usability, accessibility, and aesthetics to create interfaces that captivate users, drive engagement, and reinforce your brand identity."
}]

const Services = () => {
  return (
    <div className="services-container" id="services">
      <h1>Services we offer</h1>
      <div>
        {
          tiles.map((tile) => (
            <div className="tile-container" key={tile.id}>
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
