// NAME : MANAV JAYESHBHAI PATEL
// STUDENT ID : 1002155843
// LANGUAGE VERSION : Apple clang version 16.0.0 (clang-1600.0.26.6)
// OS : MacOS

#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>
#include <sys/stat.h>
#include <string.h>
#include <errno.h>

// A recursive function which takes path as an input and calculates the total size of the directory
long long directory_size(const char *path) {
    struct dirent *entry; //A pointer to indicate the entry point to the directory
    struct stat statbuf; //Statbuf will store the metadata of the directory such as size, type
    DIR *directory_pointer;
    long long total_size = 0;
    
    directory_pointer = opendir(path); // Opening a directory
    // Using WHILE to iterrate to the end of directory 
    while ((entry = readdir(directory_pointer)) != NULL) {
        char full_path[1024];
        // Checking the directory where "." will represent current directory and ".." will represent parent directory and using "continue;" to ignore these directories while calculating size
        // this is done to prevent infinite recursion. 
        if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) {
            continue;
        }
        // Using snprintf function to construct full path to the entry point
        snprintf(full_path, sizeof(full_path), "%s/%s", path, entry->d_name);
        // Using lstat function to retrieve metadata and store it in statbuf declared above, then to detect any error I am using "==-1".
        if (lstat(full_path, &statbuf) == -1) {
            fprintf(stderr, "Error accessing '%s': %s\n", full_path, strerror(errno));
            continue;
        }
        // This if-else block will check if the entry is directory or a regular file and correspondingly recurse itself for directory or add the size of file to total_size variable.
        if (S_ISDIR(statbuf.st_mode)) {
            total_size += directory_size(full_path);
        } else if (S_ISREG(statbuf.st_mode)) {
            total_size += statbuf.st_size;
        }
    }

    closedir(directory_pointer);
    return total_size;
}

int main() {
    const char *current_dir = ".";
    long long total_size = directory_size(current_dir);
    printf("%lld \n", total_size);
    return 0;
}
