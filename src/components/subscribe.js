import React from "react";

const btnStyle = {
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
  height: 46,
  marginTop: "1rem",
};

const Subscribe = () => {
  return (
    <div className="mt-5 mb-5" style={{ maxWidth: 500 }}>
      <form
        action="https://lahorasat.podia.com/email_lists/226925/subscriptions"
        accept-charset="UTF-8"
        method="post"
      >
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Ingresa tu correo"
          className="form-control"
        />
        <input
          type="submit"
          value="Recibir mi guía gratis"
          className="btn btn-primary"
          style={btnStyle}
        />
      </form>
    </div>
  );
};

export default Subscribe;
