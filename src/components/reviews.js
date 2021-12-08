import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReviewCard from "./reviews/card";

const Reviews = () => {
  return (
    <div className="container my-lg-5">
      <h2 className="my-5 text-center">Nuestros clientes nos avalan*</h2>
      <Carousel showThumbs={false} showStatus={false} autoPlay={true}>
        <div className="mx-lg-5 mb-5">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <ReviewCard
                content="La hora SAT es un gran servicio. Desde el primer contacto con la página, pasando por el pago y la asesoría, todo cumple su función. Muchas gracias por todo.
                "
              />
            </div>
            <div className="col-lg-4 mb-3">
              <ReviewCard
                content="Amo su paciencia y su don por ayudar y enseñarnos a no morir con el SAT. Creo que si resolví todas mis dudas si alguna me queda pendiente es porque huyo de mi cabeza :) En verdad muchas gracias por ayudarme a dar de nuevo los pasitos básicos para estar al 100 con el SAT."
              />
            </div>
            <div className="col-lg-4 mb-3">
              <ReviewCard
                content="Muy buena la asesoría, Miranda resolvió todas nuestras dudas, de manera súper didáctica y amable, algo que valoramos mucho porque no teníamos nada de idea de esto! Gracias! 
                "
              />
            </div>
          </div>
        </div>
        <div className="mx-lg-5 ">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <ReviewCard
                content="Una excelente atención, resolvió mis dudas amablemente, me brindó la orientación necesaria para conocer el proceso y los pasos a seguir. Me sentí en total confianza."
              />
            </div>
            <div className="col-lg-4 mb-3">
              <ReviewCard
                content="Todo estuvo excelente, un tema tan difícil lo hacen muy fácil para uno como simple mortal. 100/100"
              />
            </div>
            <div className="col-lg-4 mb-3">
              <ReviewCard
                content="Todo estuvo perfecto, pq antes de la asesoria, me preguntaron mis dudas especificas y sobre eso nos fuimos, asi aprovechamos la hora de asesoria
                "
              />
            </div>
          </div>
        </div>
        <div className="mx-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-4 mb-3">
              <ReviewCard
                content="Estuvo muy bien! Me ayudaron muchísimo sobre dudas que casi nadie me había resuelto, las recomendaré 😁"
              />
            </div>
            <div className="col-lg-4 mb-3">
              <ReviewCard
                content="Tuve mucha luz, estaba muy perdida pero justo después de platicar con ustedes hicieron sentido las cosas que me estaban pidiendo.  Ya me asusta menos la responsabilidad de declarar mensualmente."
              />
            </div>
          </div>
        </div>
      </Carousel>
      <div className="mt-3">
        <p className="font-xs text-center">* Reseñas de la encuesta de satisfacción que enviamos al terminar la asesoria, nombres ocultos por respeto a su privacidad.</p>
      </div>
    </div>
  );
};

export default Reviews;
