// Const action
import { log } from 'console';
import { Dispatch } from 'redux';
import { authAPI } from '../../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_CAPTCHA = 'SET_AUTH_CAPTCHA';

// Init
export type initialStateType = {
	usersId: number | null;
	email: string | null;
	login: string | null;
	isFetching: boolean;
	isAuth: boolean;
	captcha: string | null;
};
const initialState: initialStateType = {
	usersId: null,
	email: null,
	login: null,
	isFetching: false,
	isAuth: false,
	captcha: null,
};

export type SetAuthUserDataActionType = {
	type: typeof SET_USER_DATA;
	payload: AuthUserData;
};

export type SetAuthCaptcha = {
	type: typeof SET_AUTH_CAPTCHA;
	url: string;
};

export type AuthUserData = {
	userId: number;
	email: string;
	login: string;
	isAuth: boolean;
};

type ActionsType = SetAuthUserDataActionType | SetAuthCaptcha;

export const authReducer = (
	state: initialStateType = initialState,
	action: ActionsType
): initialStateType => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload,
			};
		}
		case 'SET_AUTH_CAPTCHA': {
			return {
				...state,
				captcha: action.url,
			};
		}
		default: {
			return state;
		}
	}
};

// Action creator
export const setAuthUserData = (
	userId: number,
	email: string,
	login: string,
	isAuth: boolean
): SetAuthUserDataActionType => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth },
});

export const setAuthCaptcha = (url: string): SetAuthCaptcha => {
	return {
		type: 'SET_AUTH_CAPTCHA',
		url,
	};
};

// THUNK
export const getAuthUserData = () => (dispatch: Dispatch) => {
	authAPI.me().then(response => {
		if (response.resultCode === 0) {
			const { id, login, email } = response.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
	});
};

export const login =
	(email: string, password: string, rememberMe: boolean, captcha: string) =>
	(dispatch: any) => {
		authAPI.login(email, password, rememberMe, captcha).then(res => {
			if (res.data.resultCode === 0) {
				dispatch(getAuthUserData());
			} else if (res.data.resultCode === 10) {
				dispatch(getCaptcha());
			}
		});
	};

export const logout = () => (dispatch: Dispatch) => {
	authAPI.logout().then(res => {
		if (res.data.resultCode === 0) {
			dispatch(setAuthUserData(0, '', '', true));
		}
	});
};

export const getCaptcha = () => async (dispatch: Dispatch) => {
	const res = await authAPI.getCaptcha();
	dispatch(setAuthCaptcha(res.data.url));
};
