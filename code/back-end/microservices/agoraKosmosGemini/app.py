import os

import flask
from flask_socketio import SocketIO, emit

from service.gemini_service import Gemini

app = flask.Flask("-------------------Agora Kosmos Gemini-------------------")
socketio = SocketIO(app)

@app.route("/health-check", methods=["GET"])
def health_check():
    return "Server is up and running", 200


@app.route("/chatboot", methods=["POST"])
def generate_response():
    data = flask.request.json
    prompt = data.get('prompt')
    gemini = Gemini()
    response = gemini.generate(prompt)
    return flask.jsonify({"response": response}), 200