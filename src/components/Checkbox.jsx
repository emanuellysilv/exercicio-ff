import { useState } from 'react';

function Checkbox() {
  const [marcado, setMarcado] = useState(false);
  const botao = () => {
    setMarcado(!marcado);
  };
  return (
    <form>
      <p>
        <input type="checkbox" onChange={botao} />
        {marcado ? 'Estou marcado' : 'Não estou marcado'}
      </p>
    </form>
  );
}
export default Checkbox;
