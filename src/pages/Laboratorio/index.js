import React from "react";
import { Container /*PoweredBy*/ } from "./styles";
import VergeViewer from "../../components/VergeViewer";
import VergePreloader from "../../components/VergePreloader";
import VergeLogo from "../../components/VergeLogo";
import Menu from "../../components/VergeMenu";
import IconButtons from "../../components/VergeAyudas";
import ModalObjetivos from "../../components/VergeModalObjetivos";
import ModalAyuda from "../../components/VergeModalAyuda";
import ModalAyudaMovil from "../../components/VergeModalAyudaMovil";
import ModalEquipo from "../../components/VergeModalEquipo";
import ModalInformacion from "../../components/VergeModalInformacion";
import VergeBotonRetroceso from "../../components/VergeBotonRetroceso";
import VergePantallaMobile from "../../components/VergePantallaMobile";

function Laboratorio() {
  
const menuItems = [
  { id: 'paso1', icon: '/images/icon3.png', ENdescription: 'Free Movement', ESdescription: 'Movimiento Libre' },
  { id: 'paso2', icon: '/images/icon2.png', ENdescription: 'Crushing', ESdescription: 'Trituración' },
  { id: 'paso3', icon: '/images/icon2.png', ENdescription: 'Milling', ESdescription: 'Molienda' },
  { id: 'paso4', icon: '/images/icon2.png', ENdescription: 'Lead Flotation', ESdescription: 'Flotación de plomo' },
  { id: 'paso5', icon: '/images/icon2.png', ENdescription: 'Zinc Flotation', ESdescription: 'Flotación de zinc' },
  { id: 'paso6', icon: '/images/icon2.png', ENdescription: 'Lead Dewatering', ESdescription: 'Deshidratación de plomo' },
  { id: 'paso7', icon: '/images/icon2.png', ENdescription: 'Zinc Dewatering', ESdescription: 'Deshidratación de zinc' },
  { id: 'paso8', icon: '/images/icon2.png', ENdescription: 'Reagents', ESdescription: 'Reactivos' },
  { id: 'paso9', icon: '/images/icon2.png', ENdescription: 'Backfill Plant', ESdescription: 'Planta de relleno' },
];

  return (
    <Container>
      <VergePreloader
        labName="Rosh Pinah Zinc"
        imageUrl="/images/fondo.png"
        logoUrl="/images/logo-tecsup.png"
       />
      <Menu items={menuItems} menuIconImage="/images/icon1.png"/>
      <IconButtons />
      <VergeViewer
        src="/applications/Escenario_General/Escenario_General.html"
        title="Rosh Pinah Zinc"
      />
      <input
        id="estado_animacion"
        defaultValue="0"
        style={{ display: "none" }}
      />
      <VergePantallaMobile />
      <ModalAyuda />
      <ModalAyudaMovil />
      <ModalObjetivos />
      <ModalEquipo />
      <ModalInformacion />
      <VergeBotonRetroceso />
    </Container>
  );
}

export default Laboratorio;
