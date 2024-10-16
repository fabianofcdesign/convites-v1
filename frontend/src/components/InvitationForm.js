import React, { useState } from 'react';
import axios from 'axios';

const InvitationForm = ({ onNewAniversariante }) => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [dia, setDia] = useState('');
  const [idade, setIdade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !data || !idade || !endereco) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    setLoading(true);
    const diaDaSemana = new Date(data).toLocaleDateString('pt-BR', { weekday: 'long' });
    setDia(diaDaSemana);
    const newAniversariante = { nome, data, dia: diaDaSemana, idade, endereco };

    axios
      .post('http://localhost:5000/api/aniversariantes', newAniversariante)
      .then((response) => {
        onNewAniversariante(response.data);
        setNome('');
        setData('');
        setDia('');
        setIdade('');
        setEndereco('');
        setLoading(false);
        alert('Aniversariante cadastrado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar:', error);
        setLoading(false);
      });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setData(selectedDate);
    const diaDaSemana = new Date(selectedDate).toLocaleDateString('pt-BR', { weekday: 'long' });
    setDia(diaDaSemana);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="date"
        value={data}
        onChange={handleDateChange}
      />
      <input
        type="text"
        placeholder="Dia da Semana"
        value={dia}
        readOnly
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <input
        type="text"
        placeholder="Endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </button>
    </form>
  );
};

export default InvitationForm;
