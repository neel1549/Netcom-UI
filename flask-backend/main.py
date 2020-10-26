from flask import Flask, render_template

app = Flask(__name__, static_folder="../frontend-react/build/static",
            template_folder="../frontend-react/build")


@app.route("/")
def hello():
    return render_template('index.html')


@app.errorhandler(404)
def not_found(e):
    return render_template('index.html')


print('Starting Flask!')

app.debug = True
app.run(host='0.0.0.0')
