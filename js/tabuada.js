const numeros = [
  { num: 1, res: 0 },
  { num: 2, res: 0 },
  { num: 3, res: 0 },
  { num: 4, res: 0 },
  { num: 5, res: 0 },
  { num: 6, res: 0 },
  { num: 7, res: 0 },
  { num: 8, res: 0 },
  { num: 9, res: 0 },
  { num: 10, res: 0 },
];

export const retornaTabuada = (valor) => {
  const tab = numeros.map((numero) => {
    const newtab = { num: numero.num, resultado: numero.num * valor };
    return newtab;
  });

  return tab;
};
