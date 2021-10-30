import os
os.environ["KMP_DUPLICATE_LIB_OK"]="TRUE"
import easyocr
import cv2
from matplotlib import pyplot as plt
import numpy as np
def Img2txt():
    IMAGE_PATH = "./uploads/test_docs/input.jpg"
    IMAGE_Output_PATH = "./uploads/test_docs/output.jpg"
    reader = easyocr.Reader(['en','hi'])
    result = reader.readtext(IMAGE_PATH)
    # print(result)
    # print("Hello World") 

    outputText=""
    img=cv2.imread(IMAGE_PATH)
    for detection in result:
        top_left=tuple(detection[0][0])
        bottom_right=tuple(detection[0][2])
        text=detection[1]
        outputText+=text+" "
        # print(text, " ")
        font = cv2.FONT_HERSHEY_SIMPLEX
        img = cv2.rectangle(img,[int(top_left[0]), int(top_left[1])], [int(bottom_right[0]), int(bottom_right[1])],(0,255,0),3)
        img = cv2.putText(img,text,[int(top_left[0]), int(top_left[1])], font, 0.5,(0,0,0),2,cv2.LINE_AA)
    cv2.imwrite(IMAGE_Output_PATH, img)
    return outputText
    # plt.imshow(img)
    # plt.show()