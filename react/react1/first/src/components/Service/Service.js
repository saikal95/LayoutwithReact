import  './service.css';
import image1 from './images/IMAGE (5).png';
import image2 from './images/IMAGE (6).png';
import ServiceCard from "../Service card/Service-card";

const Service = () => {
  return (

    <section className="service">
      <div className="container">
        <h2 className="service__title">services</h2>
        <p className="service__text">This is some text inside of a div block.</p>
        <div className="service__row">
          <ServiceCard image={image1} title="services one" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius. "/>
          <ServiceCard image={image2} title="services two" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius. "/>
        </div>
      </div>
    </section>

  );
};

export default Service;