import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userChoice = atom({
  key: "user-choice",
  default: "none",
});

export const userChoosed = atom({
  key: "userChoosed",
  default: false,
});

export const pcChoice = atom({
  key: "pcChoice",
  default: "",
});

export const userScoreAtom = atom({
  key: "user-score",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const pcScoreAtom = atom({
  key: "pc-score",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const result = atom({
  key: "result",
  default: "perdiste",
  effects_UNSTABLE: [persistAtom],
});
