# NAME : MANAV JAYESHBHAI PATEL
# STUDENT ID : 1002155843
# LANGUAGE VERSION : Python 3.13.1
# OS : MacOS

# Defining a function that takes directory as an input and calculates its total size
def directory_size(directory):
    total_size = 0
    # Using Try block to list directories. Using except to skip directories that cannot be accessed
    try:
        items = os.listdir(directory)
    except PermissionError:
        return 0

    # Using for loop to iterrate through the directory
    for item in items:
        item_path = os.path.join(directory, item)
        if os.path.isfile(item_path):
           # Using Try block to add file size to total_size variable files. Using except to skip files that cannot be accessed
            try:
                total_size += os.path.getsize(item_path)
            except FileNotFoundError:
                pass
        elif os.path.isdir(item_path):
            total_size += directory_size(item_path)  
    return total_size


import os
current_directory = os.getcwd()  # Using getcwd to get the current working directory
total_size = directory_size(current_directory)
print(f"{total_size}")