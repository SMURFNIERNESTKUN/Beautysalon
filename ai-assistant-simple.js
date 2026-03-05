// Simple Salon AI Assistant - No API Required

function toggleChat() {
    var box = document.getElementById("chatBox");
    box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    var input = document.getElementById("userInput");
    var message = input.value.toLowerCase();
    if(message === "") return;

    var messages = document.getElementById("chatMessages");
    messages.innerHTML += "<div class='message user'>" + input.value + "</div>";

    var response = "";

    if(message.includes("hair")) {
        response = "Our hair services start at ₱30 for haircut, ₱80 for coloring 💇‍♀️ Would you like to book?";
    }
    else if(message.includes("bridal") || message.includes("makeup")) {
        response = "Bridal special is ₱250, Full Glam is ₱120 👰 Includes professional makeup!";
    }
    else if(message.includes("nail")) {
        response = "Manicure ₱45, Pedicure ₱35, Gel Polish ₱15+ 💅 Beautiful designs available!";
    }
    else if(message.includes("facial") || message.includes("spa")) {
        response = "Classic Facial ₱70, Day Spa Retreat ₱180 💆‍♀️ Relax and rejuvenate!";
    }
    else if(message.includes("appointment") || message.includes("book")) {
        response = "Book through our contact form or call us at 123 456 789 📞 We're open 9AM-7PM!";
    }
    else if(message.includes("price") || message.includes("cost")) {
        response = "Prices range from ₱15 (gel polish) to ₱250 (bridal) 💰 Check our pricing section!";
    }
    else if(message.includes("hours") || message.includes("time")) {
        response = "We're open Monday-Saturday 9AM-7PM, Closed Sundays ⏰";
    }
    else if(message.includes("location") || message.includes("address")) {
        response = "Find us at Piapi street, Dumaguete City 📍 Come visit us!";
    }
    else if(message.includes("christopher") || message.includes("hair specialist")) {
        response = "Christopher Jake is our Senior Hair Stylist! Expert in cuts, color & styling 💇‍♂️";
    }
    else if(message.includes("jenelyn") || message.includes("nail")) {
        response = "Jenelyn Virtudes is our Master Nail Technician! Amazing nail art 💅";
    }
    else if(message.includes("marjorie") || message.includes("makeup artist")) {
        response = "Marjorie Catubig is our Professional Makeup Artist! Perfect for events 💄";
    }
    else if(message.includes("renehart") || message.includes("spa")) {
        response = "Renehart Carino is our Spa Specialist! Expert in facials & massage 💆‍♂️";
    }
    else {
        response = "Ask me about: hair, nails, makeup, spa, prices, booking, hours, location, or staff! 💕";
    }

    setTimeout(function() {
        messages.innerHTML += "<div class='message bot'>" + response + "</div>";
        messages.scrollTop = messages.scrollHeight;
    }, 500);

    input.value = "";
}

// Create chat interface
function createChatInterface() {
    const chatHTML = `
        <button class="chat-btn" onclick="toggleChat()">💬</button>
        <div class="chat-box" id="chatBox">
            <div class="chat-header">💇‍♀️ Salon Assistant</div>
            <div class="chat-messages" id="chatMessages">
                <div class="message bot">
                    Hello beautiful! 💄 Welcome to RCMJ Beauty Salon. Ask me about services, prices, or booking!
                </div>
            </div>
            <div class="chat-input">
                <input type="text" id="userInput" placeholder="Ask about services, prices..." onkeypress="if(event.key==='Enter') sendMessage()">
                <button onclick="sendMessage()">Send</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatHTML);
    
    const styles = `
        .chat-btn {
            position: fixed;
            bottom: 90px;
            right: 20px;
            background: #d4af37;
            color: white;
            border: none;
            padding: 15px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
            z-index: 10000;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        }
        
        .chat-btn:hover {
            transform: scale(1.1);
            background: #b8941f;
        }
        
        .chat-box {
            position: fixed;
            bottom: 150px;
            right: 20px;
            width: 320px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            display: none;
            flex-direction: column;
            overflow: hidden;
            z-index: 10000;
            font-family: Arial, sans-serif;
        }
        
        .chat-header {
            background: #d4af37;
            color: white;
            padding: 15px;
            font-weight: bold;
            text-align: center;
            font-size: 16px;
        }
        
        .chat-messages {
            padding: 15px;
            height: 300px;
            overflow-y: auto;
            font-size: 14px;
        }
        
        .message {
            margin-bottom: 12px;
            line-height: 1.4;
        }
        
        .bot {
            color: #333;
        }
        
        .user {
            text-align: right;
            color: #d4af37;
            font-weight: 500;
        }
        
        .chat-input {
            display: flex;
            border-top: 1px solid #ddd;
        }
        
        .chat-input input {
            flex: 1;
            padding: 12px;
            border: none;
            outline: none;
            font-size: 14px;
        }
        
        .chat-input button {
            background: #d4af37;
            color: white;
            border: none;
            padding: 12px 15px;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.2s;
        }
        
        .chat-input button:hover {
            background: #b8941f;
        }
        
        @media (max-width: 768px) {
            .chat-box {
                width: 90%;
                right: 5%;
                left: 5%;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', createChatInterface);
