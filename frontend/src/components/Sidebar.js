import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Meu Painel</h2>
      <ul className="sidebar-menu">
        <li className="sidebar-item"><a href="/">Painel</a></li>
        <li className="sidebar-item"><a href="/cadastro">Cadastro de Aniversariantes</a></li>
        <li className="sidebar-item"><a href="/modelos">Modelos de Convites</a></li>
        <li className="sidebar-item"><a href="/pedidos">Pedidos</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
