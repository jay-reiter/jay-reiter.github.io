import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavigationBar.css';

interface NavButtonProps {
  children: any;
  tabName: string;
  currentTab: {
    name: string;
    set: (a: string) => void;
  }
}

const NavButton: React.FC<NavButtonProps> = ({
  children,
  tabName,
  currentTab: tab
}) => {
  return (
    <div 
      className={tab.name === tabName ? clsx("NavButton-Selected", "NavButton") : "NavButton"}
      onClick={() => tab.set(tabName)}
    >
      {children}
    </div>
  );
}

function NavigationBar() {
  const [name, set] = useState("Home");
  const currentTab = {name, set}

  return (
    <div className="NavigationBar">
      <NavButton tabName={'Home'} currentTab={currentTab}>
        <Link to="/index" className="NavLink">Home</Link>
      </NavButton>
      <NavButton tabName={'Research'} currentTab={currentTab}>
        <Link to="" className="NavLink">Research</Link>
      </NavButton>
      <NavButton tabName={'Projects'} currentTab={currentTab}>
        <Link to="" className="NavLink">Projects</Link>
      </NavButton>
      <NavButton tabName={'Games'} currentTab={currentTab}>
        Games
        <div className="DropdownContent">
          <Link to="/TicTacToe" className="NavLink">Play Tic-Tac-Toe</Link>
          <Link to="/Chess" className="NavLink">Play Chess</Link>
        </div>
      </NavButton>
    </div>
  );
}

export default NavigationBar;