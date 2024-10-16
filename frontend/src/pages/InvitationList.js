import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InvitationForm from '../components/InvitationForm';
import ModalComponent from '../components/ModalComponent';
import '../styles/InvitationList.css';

const InvitationList = () => {
  const [aniversariantes, setAniversariantes] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/aniversariantes')
      .then((response) => {
        setAniversariantes(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar aniversariantes:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/aniversariantes/${id}`)
      .then(() => {
        setAniversariantes(aniversariantes.filter((item) => item.id !== id));
      })
      .catch((error) => console.error('Erro ao excluir:', error));
  };

  const handleEdit = (id, field, value) => {
    const updatedAniversariantes = aniversariantes.map((aniversariante) =>
      aniversariante.id === id ? { ...aniversariante, [field]: value } : aniversariante
    );
    setAniversariantes(updatedAniversariantes);
    
    axios
      .put(`http://localhost:5000/api/aniversariantes/${id}`, { [field]: value })
      .then(() => {
        console.log('Editado com sucesso');
      })
      .catch((error) => console.error('Erro ao editar:', error));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1>Cadastro de Aniversariantes</h1>
      <button className="add-button" onClick={handleOpen}>Adicionar Aniversariante</button>
      <ModalComponent open={open} handleClose={handleClose}>
        <InvitationForm onNewAniversariante={(data) => setAniversariantes([...aniversariantes, data])} />
      </ModalComponent>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data da Festa</th>
            <th>Dia</th>
            <th>Idade</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {aniversariantes.length === 0 ? (
            <tr>
              <td colSpan="6" align="center">Nenhum aniversariante cadastrado.</td>
            </tr>
          ) : (
            aniversariantes.map((aniversariante) => (
              <tr key={aniversariante.id}>
                <td>
                  <input
                    type="text"
                    value={aniversariante.nome}
                    onChange={(e) => handleEdit(aniversariante.id, 'nome', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={aniversariante.data}
                    onChange={(e) => handleEdit(aniversariante.id, 'data', e.target.value)}
                  />
                </td>
                <td>{aniversariante.dia}</td>
                <td>
                  <input
                    type="number"
                    value={aniversariante.idade}
                    onChange={(e) => handleEdit(aniversariante.id, 'idade', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={aniversariante.endereco}
                    onChange={(e) => handleEdit(aniversariante.id, 'endereco', e.target.value)}
                  />
                </td>
                <td>
                <button className="delete-button" onClick={() => handleDelete(aniversariante.id)}>Excluir</button>
                </td>
              </tr>
            ))
          )}
        </tbody> 
      </table>
    </div>
  );
};

export default InvitationList;
