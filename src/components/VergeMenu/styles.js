import styled, { keyframes } from "styled-components";

// Animaciones
export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const deslizar = keyframes`
  from {
    transform: translateY(-30%);
    transform: translateX(-100%);
  }
  to {
    transform: translateY(-30%);
    transform: translateX(0);
  }
`;

// Componentes estilizados
export const MenuContainer = styled.div`
  display: none;
  position: fixed;
  top: 25%;
  left: 0;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  animation: ${deslizar} 1s ease-out; // Animación suave al aparecer desde la izquierda

  @media (max-width: 1050px) {
    top: 22%;
  }
`;

export const MenuIcon = styled.div`
  // border: 1px solid #f3f3f3;
  border-left: 0px;
  margin-bottom: 3rem;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0;
  border-radius: 0rem 1rem 1rem 0rem;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: transform 1s ease, background-color 1s ease;

  img {
    display: none;
    width: 2.5rem;
    height: 2.5rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    // transform: scale(1.1);
  }

  @media (max-width: 1050px) {
    // padding: .8rem .8rem .8rem .6rem;
    margin-bottom: 2.5rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const MenuDescription = styled.div`
  font-weight: 500;
  font-size: 2rem;
  margin-top: auto;
  margin-bottom: auto;
  overflow-wrap: break-word;
  width: 18rem;
  position: absolute;
  left: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 1rem;
  border-radius: 1rem;
  white-space: normal;
  opacity: 1;
  transition: opacity 1s ease, transform 1s ease;
  animation: ${deslizar} 1s ease-out; // Animación suave al aparecer desde la izquierda

  @media (max-width: 1050px) {
    font-size: 1.7rem;
    width: 15rem;
    padding: 0.8rem;
  }
`;

export const Ayuda = styled.div`
  font-weight: 400;
  margin-left: 0.5rem;
  font-size: 1.1rem;
  margin-top: auto;
  margin-bottom: auto;
  overflow-wrap: break-word;
  max-width: 13rem;
  position: absolute;
  left: 100%;
  background: rgb(0 0 0 / 66%);
  color: #fff;
  padding: 0.8rem;
  border-radius: 1rem;
  white-space: normal;

  @media (max-width: 1050px) {
    font-size: 0.8rem;
    max-width: 11rem;
    padding: 0.5rem;
    margin-left: 0.5rem;
  }
`;

export const MenuItems = styled.div`
  padding: 0.7rem 0.6rem 0.7rem 0.3rem;
  position: absolute;
  top: 121%;
  left: 17px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 18rem;
  max-height: 30rem;
  overflow-y: auto;
  border-radius: 1rem;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: opacity 1s ease, transform 1s ease;
  animation: ${({ open }) => (open ? slideIn : slideOut)} 1s ease;

  /* Estilos para la barra de desplazamiento */
  ::-webkit-scrollbar {
    width: 0.3rem; /* Cambia la altura de la barra de desplazamiento horizontal */
  }

  ::-webkit-scrollbar-thumb {
    background-color: white; /* Color de la barra */
    border-radius: 1rem; /* Redondeo de la barra */
  }

  ::-webkit-scrollbar-track {
    background-color: rgb(0 0 0 / 39%); /* Fondo de la barra */
  }

  /* Oculta las flechitas de la barra */
  ::-webkit-scrollbar-button {
    display: none;
  }

  @media (max-width: 1050px) {
    padding: 0.6rem 0.5rem 0.6rem 0.2rem;
    max-height: 13.5rem;
  }
`;

export const MenuItem = styled.div`
  font-size: 1.3rem !important;
  margin: 0.5rem;
  border-radius: 1rem;
  padding: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 1s ease, background-color 1s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }
  & + & {
    border-top: 1px solid #444;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
  }

  @media (max-width: 1050px) {
    font-size: 0.8rem;
    margin: 0.3rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    img {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
`;
