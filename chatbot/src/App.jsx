import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm"

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
          <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button class="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>

        <div className="chat-body">
          <div className="message bot-message">
          <ChatbotIcon />
          <p className="message-text">
            Hey there 👋 <br /> How can I help you Today?
          </p>

          </div>
          <div className="message user-message">
            <p className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio placeat consequuntur reprehenderit alias expedita! Nemo omnis quo velit ipsam sequi? Officiis, eius rerum!
            </p>
          </div>

        </div>
        <div className="chat-footer">
          <ChatForm />
        </div>

      </div>
    </div>
  )
}

export default App