
import { SignInDto } from "../../dto/auth/signin.dto"
import { SignUpDto } from "../../dto/auth/signup.dto"
import { AuthService } from "../../services/auth/auth.service"

export class AuthController {
  private authService: AuthService = new AuthService()
  constructor() {}

  async signUp(signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto)
  }

  async signIn(signInDto: SignInDto) {
    return this.authService.signIn(signInDto)
  }
}