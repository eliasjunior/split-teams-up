import PlayerRepository from "./PlayerRepository";
import nanoid from "nanoid";
import UserInputPlayerUseCase from "./UserInputUseCase";
const { getPlayerList, updatePlayerList, addAll } = PlayerRepository();

const {
  shapeStringToList,
  convertListToObject,
  shuffle,
} = UserInputPlayerUseCase({
  idGenerator: nanoid,
});
const domainDelegator = {
  shapePlayerInfo: shapeStringToList,
  convertListToPlayers: convertListToObject,
  shufflePlayersPerTeam: shuffle,
  addAll: addAll,
  getPlayerList: getPlayerList,
  updatePlayerList: updatePlayerList,
}
export default domainDelegator;
