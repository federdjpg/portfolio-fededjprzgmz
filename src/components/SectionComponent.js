import React, { Component } from "react";
import img from "../assets/img/img1.png";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpeg";
import html from "../assets/img/html52.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import jquery from "../assets/img/jquery.png";
import git from "../assets/img/git.png";
import php from "../assets/img/php.png";
import sass from "../assets/img/sass.png";
import bootstrap from "../assets/img/bootstrap.png";

class SectionComponent extends Component {
  contador = 0;
  setNavbarOpen = "hola mundo";

  state = {
    contador: 0,
    showMe: true,
  };

  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  hidden = (e) => {
    this.setState({
      showMe: !this.state.showMe,
    });
  };

  render() {
    return (
      <section>
        {/* <p>{this.state.contador}</p>
            
            <button onClick={this.sumar}>
              Sumar
            </button>

            <button onClick={this.restar}>
              Restar
            </button>
            {
              this.state.showMe ?
            <div>
                  porfavor ocultame
            </div>
            : null
            } */}

        {/* <button onClick={this.hidden} className="btn btn-primary">
              ocultar
            </button> */}
        <h1 className="text-4xl text-center mb-4">Experience</h1>
        <hr />

        <article
          id="portafolio"
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
        >
          <img
            data-toggle="modal"
            data-target="#exampleModal"
            className="w-full h-80 bg-cover bg-center cursor-pointer"
            src={img}
            alt=""
          />
          <img
            data-toggle="modal"
            data-target="#exampleModal2"
            className="w-full h-80 bg-cover bg-center cursor-pointer"
            src={img2}
            alt=""
          />
          <img
            data-toggle="modal"
            data-target="#exampleModal3"
            className="w-full h-80 bg-cover bg-center cursor-pointer"
            src={img3}
            alt=""
          />

          {/* <!-- Modal --> */}
          <div
            className="modal fade bd-example-modal-xl"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered  modal-xl"
              role="document"
            >
              <div className="modal-content ">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Smapa
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src={img} alt="" />
                  <div>
                    <p>This web sitie is the social service for Sistema Municipal de Agua Potable y Alcantarillado (Smapa) specifically for manage the team saneamiento </p>
                    <p>It was developed using technologies html5, css3, javascript, jquery, bootstrap, php, mysql.</p>
                  </div>
                </div>
                <div className="modal-footer">
                  {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div
            className="modal fade bd-example-modal-xl"
            id="exampleModal2"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered  modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Levi ackerman2
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src={img2} alt="" />
                </div>
                <div className="modal-footer">
                  {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div
            className="modal fade bd-example-modal-xl"
            id="exampleModal3"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered  modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Levi ackerman3
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src={img3} alt="" />
                </div>
                <div className="modal-footer">
                  {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div id="skills" className="mt-4">
          <h1 className="text-4xl text-center mb-4">Skills</h1>
          <hr />
          <article className="container mx-auto flex items-center grid grid-cols-3 sm:grid-cols-4 mt-4 mb-4">
            <div>
              <img className="img-skills" src={html} alt="" />
            </div>
            <div>
              <img className="img-skills" src={css} alt="" />
            </div>
            <div>
              <img className="img-skills" src={js} alt="" />
            </div>
            <div>
              <img className="img-skills" src={jquery} alt="" />
            </div>
            <div>
              <img className="img-skills" src={git} alt="" />
            </div>
            <div>
              <img className="img-skills" src={bootstrap} alt="" />
            </div>
            <img className="img-skills" src={php} alt="" />
            <div>
              <img className="img-skills" src={sass} alt="" />
            </div>
          </article>
        </div>

        <article id="experience">
          <h1 className="text-4xl text-center mb-4">Experience</h1>
          <hr />

          <div className="w-1/2 shadow-lg bg-white rounded-lg h-auto m-auto text-gray-700 font-bold mt-4 pb-4">
            <p>hi.</p>
            <p>
              i'm not experience because never work in a project for entreprice
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              totam voluptates blanditiis harum! Illum accusamus minus corporis
              consequatur dolor? Voluptatum cum laborum nisi omnis, dicta
              laboriosam! Explicabo ipsa mollitia at?
            </p>
          </div>
        </article>
      </section>
    );
  }
}

export default SectionComponent;
