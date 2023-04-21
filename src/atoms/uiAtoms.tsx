import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loaderAtom = atom({
  key: "activarDesactivarLoader",
  default: {
    mostrado: false,
  },
});

export const routeAtom = atom({
  key: "selectedRoute",
  default: "/",
  effects_UNSTABLE: [persistAtom],
});
