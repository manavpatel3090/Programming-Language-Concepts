// NAME : MANAV JAYESHBHAI PATEL
// STUDENT ID : 1002155843
// LANGUAGE VERSION : Apple clang version 16.0.0 (clang-1600.0.26.6)
// OS : MacOS

#include <iostream>
#include <string>
#include <vector>
#include <dirent.h>
#include <sys/stat.h>
#include <unistd.h>

using namespace std;

// A recursive function which takes path as an input and calculates the total size of the directory
long long getDirectorySize(const string &path) {
    struct dirent *entry; //A pointer to indicate the entry point to the directory
    long long totalSize = 0;
    DIR *directory_pointer = opendir(path.c_str()); // Declaring a pointer pointing to directory and opening that directory

    // Using WHILE to iterrate to the end of directory 
    while ((entry = readdir(directory_pointer)) != nullptr) {
        string entryName = entry->d_name;

        // Checking the directory where "." will represent current directory and ".." will represent parent directory and using "continue;" to ignore these directories while calculating size
        // This is done to prevent infinite recursion. 
        if (entryName == "." || entryName == "..")
            continue;
        string fullPath = path + "/" + entryName; // Constructing full path to the entry point
        
        // Using stat function to retrieve metadata and store it in statbuf declared above, then to detect any error I am using "==-1".
        struct stat fileStat;
        if (stat(fullPath.c_str(), &fileStat) == -1) {
            cerr << "Error: Could not access " << fullPath << endl;
            continue;
        }

        // This if-else block will check if the entry is directory or a regular file and correspondingly recurse itself for directory or add the size of file to total_size variable.
        if (S_ISDIR(fileStat.st_mode)) {
            totalSize += getDirectorySize(fullPath);
        } else if (S_ISREG(fileStat.st_mode)) {
            totalSize += fileStat.st_size;
        }
    }

    closedir(directory_pointer);
    return totalSize;
}

int main() {
    string currentDir = ".";
    long long totalSize = getDirectorySize(currentDir);
    cout << totalSize << endl;
    return 0;
}
