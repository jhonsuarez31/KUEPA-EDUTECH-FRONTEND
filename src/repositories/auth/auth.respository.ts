
import { SignInDto } from "../../dto/auth/signin.dto"
import { SignUpDto } from "../../dto/auth/signup.dto"
import HttpClient from "../../utils/HttpClient/HttpClient.util"

export class AuthRepository {
  private httpClient: HttpClient = new HttpClient("http://localhost:3000/auth")
  constructor() {}

  async signUp(signUpDto: SignUpDto) {
    return await this.httpClient.post("/register-student", signUpDto)
  }

  async signIn(signInDto: SignInDto) {
    return await this.httpClient.post("/login", signInDto)
  }
}