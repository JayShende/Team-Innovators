from flask import Flask, request
import json

app = Flask(__name__)

@app.route('/sagemaker-us-east-1-245771673474', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        data = request.get_json()
        # Do something with the incoming data
        response = {"message": "Data received"}
        return json.dumps(response), 201
    else:
        # Return a default response for GET requests
        response = {"message": "Hello World"}
        return json.dumps(response), 200

if __name__ == '__main__':
    app.run()
# Flask App To Communicate with the model
