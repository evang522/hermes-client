# Hermes
## A Messenging Client - Inspired by Slack

Hermes is a data-persistent, room-based, multi-channel, realtime chat client. It is modelled after Slack. 

There are, however, a few differences between Hermes and Slack. The concept of user accounts in Slack is Room/Workspace based. The user accounts in Hermes are App-wide. 

So, users have multiple rooms associated with them instead of one person being able to have one user account per room. 


### 
Whereas one might access a workspace with slack at my-workspace.slack.com, with hermes, one accesses their room by visiting hermes-url.com/my-room.

The plans for Hermes are to implement all of the basic functionality of Slack:

Those which are starred I have already released as features! 

* Rooms/Workspaces * 
* Channels with a Defined set of Members 
* Private Channels
* Threads within Messages
* Realtime Chat * 


# Hermes Tech Stack

Hermes is served by a sleek REST API built with:

* Node.js
* Express.js
* MongoDB
* Socket.io
* Mongoose
* mLab Database


# Hermes API Resources
Link to Server Repo [Here.](https://github.com/evang522/chatapp-server)

## Users
* `GET /users/:id`
  * Returns a user with a specific ID
* `POST /users`
  * Create a new user with fields in req body: name, password, email, handle.



## Messages
* `GET /messages?channelId=channelId`
  * Returns all messages within a specific channel.
*`POST /messages?channelId=channelId`
  * Creates a new message associated with the room, associated with a specific channel Id.
* `PUT /messages/:id`
  * Edits a message body, provided a message ID.
* `DELETE /messages/:id`
  * Delete a message with a specified ID


## Rooms
* `GET /rooms`
  * Gets info from the request user key (after successful authentication) and gets the user ID from the user.  It returns only rooms associated with the user.
* `GET /rooms/:id`
  * Returns a room with a specified ID.
*` POST /rooms`
  * Creates a new room with required fields: urlname, title
*` PUT /rooms/:id`
  * Accepts an argument in requestBody called 'requestType'. If Request type is 'add Channel', a channel will be appended to a channels array within the room with a specified title.
  * If the request type is removeChannel, the channel with a specified name is removed'
* `DELETE /rooms/:id`
  * Deletes a room with a specified ID.