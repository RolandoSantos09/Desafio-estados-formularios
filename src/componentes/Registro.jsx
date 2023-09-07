import { useState } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import RedesSociales from "./SocialButton";
import Alert from "./Alert";

const Registro = () => {
  const [alert, setAlert] = useState({
    error: "",
    msg: "",
    color: "",
  });

  return (
    <>
      <div className="container border border-dark-subtle bg-gray p-5">
        <Header title="Registrate Aquí" />
        <RedesSociales
          facebook="fa-brands fa-facebook fa-fade"
          github="fa-brands fa-github fa-fade"
          linkedin="fa-brands fa-linkedin-in fa-fade"
        />
        <Formulario setAlert={setAlert} />
        {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
      </div>
    </>
  );
};

export default Registro;
