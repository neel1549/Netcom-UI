#Script to build React frontend and Run Flask App. Will fail upon Compilation Errors
#!/bin/bash

echo "Building React Front-end"
FLASK_BACKEND="../flask-backend"
npm run build
cd $FLASK_BACKEND
echo "Building Flask Back-end"
python3 main.py
echo "Finished executing python"
