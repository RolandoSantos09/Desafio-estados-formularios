import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ facebook, github, linkedin }) => {
  return (
    <div>
      <button className="boton">
        <i class={facebook}></i>
      </button>
      <button className="boton">
        <i class={github}></i>
      </button>
      <button className="boton">
        <i class={linkedin}></i>
      </button>
    </div>
  );
};

export default SocialButton;
