import { PrivateKey, PublicKey } from "../components/Main/NcryptorApp";
import { AppViews } from "../data/AppViews";
import { AppAction } from "./Reducer";

export const ActionNames = {
  SelectContact: "selectContact",
  SelectPrivateKey: "selectPrivateKey",
  SetCurrentUser: "setCurrentUser",
  SetPrivateKeys: "setPrivateKeys",
  SetPublicKeys: "setPublicKeys",
  SetView: "setView"
};

export const selectContact = (userId: string): AppAction => ({
  type: ActionNames.SelectContact,
  payload: userId
});

export const selectPrivateKey = (userId: string): AppAction => ({
  type: ActionNames.SelectPrivateKey,
  payload: userId
});

export const setCurrentUser = (userId: string): AppAction => ({
  type: ActionNames.SetCurrentUser,
  payload: userId
});

export const setPrivateKeys = (keys: PrivateKey[]): AppAction => ({
  type: ActionNames.SetPrivateKeys,
  payload: keys
});

export const setPublicKeys = (keys: PublicKey[]): AppAction => ({
  type: ActionNames.SetPublicKeys,
  payload: keys
});

export const setView = (view: AppViews): AppAction => ({
  type: ActionNames.SetView,
  payload: view 
});