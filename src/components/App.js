import React from "react";

import PlacarContainer from "./PlacarContainer";

const dados = {
  partida: {
    estadio: "Maracanã/RJ",
    data: "08/01/2019",
    horario: "19h"
  },
  casa: {
    nome: "Vasco"
  },
  visitante: {
    nome: "Flamengo"
  }
};

export default class App extends React.Component {
  render() {
    return <PlacarContainer {...dados} tempo={92} />;
  }
}
