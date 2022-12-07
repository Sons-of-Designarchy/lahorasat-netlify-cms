import React from "react";

const btnStyle = {
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
  height: 46,
  marginTop: "1rem",
};

export default function Subscribe({ setShowModal }) {
  return (
    <div className="hero section section-white suscribe-modal">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <h1 className="pt-4 text-center">
              Suscríbete al newsletter y recibe un 15% de descuento en una
              asesoría o curso.
            </h1>
            <div
              className="mt-5 mb-5 text-center"
              style={{ maxWidth: 500, margin: "0 auto" }}
            >
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
                  value="Recibir mi descuento"
                  className="btn btn-primary"
                  style={btnStyle}
                />
              </form>
            </div>
          </div>
          <a
            href="#"
            onClick={() => setShowModal(false)}
            className="text-center text-underline d-block"
          >
            No gracias
          </a>
        </div>
      </div>
    </div>
  );
};

