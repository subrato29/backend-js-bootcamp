Install and running MongoDB on Mac OS
===============================================

Install
```
Tap the `MongoDB Homebrew Tap`to download the official Homebrew formula for MongoDB and the Database Tools, by running the following command in your macOS Terminal:
    - brew tap mongodb/brew

To install MongoDB, run the following command in your macOS Terminal application
    - brew install mongodb-community@6.0


```

Run MongoDB Community Edition
```
To run MongoDB (i.e. the mongod process) as a macOS service, run:
    - brew services start mongodb-community@6.0

To stop a mongod running as a macOS service, use the following command as needed:
    - brew services stop mongodb-community@6.0

```

To verify that MongoDB is running, perform one of the following:
```
If you started MongoDB as a macOS service
    - brew services list
You should see the service mongodb-community listed as started.


If you started MongoDB manually as a background process:
    - ps aux | grep -v grep | grep mongod
You should see your mongod process in the output.

```

Connect and Use MongoDB, use the below command from terminal
```
mongosh

```

Ref:
```
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
https://www.youtube.com/watch?v=god1igQ9QXQ
```