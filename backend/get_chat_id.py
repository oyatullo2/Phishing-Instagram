from telegram import Bot
import asyncio

async def get_chat_id():
    bot = Bot(token='8171646852:AAErRoSmNkkTt7agoi0bciWOqDti0-BJuRs')
    updates = await bot.get_updates()
    for update in updates:
        if update.message:
            print(f"Chat ID: {update.message.chat_id}")
            break

asyncio.run(get_chat_id())