import Header from "../components/header/header";
import PictureHeader from "../components/picture-header/picture";
import Location from "../components/location/location";
import imagePage1 from "../data/asset/IMG1.png";
import data from "../data/data.json";
import "./home.css";

const HomePage = () => {
  return (
    <main>
      <div>
        <Header />
        <PictureHeader
          image={imagePage1}
          altText="Chez vous, partout et ailleurs"
        />
        <section className="cart">
          <div className="grid">
            {data.map((location) => (
              <Location
                id={location.id}
                title={location.title}
                pictures={location.cover}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
export default HomePage;
