// usado para evitar fazer varias requisisoes de um mesmo tipo no api
// ele junta todos os parametros em uma unica rota e faz a requisisao
import Dataloader from 'dataloader';

export const makeUserDataloader = (getUsers) => {
  return new Dataloader(async (ids) => {
    const urlQuery = ids.join('&id=');
    const users = await getUsers('?id=' + urlQuery);
    return ids.map(id => users.find(user => user.id === id));
  });
}

