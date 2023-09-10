
import $api from '../http';

export default class AuthService {
	static async getProfile() {
		return await $api.get('user/profile');
	}

}

interface Profile{
  username:string,
  nickname:string,
  achievments:[Achievment]
  battle: [Battle]
}
interface Achievment{
  iconUrl: string,
  name: string,
  describe:string
}
interface Battle{

}

