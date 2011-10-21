JSBoilerplate
========================
JSBoilerplate is a collection of scripts you can use when starting a project form scratch.
JSBoilerplate is meant work with the "separation of concerns" principle by using the Mediator pattern.

About the Mediator
------------------------
JSBoilerplate is based on the Mediator pattern. 
The Mediator object acts as a proxy through which javascript classes can communicate.
Classes can subscribe to events that are broadcasted through the Mediator. 
Each class can broadcast whatever. All the subscribed classes will be called with the data that the broadcaster send along with the broadcast.

Install and build scripts
------------------------
JSBoilerplate comes with an installer that creates you a 'library' folder and adds your namespace to the files.
The build script combines and compresses all Javascript files in the 'library' directory.
Both linux (also for osx) and powershell scripts have been included.