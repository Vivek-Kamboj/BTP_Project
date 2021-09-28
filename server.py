import os
from flask import Flask, flash, request, redirect, url_for, session, jsonify, send_file
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging
from Models import * 

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')



UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/object-recognition', methods=['POST'])
def ObjectRecognition():
    print("========================Object Recognition=======================")
    target=os.path.join(UPLOAD_FOLDER,'test_docs')
    if not os.path.isdir(target):
        os.mkdir(target)
    logger.info("welcome to upload`")
    file = request.files['file'] 
    filename = secure_filename(file.filename)
    destination="/".join([target, 'input.jpg'])
    file.save(destination)
    session['uploadFilePath']=destination
    logger.info(destination)
    # fun here
    text=objRecog("uploads/test_docs/input.jpg", "uploads/test_docs/output.jpg")
    response=jsonify({'dataOutput':'output.jpg', 'dataInput':'input.jpg', 'text':text['labels']})
    return response

@app.route('/image-to-text', methods=['POST'])
def ImageToText():
    print("========================OCR=======================")
    target=os.path.join(UPLOAD_FOLDER,'test_docs')
    if not os.path.isdir(target):
        os.mkdir(target)
    logger.info("welcome to upload`")
    file = request.files['file'] 
    filename = secure_filename(file.filename)
    destination="/".join([target, 'input.jpg'])
    file.save(destination)
    session['uploadFilePath']=destination
    logger.info(destination)
    text= Img2txt()
    response=jsonify({'dataOutput':'output.jpg', 'dataInput':'input.jpg', 'text':text})
    return response

@app.route('/display/<filename>')
def display_image(filename):
	#print('display_image filename: ' + filename)
	return send_file("uploads/test_docs/"+filename)

if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.run(debug=True,host="0.0.0.0",use_reloader=False)

# CORS(app, expose_headers='Authorization')