import { Link } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import "./Shoe.css";
import { FaRegWindowClose } from "react-icons/fa";
export default function Shoe({ data, cartOption }) {
  const removeFromCart = () => {
    cartOption.removeMe();
  };
  return (
    <div className="shoe">
      <Link to={"/shoe-details/" + data.name}>
        <h3 className="title">{data.name}</h3>
        <img src={data.image} />
        <h3 className="price">
          {data.price}
          <MdAttachMoney />
        </h3>
      </Link>
      {cartOption && (
        <button className="removeBtn" onClick={removeFromCart}>
          <AiOutlineClose size={22} />
        </button>
      )}
    </div>
  );
}
