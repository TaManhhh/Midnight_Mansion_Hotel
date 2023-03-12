import "./Style.css";
import "../rooms.css"
export const Title = (props) => {
  return (
    <div className="card font-serif hover:bg-yellow-500">
      <div >
          <img src={props.img} alt="Louvre" className="card-img"/>
        </div>
      <div className="card-img-title">
        <p>Form$120/Night</p>
      </div>
      <div className="card-img-description">
        <h3> {props.title}</h3>
        <div className="card-img-description">
          <div >20m2 |Balcony |Lake View</div>
        </div>
      </div>
    </div>
  );
};
