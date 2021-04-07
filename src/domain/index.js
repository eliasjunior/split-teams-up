import PlayerRepository from "./PlayerRepository";
import nanoid from "nanoid";
import ConvertEmailNamePlayerUseCase from "./ConvertEmailNamePlayerUseCase";
const { getPlayerList, updatePlayerList, addAll } = PlayerRepository();

const {
  convertEmailsToListOfNames,
  convertListToObject,
  shuffle,
} = ConvertEmailNamePlayerUseCase({
  idGenerator: nanoid,
});

export default {
  convertEmailsToListOfNames,
  convertListToObject,
  shuffle,
  addAll,
  getPlayerList,
  updatePlayerList,
};
