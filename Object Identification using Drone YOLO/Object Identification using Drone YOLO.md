# Object Identification using Drone YOLO

This module analyses drone footage with YOLOv8 to highlight people in each frame.

## Files
- `main.py` – Loads the YOLOv8 model (`yolov8s.pt`), runs inference on a video (e.g. `floods.mp4`) and uses `tracker.py` to assign persistent IDs to detected objects.
- `tracker.py` – Simple centroid-based tracker.
- `coco.txt` – List of class names used by the detector.
- `yolov8s.pt` – Pretrained weights from the Ultralytics repository.

## Usage
1. Install required libraries: `pip install ultralytics opencv-python pandas numpy`.
2. Place your input video in this directory and update the filename in `main.py` if needed.
3. Run `python main.py` and a window will display the frames with bounding boxes and IDs.
