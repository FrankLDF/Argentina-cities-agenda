import { Link} from "react-router-dom";
import style from "./CardCity.module.css";



function CardCity({ title, description, image }) {

  const ruta = "./src/assets/images/";
  
  return (
    <div className={style.container}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <img
        className={style.image}
        src={`${ruta}${image}`}
        alt={`ciudad de ${title}`}
      />
      <Link className={style.button} to={`/detalles/${title}`}>
        Mas info
      </Link>
    </div>
  );
}

export default CardCity;
