import os
os.environ['CUDA_VISIBLE_DEVICES'] = '0'
import cv2
import numpy as np
import tensorflow as tf
from .yolov3.utils import *
from .yolov3.configs import *

# image_path   = "OBJ/image.jpg"

def detect_image(Yolo, image_path, output_path, input_size=416, show=False, CLASSES=YOLO_COCO_CLASSES, score_threshold=0.3, iou_threshold=0.45, rectangle_colors=''):
    original_image      = cv2.imread(image_path)
    original_image      = cv2.cvtColor(original_image, cv2.COLOR_BGR2RGB)
    original_image      = cv2.cvtColor(original_image, cv2.COLOR_BGR2RGB)

    image_data = image_preprocess(np.copy(original_image), [input_size, input_size])
    image_data = image_data[np.newaxis, ...].astype(np.float32)

    if YOLO_FRAMEWORK == "tf":
        pred_bbox = Yolo.predict(image_data)
    elif YOLO_FRAMEWORK == "trt":
        batched_input = tf.constant(image_data)
        result = Yolo(batched_input)
        pred_bbox = []
        for key, value in result.items():
            value = value.numpy()
            pred_bbox.append(value)
        
    pred_bbox = [tf.reshape(x, (-1, tf.shape(x)[-1])) for x in pred_bbox]
    pred_bbox = tf.concat(pred_bbox, axis=0)
    
    bboxes = postprocess_boxes(pred_bbox, original_image, input_size, score_threshold)
    bboxes = nms(bboxes, iou_threshold, method='nms')
    NUM_CLASS = read_class_names(CLASSES)
    labels=[]
    scores=[]
    coordiantes=[]
    print("===================================================================")
    for i, bbox in enumerate(bboxes):
        coor = np.array(bbox[:4], dtype=np.int32)
        score = bbox[4]
        class_ind = int(bbox[5])
        (x1, y1), (x2, y2) = (coor[0], coor[1]), (coor[2], coor[3])
        labels.append("{}".format(NUM_CLASS[class_ind]))
        scores.append(" {:.2f}".format(score))
        coordiantes.append(coor)
        # print(" {:.2f}".format(score), "{}".format(NUM_CLASS[class_ind]), (x1, y1), (x2, y2))
    print("===================================================================")


    image = draw_bbox(original_image, bboxes, CLASSES=CLASSES, rectangle_colors=rectangle_colors)
    # CreateXMLfile("XML_Detections", str(int(time.time())), original_image, bboxes, read_class_names(CLASSES))

    if output_path != '': cv2.imwrite(output_path, image)
    if show:
        # Show the image
        cv2.imshow("predicted image", image)
        # Load and hold the image
        cv2.waitKey(0)
        # To close the window after the required kill value was provided
        cv2.destroyAllWindows()
        
    return {"labels":labels, "scores": scores, "coordiantes": coordiantes}


def objRecog(image_path,  output_path):
    yolo = Load_Yolo_model()
    data = detect_image(yolo, image_path, output_path, input_size=YOLO_INPUT_SIZE, show=False, rectangle_colors=(255,0,0))
    return data

