import React, { Component } from "react";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import whatsapp from "../assets/img/whatsapp.svg";

class FooterComponent extends Component {

  render() {
    let fecha = new Date();
    let actual = fecha.getFullYear();
    return (
      <footer className=" bg-gray-900 h-24 text-white mt-4">
        <div className="flex flex-wrap justify-center pt-4">
          <a href="">
            <img className="ml-2" src={facebook} width="30" alt="" />{" "}
          </a>
          <a href="">
            <img className="ml-2" src={instagram} width="30" alt="" />{" "}
          </a>
          <a href="">
            <img className="ml-2" src={linkedin} width="30" alt="" />{" "}
          </a>
          <a href="">
            <img className="ml-2" src={github} width="30" alt="" />{" "}
          </a>
          <a href="">
            <img className="ml-2" src={whatsapp} width="30" alt="" />{" "}
          </a>
        </div>

        <div className="flex flex-wrap content-end justify-center">
          <p>Developed and Desingned by Fededjpg &copy; {actual}</p>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
