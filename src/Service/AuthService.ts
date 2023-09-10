
import { ILogin } from '../Core/Interfaces/Auth/ILogin';
import { IUser } from '../Core/Interfaces/Auth/IUser';import jwt_decode from "jwt-decode";
import $api from '../http';

export default class AuthService {
	static async login( props: ILogin  ) {
		return await $api.post<IUser>('account/login', { username:props.username, password : props.password });
	}
	static async register(props:ILogin ) {
		return await $api.post<IUser>('account/register', { username:props.username, password : props.password });
	}

}
