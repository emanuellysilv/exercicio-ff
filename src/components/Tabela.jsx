import { useState } from 'react';

function Tabela() {
  return (
    <table class="tabela01" border="2px">
      <tr>
        <th>Nome do jogo</th>
        <th>Plataforma</th>
        <th>Ano de Lançamento</th>
      </tr>
      <tr>
        <td>Super Mario Kart</td>
        <td>
        Super Nintendo Entertainment System
        
        </td>
        <td>1992</td>
      </tr>

      <tr>
        <td>God Of War</td>
        <td>PlayStation 2</td>
        <td>2005</td>
      </tr>

      <tr>
        <td>Valorant</td>
        <td>
        PlayStation 5, Xbox, Microsoft Windows
        </td>
        <td>2020</td>
      </tr>
    </table>
  );
}

export default Tabela;
