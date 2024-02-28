import "../style/Development.scss";
import image from "../images/fugohost-background.png";
import image1 from "../images/web-design/Case-study__image_1.png";
import image2 from "../images/web-design/Case-study__image_2.png";
import image3 from "../images/web-design/Case-study__image_3.png";

const Development = () => {
  return (
    <>
      <div className="web-development" id="development">
        <div>
          <div>
            <h1>Great Product is built by great teams</h1>
            <p>
              We help build and manage a team of world-class developers to bring
              your vision to life. Our company culture is rooted in the
              understanding that the collective efforts of a talented and
              cohesive team are essential for the development of exceptional
              products and services.
            </p>
            <a
              type="button"
              href="https://calendly.com/fugohost/30min?month=2023-11"
              target="_blank"
              rel="noreferrer"
            >
              Let's get started!
            </a>
          </div>
        </div>

        <div className="dev-image">
          <img src={image} alt="image not available" />
        </div>
      </div>

      <div className="web-design">
        <h1>Website Design Tailored For Your Requirement</h1>
        <div style={{ backgroundColor: "#F1F2FF" }}>
          <div>
            <img src={image1} alt="case study image" />
          </div>
          <div>
            <h3>Design Catalog for FireFit App</h3>
            <p>
              Create a visually appealing and informative catalog for the
              FireFit app, an innovative fitness companion designed specifically
              for firefighters. Emphasize the app's key features, including
              tailored workouts, health tracking, nutritional guidance, and
              community support. Highlight compatibility, download information,
              and include contact details on the back cover for easy access.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "#F0FFF7" }}>
          <div>
            <img src={image2} alt="case study image" />
          </div>
          <div>
            <h3>Design Catalog for MyGoals App</h3>
            <p>
              Design a comprehensive catalog for the MyGoals app, a dynamic and
              personalized goal-setting application. Highlight the app's key
              features, such as intuitive goal tracking, progress visualization,
              customizable goal categories, and motivational reminders. Showcase
              the app's user interface through well-crafted screenshots and
              graphics. Maintain a cohesive and modern design throughout the
              catalog, utilizing a consistent color scheme and easily readable
              fonts.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "#FFF4F4" }}>
          <div>
            <img src={image3} alt="case study image" />
          </div>
          <div>
            <h3>Design Catalog for Meditation App</h3>
            <p>
              Create an engaging catalog for the Meditation Harmony app,
              focusing on promoting inner peace and well-being through
              mindfulness. Showcase the app's key features, including guided
              meditation sessions, ambient sounds, personalized meditation
              plans, and progress tracking. Use serene and calming visuals, such
              as nature scenes and meditation settings, to evoke a sense of
              tranquility. Let the catalog embody the essence of mindfulness and
              encourage users to embark on a journey of self-discovery and
              relaxation with Meditation Harmony.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Development;
