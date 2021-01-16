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
    name: '',
    email: '',
    phone: '',
    message: ''
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

  changeTheme = (e) => {
    let configUser = window.matchMedia("(prefers-color-scheme: dark)");
    let theme = document.querySelector("#theme");
    let modalHeader = document.querySelector("#modal-header");
    let modalHeader2 = document.querySelector("#modal-header2");
    let modalHeader3 = document.querySelector("#modal-header3");
    let modalBody = document.querySelector("#modal-body");
    let modalBody2 = document.querySelector("#modal-body2");
    let modalBody3 = document.querySelector("#modal-body3");
    let modalFooter = document.querySelector("#modal-footer");
    let modalFooter2 = document.querySelector("#modal-footer2");
    let modalFooter3 = document.querySelector("#modal-footer3");
    let localConfig = localStorage.getItem("tema");
    var colorTema;

    // if (localConfig === 'dark') {
    //   // console.log("es negro")
    //   theme.classList.toggle('theme-dark');
    // } else if (localConfig === 'light') {
    //   theme.classList.toggle('theme-light');
    // }

    if (configUser.matches) {
      theme.classList.toggle("theme-light");
      modalHeader.classList.toggle("theme-light");
      modalHeader2.classList.toggle("theme-light");
      modalHeader3.classList.toggle("theme-light");
      modalBody.classList.toggle("theme-light");
      modalBody2.classList.toggle("theme-light");
      modalBody3.classList.toggle("theme-light");
      modalFooter.classList.toggle("theme-light");
      modalFooter2.classList.toggle("theme-light");
      modalFooter3.classList.toggle("theme-light");
      colorTema = theme.classList.contains("theme-light") ? "light" : "dark";
      colorTema = modalHeader.classList.contains("theme-light")
        ? "light"
        : "dark";
      colorTema = modalHeader2.classList.contains("theme-light")
        ? "light"
        : "dark";
      colorTema = modalHeader3.classList.contains("theme-light")
        ? "light"
        : "dark";
      colorTema = modalBody.classList.contains("theme-light")
        ? "light"
        : "dark";
      colorTema = modalBody2.classList.contains("theme-light")
        ? "light"
        : "dark";
      colorTema = modalBody3.classList.contains("theme-light")
        ? "light"
        : "dark";
      colorTema = modalFooter.classList.contains("theme-light")
        ? "light"
        : "dark";
      colorTema = modalFooter2.classList.contains("theme-light")
        ? "light"
        : "dark";
      colorTema = modalFooter3.classList.contains("theme-light")
        ? "light"
        : "dark";
    } else {
      theme.classList.toggle("theme-dark");
      modalHeader.classList.toggle("theme-dark");
      modalHeader2.classList.toggle("theme-dark");
      modalHeader3.classList.toggle("theme-dark");
      modalBody.classList.toggle("theme-dark");
      modalBody2.classList.toggle("theme-dark");
      modalBody3.classList.toggle("theme-dark");
      modalFooter.classList.toggle("theme-dark");
      modalFooter2.classList.toggle("theme-dark");
      modalFooter3.classList.toggle("theme-dark");

      colorTema = theme.classList.contains("theme-dark") ? "dark" : "light";
      colorTema = modalHeader.classList.contains("theme-dark")
        ? "dark"
        : "light";
      colorTema = modalHeader2.classList.contains("theme-dark")
        ? "dark"
        : "light";
      colorTema = modalHeader3.classList.contains("theme-dark")
        ? "dark"
        : "light";
      colorTema = modalBody.classList.contains("theme-dark") ? "dark" : "light";
      colorTema = modalBody2.classList.contains("theme-dark")
        ? "dark"
        : "light";
      colorTema = modalBody3.classList.contains("theme-dark")
        ? "dark"
        : "light";
      colorTema = modalFooter.classList.contains("theme-dark")
        ? "dark"
        : "light";
      colorTema = modalFooter2.classList.contains("theme-dark")
        ? "dark"
        : "light";
      colorTema = modalFooter3.classList.contains("theme-dark")
        ? "dark"
        : "light";
    }

    localStorage.setItem("tema", colorTema);
  };

  change = (e) => {
    const {name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  
  sendEmail = (e)=>{
    e.preventDefault();
    let data = document.querySelector('.dataEmail'),
      name = document.querySelector('.name').value,
      email = document.querySelector('.email').value,
      phone = document.querySelector('.phone').value,
      message = document.querySelector('.message').value,
      success = document.querySelector('.load');
    let bigData= {
      name: name,
      email: email,
      phone: phone,
      message:message
    }
    console.log(bigData);
    // console.log(this.state) 
    // const values = JSON.stringify(this.state)
    // alert(values)
    fetch('https://formsubmit.co/ajax/federicodjprzgmz247@gmail.com', {
      method:"POST",
      body: bigData
  })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(json => {
        console.log(json)
        data.reset();
        success.classList.toggle("load");
        
      })
      .catch(error => {
          console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          success.classList.toggle("load");
        }, 3000);
    })
  }


  render() {
    const { name, email, phone, message } = this.state;

    return (
      <section id="theme" className="pb-4">
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
        <h1 className="text-4xl text-center mb-4">Portfolio</h1>
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
                <div id="modal-header" className="modal-header">
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
                <div id="modal-body" className="modal-body">
                  <img src={img} alt="" />
                  <div>
                    <p>
                      This web sitie is the social service for Sistema Municipal
                      de Agua Potable y Alcantarillado (Smapa) specifically for
                      manage the team saneamiento{" "}
                    </p>
                    <p>
                      It was developed using technologies html5, css3,
                      javascript, jquery, bootstrap, php, mysql.
                    </p>
                  </div>
                </div>
                <div id="modal-footer" className="modal-footer">
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
                <div id="modal-header2" className="modal-header">
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
                <div id="modal-body2" className="modal-body">
                  <img src={img2} alt="" />
                </div>
                <div id="modal-footer2" className="modal-footer">
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
                <div id="modal-header3" className="modal-header">
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
                <div id="modal-body3" className="modal-body">
                  <img src={img3} alt="" />
                </div>
                <div id="modal-footer3" className="modal-footer">
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
        <article className="mt-4">
          <h1 className="text-4xl text-center mb-4">Contact</h1>
          <hr/>
          <div className="w-1/3 shadow-lg rounded-lg h-auto mx-auto text-gray-600 font-bold">
            <form onSubmit={this.sendEmail} className="dataEmail">
              <div>
                <label className="block" for="name">Name</label>
                <input className="w-full name" type="text"  name="name" required placeholder="your name" />
              </div>
              <div>
                <label className="block" for="email">email</label>
                <input className="w-full email" type="email"  name="email" required placeholder="your email" />
              </div>
              <div>
                <label className="block" for="phone">phone</label>
                <input className="w-full phone" type="number"  name="phone" required placeholder="your number"/>
              </div>
              <div>
                <label className="block" for="message">message</label>
                <textarea className="w-full message font-bold" name="message" rows="5" placeholder="your message" required></textarea>
              </div>
              <div className="load">
                <p>Los datos se enviaron correctamenta</p>
              </div>
              <input className="bg-blue-500 text-white hover:bg-blue-700 w-1/4 h-10 rounded-lg mb-2" type="submit" value="Send Message"/>
            </form>
          </div> 
        </article>
      </section>
    );
  }
}

export default SectionComponent;
