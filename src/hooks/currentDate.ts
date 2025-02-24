import { useState, useEffect } from 'react';

const useCurrentDateString = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Atualiza a data a cada segundo

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado

  }, []);

  // Formata a data como uma string no formato "DD/MM/AAAA"
  const formattedDate = currentDate.toLocaleDateString('pt-BR');

  return formattedDate;
};

export default useCurrentDateString;
