import { PrivateKey, PublicKey } from "../components/Main/NcryptorApp";
import { AppViews } from "../data/AppViews";
import { ActionNames } from "./Actions";

export type AppAction = {
	type: string;
	payload: any;
};

type AppState = {
	currentUser: string; 
	privateKeys: PrivateKey[], 
	publicKeys: PublicKey[],
	selectedContact: string,
	selectedPrivateKey: string,
	view: AppViews
};

export const initialState: AppState = {
	currentUser: "",
	privateKeys: [],
	publicKeys: [],
	selectedContact: "",
	selectedPrivateKey: "",
	view: AppViews.Encrypt
};

export const reducer = (state: AppState, { type, payload }: AppAction): AppState => {
	switch (type) {
		case ActionNames.SelectContact:
			return { ...state, selectedContact: payload };
		case ActionNames.SelectPrivateKey:
			return { ...state, selectedPrivateKey: payload };
		case ActionNames.SetCurrentUser:
			return { ...state, currentUser: payload };
		case ActionNames.SetPrivateKeys:
			return { ...state, privateKeys: payload };
		case ActionNames.SetPublicKeys:
			return { ...state, publicKeys: payload };
		case ActionNames.SetView:
			return { ...state, view: payload };
		default:
			console.error(`Unrecognized action type ${type}`);
			return state;
	}
};