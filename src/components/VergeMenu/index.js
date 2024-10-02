import React from 'react';
import { MenuContainer, MenuIcon, MenuDescription, MenuItems, MenuItem, Ayuda } from './styles';
import useSoundButton from "../../hooks/useSoundButton";

// Hook para manejar sonidos
const useSound = (url) => {
  const audioRef = React.useRef(new Audio(url));

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return { play };
};

// Componente del menú
const Menu = ({ items, menuIconImage }) => {
  const { playHover, playClick, stopHover, stopClick } = useSoundButton();

  const handleMouseEnter = () => {
    stopHover();
    stopClick();
    playHover();
  };

  const handleButtonClick2 = () => {
    stopHover();
    stopClick();
    playClick();
  };

  return (
    <MenuContainer id='menu'>
      <MenuIcon>
        <img src={menuIconImage} alt="Menu Icon" />
        <MenuDescription>
          <p className='en'>Rosh Pinah Zinc</p><p className='es'>Zinc de Rosh Pinah</p>
        </MenuDescription>
      </MenuIcon>
      <MenuItems open={true}> {/* Forzar el menú a estar siempre visible */}
        {items.map((item, index) => (
          <MenuItem onMouseEnter={handleMouseEnter} onClick={handleButtonClick2} id={item.id} key={index}>
            <img src={item.icon} alt={`Icon ${index}`} />
            <span className='en'>{item.ENdescription}</span><span className='es'>{item.ESdescription}</span>
          </MenuItem>
        ))}
      </MenuItems>
    </MenuContainer>
  );
};

export default Menu;
