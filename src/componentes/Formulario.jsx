import React, { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ setAlert }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const [confirmapass, setConfirmapass] = useState("");
  const validarPassword = password !== confirmapass;
  const [error, setError] = useState(false);

  const validarInput = (e) => {
    e.preventDefault();
    if (nombre === "" || email === "" || password === "" || confirmapass === "")
      // alerta por input vacios
      setAlert({
        error: true,
        msg: Swal.fire("Por favor, complete todos los campos"),
        color: "danger",
      });
    // alerta por contraseñas distintas
    if (validarPassword) {
      setAlert({
        error: true,
        msg: Swal.fire("Clave incorrecta"),
        color: "danger",
      });
    }

    setError(false);
    setNombre("");
    setEmail("");
    setPaswword("");
    setConfirmapass("");
  };

  // aqui empieza el formulario
  return (
    <>
      <form onSubmit={validarInput}>
        <div>
          <label>Nombre</label>
          <input
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            className="form-control"
            onChange={(e) => setPaswword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <label>Confirma tu Contraseña</label>
          <input
            className="form-control"
            onChange={(e) => setConfirmapass(e.target.value)}
            value={confirmapass}
          />
        </div>
        <button className="btn btn-dark mt-3" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Formulario;
