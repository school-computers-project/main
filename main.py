from flask import Flask, request, jsonify, render_template, send_from_directory, redirect, url_for
import requests

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def mainApp():
    if request.method == 'GET':
        return render_template('index.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Accessing form data
        firstname = request.form.get('firstname')
        lastname = request.form.get('lastname')
        email = request.form.get('emailaddr')
        phonenum = request.form.get('phonenum')
        subject = request.form.get('subject')
        message = request.form.get('message')
        perferredMethodOfContact = request.form.get('perferredMethodOfContact')

        # Constructing the data string to be written to the file
        print(f"First Name: {firstname}, Last Name: {lastname}, Country: {country}, Subject: {subject}")

        # Writing the data to a text file
        with open('form_submissions.txt', 'a') as f:
            f.write(data_string)

        return "Form submitted successfully Data has been written to the file."
    if request.method == 'GET':
        return render_template('contact.html')

@app.route('/navbarTest', methods=['GET', 'POST'])
def navbarTest():
    if request.method == 'GET':
        return render_template('navbarTest.html')

if __name__ == '__main__':
    app.run(debug=True, port=2233)
    