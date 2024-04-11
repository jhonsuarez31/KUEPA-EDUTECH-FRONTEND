import { SignInDto } from "../../dto/auth/signin.dto"
import { SignUpDto } from "../../dto/auth/signup.dto"
import { AuthRepository } from "../../repositories/auth/auth.respository"

export class AuthService {
  private authRepository: AuthRepository = new AuthRepository()
  constructor() {}

  async signUp(signUpDto: SignUpDto) {
    return this.authRepository.signUp(signUpDto)
  }

  async signIn(signInDto: SignInDto) {
    return this.authRepository.signIn(signInDto)
  }
}