from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
import os

app = FastAPI()

# Подключаем папку static, где лежат HTML/CSS/JS
current_dir = os.path.dirname(os.path.abspath(__file__))
static_path = os.path.join(current_dir, "static")

app.mount("/static", StaticFiles(directory=static_path), name="static")


@app.get("/")
async def serve_index():
    # Отдаём index.html с правильным заголовком Content-Type: text/html
    return FileResponse(os.path.join(static_path, "index.html"))


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
