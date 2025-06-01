from flask import Flask, request, jsonify
from flask_cors import CORS
from telegram import Bot
import asyncio
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)  # Frontend bilan aloqa uchun CORS yoqildi

load_dotenv()

# Telegram bot sozlamalari
TELEGRAM_BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN')
TELEGRAM_CHAT_ID = os.getenv('TELEGRAM_CHAT_ID')
bot = Bot(token=TELEGRAM_BOT_TOKEN)

# Kirishlar sonini o'qish va yozish
def read_count():
    try:
        with open('count.txt', 'r') as f:
            return int(f.read().strip())
    except FileNotFoundError:
        return 0

def write_count(count):
    with open('count.txt', 'w') as f:
        f.write(str(count))

@app.route('/api/login', methods=['POST'])
async def login():
    data = request.get_json()
    username = data.get('username')

    if not username:
        return jsonify({'error': 'Username required'}), 400

    # Kirishlar sonini yangilash
    count = read_count() + 1
    write_count(count)

    # Telegram botga xabar yuborish
    try:
        await bot.send_message(
            chat_id=TELEGRAM_CHAT_ID,
            text=f"+1\nUmumiy kirishlar: {count}"
        )
    except Exception as e:
        print(f"Telegram error: {e}")
        return jsonify({'error': 'Failed to send Telegram message'}), 500

    return jsonify({'message': 'Login successful', 'loginCount': count}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
