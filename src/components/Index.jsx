import React from 'react';
import Settings from '../containers/Settings.jsx';


const Index = () => (
  <div className="container content">
    <div className="row">

      <div className="col-sm-12 col-md-6 col-lg-7">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="hero__title">Master relative pitch.</h1>
            <h2 className="hero__subtitle">
              Train your ear in a game form and compare your results with people all over the world.
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-7">
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed gravida, felis nec mollis ultricies, leo justo volutpat mauris, a ultrices
              felis eros id tortor. Nulla luctus aliquam semper. Maecenas tempus velit eget mauris
              pulvinar, ac hendrerit erat lacinia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed gravida, felis nec mollis ultricies, leo justo volutpat mauris, a ultrices felis
              eros id tortor. Nulla luctus aliquam semper. Maecenas tempus velit eget mauris
              pulvinar, ac hendrerit erat lacinia.
            </p>
          </div>
          <div className="col-sm-12 col-lg-5 text-center">
            &nbsp;
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed gravida, felis nec mollis ultricies, leo justo volutpat mauris, a ultrices
              felis eros id tortor. Nulla luctus aliquam semper. Maecenas tempus velit eget mauris
              pulvinar, ac hendrerit erat lacinia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed gravida, felis nec mollis ultricies, leo justo volutpat mauris, a ultrices felis
              eros id tortor. Nulla luctus aliquam semper. Maecenas tempus velit eget mauris
              pulvinar, ac hendrerit erat lacinia.
            </p>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-5">
        <Settings />
      </div>

    </div>
  </div>
);


export default Index;