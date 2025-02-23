# Website_Blocker
# Overview

This script is a simple website blocker that modifies the system's hosts file to restrict access to specified websites during a user-defined focus period. It runs as a background process and actively blocks requests to distracting sites. The ultimate goal is to integrate this functionality into a web extension.

# Features

1. Runs as a background process.

2. Allows the user to set a focus time period.

3. Users can specify websites to block during this time.

4. Modifies the system hosts file to actively block requests to listed websites.


# Improvements to Implement

## Permission Issues on Windows [Runs on WSL2 with sudo privalleges]

1. Running the script as an administrator is required to modify the hosts file.
2. Windows does not allow scripts to edit system files even with elevated privalleges

## Exploring Web Extension Integration

1. Translating the script into a browser extension may provide a more seamless blocking experience.

# Installation & Usage

1. Ensure you have Python installed.

2. Run the script with administrator privileges.

3. Follow prompts to enter websites and focus time.

4. The script will block websites until the focus period ends.

