import {config} from "../config"
const API_URL = config.API_URL; // Remplace avec ton API
export type User = {
  id: number;
  name: string;
  profilPhoto: string;
};
type Token = {
  id: number;
  value: string;
  user: User;
};
export const userService = {
  async getTopWritter(): Promise<User[]> {
    const filter={take:5,skip:0}
    const response = await fetch(`${API_URL}/user?filter=${JSON.stringify(filter)}`);
    if (!response.ok) throw new Error("Failed to fetch blogs");
    return response.json();
  },
  async login(email:string,password:string): Promise<Token> {
    
    const response = await fetch(`${API_URL}/auth/login/`,{
      body:JSON.stringify({email,password}),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    }as any);
    if (!response.ok) throw new Error("login failed");
    return response.json();
  },
  async test(tokenValue:string): Promise<Token> {
    const response = await fetch(`${API_URL}/auth/test/${tokenValue}`);
    if (!response.ok) throw new Error("login failed");
    return response.json();
  },
  async register(user:any): Promise<Token>{
    const response = await fetch(`${API_URL}/user`,{
      body:JSON.stringify(user),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    }as any);
    if (!response.ok) throw new Error("login failed");
    await response.json();
    return this.login(user.email,user.password) 
  }
};
