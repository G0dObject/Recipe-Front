import * as mobx from "mobx";
import { makeAutoObservable } from "mobx";
import { ILogin } from "../Core/Interfaces/Auth/ILogin";
import { IUser } from "../Core/Interfaces/Auth/IUser";
import AuthService from "../Service/AuthService";
import { Jwt } from "../Core/Interfaces/Auth/jwt";
import jwtDecode from "jwt-decode";
export default class Store {
	constructor() {
		makeAutoObservable(this);
		this.load();
		this.autoSave(this, this.save.bind(this));
	}
	user:IUser = {};
	isAuth = false;


	setUser(user: IUser) {
		this.isAuth= true;
		this.user = user;
	}

	async externalLogin(token: string, decode: Jwt) {
		this.setUser({token:token, userName:decode!["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]})
	}

	load() {
		if (localStorage.getItem("store") != null) {
			const data: any = localStorage.getItem("store");
			Object.assign(this, JSON.parse(data));
		}
	}
	autoSave(store: any, save: any) {
		let firstRun = true;
		mobx.autorun(() => {
			const json = JSON.stringify(mobx.toJS(store));
			if (!firstRun) {
				save(json);
			}
			firstRun = false;
		});
	}

	save(json: any) {
		localStorage.setItem("store", json);
	}

	async login(props: ILogin) {
		try {
			const response = await AuthService.login(props);
			console.log(response)
			if (response.status == 400) {
				console.log(400)
			}
			if (response.status == 200) {
				var decode = jwtDecode<Jwt>(response.data.token as string);

				this.setUser({token:response.data.token, userName:decode!["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]})
				window.location.href = "/";
			}

			return response.status
		} catch (e: any) {
			console.log(e.response?.data?.message);
			return e.response.status
		}
	}
	async logout() {
		try {
			this.setUser({});
			this.isAuth = false;
			window.location.reload();
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	}


}