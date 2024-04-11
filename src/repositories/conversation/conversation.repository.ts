import HttpClient from "../../utils/HttpClient/HttpClient.util";

export class ConversationRepository {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient("http://localhost:3000/conversation/");
  }

  async getMessages(idConversation: string) {
    return await this.httpClient.get(`get-messages/${idConversation}`);
  }
}
