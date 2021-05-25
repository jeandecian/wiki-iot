import cv2
import sys

if (len(sys.argv) < 3):
    print('./resize_image.py <IMG_PATH> <NEW_WIDTH> <NEW_HEIGHT>')
    exit(0)

img_path = sys.argv[1]
cv2.imwrite(img_path, cv2.resize(cv2.imread(img_path, cv2.IMREAD_UNCHANGED),
                                 (int(sys.argv[2]), int(sys.argv[3])), interpolation=cv2.INTER_AREA))
