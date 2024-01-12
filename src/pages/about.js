import Header from "../components/header/header";
import imagePage2 from "../data/asset/IMG2.png";
import PictureHeader from "../components/picture-header/picture";
import Collapse from "../components/collapse/collapse";
import data from "../data/dataCollapse.json"
import './about.css';
const About = () => {
  return (
    <main>
      <div>
        <Header />
        <PictureHeader
          image={imagePage2}
          altText="Chez vous, partout et ailleurs"
        />
        <section className="containerAbout">
                {data.map((about)=> (
                    <Collapse
                        key={about.title} 
                        title={about.title}
                        text={about.text}
                    />
                ))}
            </section>
      </div>
    </main>
  );
};
export default About;
