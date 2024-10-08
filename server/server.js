const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Attach Socket.IO to the server

// Serve a static HTML page (optional)
// css is supposed 
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Listen for client connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for custom events (e.g., when a ticket is updated)
  socket.on('update-ticket', (ticket) => {
    console.log('Ticket update received:', ticket);

    // Broadcast the update to all connected clients
    io.emit('ticket-updated', ticket);
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

});

// Start the server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

