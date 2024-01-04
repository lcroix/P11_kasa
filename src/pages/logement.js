import Header from "../components/header/header";
import Slideshow from "../components/slideshow/slideshow";
import Collapse from "../components/collapse/collapse";
import Tag from "../components/tag/tag";
import Rating from "../components/rating/rating";
import { useEffect } from 'react';
import ItemsData from '../data/data.json';
import { useParams , useNavigate } from 'react-router-dom';
import "./logement.css";

const Logement = () => {
  const { id } = useParams(); 
  const logementData = ItemsData.find((item) => item.id === id);
  const navigate = useNavigate();
    
  useEffect(() => {
      if (!logementData) {
          navigate('/ErrorPage');
      }
  }, [logementData, navigate]);

  if (!logementData) {
      return null;
  }

  const { pictures, rating, tags, description, equipments, title, location, host} = logementData;
  const [firstName, lastName] = host.name.split(' ');
  return (
    <div>
      <main>
        <Header />
        <Slideshow images={pictures} />
         
        <div className="containterInfos">
                <div className="infos">

                    <div className="containerTitleTags">
                        <h1 className="containertitle">{title}</h1>
                        <h2 className="containerlocation">{location}</h2>
                    </div>

                    <div className="tagsContainer">
                        {tags.map((tag,index)=> (
                            <Tag
                                key={index}
                                tag={tag}
                            />
                        ))}
                    </div>

                </div>

                <div className="containerProfileRating">

                    <div className="containerProfil">
                        <h3 className="name"><span>{firstName} </span><span>{lastName}</span></h3>
                        <img className="photo" src={host.picture} alt={host.name} />
                    </div>

                    <div>
                        <Rating rating={rating}/>
                    </div>
                </div>

            </div>

            <div className="containerDescriptions">
                <div className="containerDescription">
                    <Collapse title="Description" text={description} />
                </div>

                <div className="containerEquipments">
                    <Collapse title="Équipements" text={equipments} />
                </div>
            </div>
      </main>
    </div>
  );
};
export default Logement;
