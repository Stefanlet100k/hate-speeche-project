from flask import Flask, render_template, request
import pickle

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))
cv = pickle.load(open('cv.pkl', 'rb'))

@app.route("/")
def menu():
    return render_template("menu.html")



@app.route("/predict", methods=['POST', 'GET'])
def predict():
    tweet = request.form['tweet']
    data = cv.transform([tweet]).toarray()

    prediction = model.predict(data)
    pred_string = ''


    for p in prediction:
        if len(pred_string):
            pred_string += ', '
        
        pred_string += p


    return render_template('menu.html', prediction_text=pred_string, text=tweet)


@app.route("/team")
def show_team():
    return render_template('team.html')

    
if __name__ == "__main__":
    app.run()
