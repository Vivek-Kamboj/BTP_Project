# Smart Assistant for Visual Impaired Person ✨


## Brief Description 
This is my B.Tech. project and its title is **Smart Assistant for Visual Impaired Person.** <br><br>
Visually impaired people are facing a lot of problems in their daily life. So, It would be great if visually impaired people can also interact with the environment with the help of the latest technology and utilize the facilities of the technology. Utilizing technologies like Artificial Intelligence, Machine Learning, Image, and Text Recognition, we can help visually impaired people to get information about their surroundings. This can help them a lot and can make their life easier than before.



## Objective and Functionalities 😃

The main idea of my project is to implement a Web-based application that provides a
way for visually impaired people to interact and understand their surroundings. It would
focus on tools that can help these people, which includes:
1. **Object Detection:**
<br>The idea is to build an application that would detect the object present in
front of the webcam or camera in our computer or smartphone and can tell
the information about the objects to the user in the form of voice.
2. **Voice assistant:**
<br>The idea is to build an assistant that can take the input of a user in the
form of voice and can perform some basic tasks like searching on the
web, switching the feature in the web app, etc.
3. **Image to text/speech:**
<br>The idea is to make the words recognition system that can extract words
from the given input image and display them in the form of text and
produces an output in the form of voice.
4. **Speech to text:**
<br>The idea is to construct a speech recognition system that would listen to
the user’s speech and convert it into text. This would be a great tool that
would help the visually impaired person to write a kind of information by
just saying it.
5. **Text to Speech:**
<br>The idea here is to convert the text into speech. This will help the user to
read anything by just passing the text in the application, and the
application would read on behalf of the user. <br><br>


These are some of the deliverables that I have planned to make for this project. I have
planned to integrate these tools in a single web application using React.js framework as frontend
and Python - flask as a backend. I am building a web application because it can run in any system
using their default browser without any need for installation of any kind of application in
our system. However, it may need an internet connection to load the application in the
browser.

## ARCHITECTURE/ METHODOLOGY
My aim in this project is to build a smart virtual assistant for visually impaired people
that would be helpful for them in their daily routine. This assistant application would
provide a different look about their surroundings to the user. It would have the following
modules:

![image](https://user-images.githubusercontent.com/43985107/141274816-2c27c4f2-bbdf-4337-a006-9cd1f2c85124.png)

1. **Object Detection** <br>
     It is done using `YOLO` algorithm.
2. **Image to text/speech convertor** <br>
     It is done using `easyOCR`.
3. **Speech to text converter** <br>
     It is done using `WebSpeechAPI`.
4. **Text to Speech** <br>
     It is done using `WebSpeechAPI`.
5. **Voice assistant** <br>
     It is done using `WebSpeechAPI`.<br><br>
     
     
I have planned to make a web application to integrate these modules as a web
application can run in any system’s browser, whether it is a desktop or a smartphone,
without any need to install any software. The user only needs to go to the particular
website, and this application would get loaded into the browser and start working.
However, for this to work Internet connection is required. I am considering using the
React.js framework and python as backend to implement this project and run these models in
the system’s browser

## Tech Stack 💻
 
 **MERN** stack has been used for the development of this website. 
 - [React.js](https://reactjs.org/)
 - [Python](https://www.python.org/)
 - [Flask](https://flask.palletsprojects.com/en/2.0.x/)
 - [EasyOCR](https://github.com/JaidedAI/EasyOCR)
 - [Yolo algorithm]()
 - [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)

## SetUp Steps

**Prerequisites:** Python, Flask, npm, pip, create-react-app, etc.

### For Frontend
 - Write `cd ./client` in terminal for going in frontend folder.
 - Run `npm install` for installing dependencies.
 - Run `npm start`

### For Backend
 - Install libraries like numpy, pandas, pillow easyocr, tensorflow, openCV, keras, matplotlib, etc. by running `pip install <<Library_name>>`.
 - Download yolo weight and put it in model_data. [For reference.](https://medium.com/analytics-vidhya/yolov3-object-detection-in-tensorflow-2-x-8a1a104c46a8)
 - Run `python ./server.py`
 
**Hurray, Your app is now running on port 3000 in your browser**

## Demo :man_technologist:
Link : https://www.youtube.com/watch?v=0TPdp-As1Ac

## Screenshots
**Object Detection**<br><br>
![image](https://user-images.githubusercontent.com/43985107/141276512-d3c5dd12-c812-4a8c-9d83-9e38afee8240.png)
![image](https://user-images.githubusercontent.com/43985107/141276634-ec67209d-632b-47f2-bf15-cb6dc565f36a.png)
**Image to Text**<br><br>
![image](https://user-images.githubusercontent.com/43985107/141276883-0d119dd7-194c-4f2a-920e-911f34f4a823.png)
**Text to Speech**<br><br>
![image](https://user-images.githubusercontent.com/43985107/141277020-9136196b-04eb-4c64-bb45-abf6273862b4.png)
**Speech to Text**<br><br>
![image](https://user-images.githubusercontent.com/43985107/141277135-eb0c170a-0e14-41f7-9838-1be3edab5324.png)
**Assistant** <br>
- It can perform task like go to <page>, search on google, play on youtube, weather, etc...


