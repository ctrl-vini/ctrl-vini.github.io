import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">Sobre mim</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top=[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          ></img>
          <div className="z-10">
            <p className="headtext">Oi, me chamo Vinicius Alves</p>
            <p className="subtext">
              Nos últimos 4 anos, desenvolvi minhas habilidades em front-end e
              back-end para entregar soluções de alta qualidade.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        <div className="grid-default-color grid-2">
          <div
            ref={grid2container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              text="Flutter"
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              containerRef={grid2container}
            />
            <Card
              text="ReactJS"
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              containerRef={grid2container}
            />
            <Card
              text="Django"
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              containerRef={grid2container}
            />
            <Card
              text="NodeJS"
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              containerRef={grid2container}
            />
            <Card
              text="Spring"
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              containerRef={grid2container}
            />
            <Card
              image="assets/logos/ts-pink.png"
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              containerRef={grid2container}
            />
            <Card
              image="assets/logos/python-pink.png"
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              containerRef={grid2container}
            />
            <Card
              image="assets/logos/java-pink.png"
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              containerRef={grid2container}
            />
          </div>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Fuso Horário</p>
            <p className="subtext">
              Estou em Marte! Mas aberto a trabalho remoto em qualquer lugar do
              mundo.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Você quer começar um projeto juntos?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Ferramentas</p>
            <p className="subtext">
              Me especializei em uma variedade de linguagens, frameworks e
              ferramentas que me permitem criar aplicações robustas, seguras e
              escaláveis.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
