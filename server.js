const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

let clients = new Set();

// When a new connection is established
server.on("connection", ws => {
    console.log("New client connected");
    clients.add(ws);

    // Handle incoming messages
    ws.on("message", message => {
        console.log(`Received message: ${message}`);
        // Broadcast the message to all other clients
        clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Handle when a connection is closed
    ws.on("close", () => {
        console.log("Client disconnected");
        clients.delete(ws);  // Remove the client from the set
    });

    // Handle errors
    ws.on("error", error => {
        console.error("WebSocket error: ", error);
        // Optionally handle specific errors here
    });

    // Optionally handle client timeouts or other issues here (e.g., ping/pong)
    ws.on('pong', () => {
        console.log("Received pong from client");
    });

    // Send a ping periodically to keep the connection alive
    const pingInterval = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.ping();
        }
    }, 30000); // Ping every 30 seconds

    // Clear the ping interval when the connection closes
    ws.on("close", () => {
        clearInterval(pingInterval);
    });
});

// Server error handling
server.on("error", error => {
    console.error("Server error: ", error);
});

// Log server running status
server.on("listening", () => {
    console.log("WebSocket server running on ws://localhost:8080");
});

// Graceful shutdown (Optional)
process.on("SIGINT", () => {
    console.log("Shutting down WebSocket server...");
    server.clients.forEach(client => client.close());
    server.close(() => {
        console.log("Server closed.");
        process.exit(0);
    });
});
