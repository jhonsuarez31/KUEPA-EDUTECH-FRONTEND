import { AppRepository } from "../../repositories/auth/App/App.repository"

export default class AppService {
  private appRepository: AppRepository

  constructor() {
    this.appRepository = new AppRepository()
  }

  getYear() {
    return this.appRepository.getYear()
  }
}