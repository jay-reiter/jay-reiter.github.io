import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavigationBar.css';

interface NavButtonProps {
  tabName: string;
  currentTab: {
    name: string;
    set: (a: string) => void;
  },
  hasPage?: boolean;
  pagePath?: string;
  dropdownContent?: any;
}

const NavButton: React.FC<NavButtonProps> = ({
  tabName,
  currentTab: tab,
  hasPage = false,
  pagePath = tabName,
  dropdownContent,
}) => {
  return (
    <div 
      className={tab.name === tabName ? clsx("NavButton-Selected", "NavButton") : "NavButton"}
      onClick={() => tab.set(tabName)}
    >
      {hasPage 
        ? <Link to={pagePath} className="NavLink">
            {tabName}
          </Link> 
        : tabName
      }
      {dropdownContent}
    </div>
  );
}

function NavigationBar() {
  const [name, set] = useState("Home");
  const currentTab = {name, set}

  return (
    <div className="NavigationBar">
      <NavButton 
        tabName={'Home'} 
        currentTab={currentTab}
        hasPage={true}
        pagePath={'/index'}
      />

      <NavButton
        tabName={'Code Projects'}
        currentTab={currentTab}
        hasPage={true}
        dropdownContent={
          <div className="DropdownContent">
            <Link to="/breastfeeding-site" className="NavLink">Website for Illinois Breastfeeding Mothers</Link>
            <Link to="/PadicVisualization" className="NavLink">Visualizing p-adic Power Series in C++</Link>
            <Link to="/cpd-racial-bias" className="NavLink">Data Analysis of CPD Racial Bais</Link>
            <Link to="/website" className="NavLink">This Website!</Link>
          </div>
        }
      />

      <NavButton 
        tabName={'Research'} 
        currentTab={currentTab}
        hasPage={true}
        dropdownContent={
          <div className="DropdownContent">
            <Link to="/qcat" className="NavLink">Quantum Computing and Khovanov Homology</Link>
            <Link to="/padic-artin-hasse" className="NavLink">P-adic Numbers and the Artin Hasse Exponential</Link>
          </div>
        }
      />

      <NavButton 
        tabName={'Games'}
        currentTab={currentTab}
        hasPage={false}
        dropdownContent={
          <div className="DropdownContent">
            <Link to="/TicTacToe" className="NavLink">Tic-Tac-Toe</Link>
            <Link to="/Chess" className="NavLink">Chess</Link>
          </div>
        }
      />
    </div>
  );
}

export default NavigationBar;