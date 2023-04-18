import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userChoice = atom({
  key: "user-choice",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const pcChoice = atom({
  key: "pc-choice",
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
  default: "",
  effects_UNSTABLE: [persistAtom],
});
