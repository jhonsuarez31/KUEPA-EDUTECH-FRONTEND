
import { ConversationRepository } from "../../repositories/conversation/conversation.repository"

export class ConversationService {
  private conversationRepository: ConversationRepository = new ConversationRepository()
  constructor() {}

  async getMessages(conversationId: string) {
    const chats = await this.conversationRepository.getMessages(conversationId)
    console.log('hola', chats)
    return this.conversationRepository.getMessages(conversationId)
  }


}