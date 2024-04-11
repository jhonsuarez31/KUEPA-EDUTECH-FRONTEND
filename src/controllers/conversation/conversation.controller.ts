import { ConversationService } from "../../services/conversation/conversation.service"


export class ConversationController {
  private conversationService: ConversationService = new ConversationService()
  constructor() {}

  async getMessages(conversationId: string) {
    return this.conversationService.getMessages(conversationId)
  }


}