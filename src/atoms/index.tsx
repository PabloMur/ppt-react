import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userChoice = atom({
  key: "user-choice",
  default: "none",
  effects_UNSTABLE: [persistAtom],
});

export const pcChoice = atom({
  key: "pcChoice",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userScore = atom({
  key: "user-score",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const pcScore = atom({
  key: "pc-score",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const result = atom({
  key: "result",
  default: "perdiste",
  effects_UNSTABLE: [persistAtom],
});
