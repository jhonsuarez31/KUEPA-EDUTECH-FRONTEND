import { Manager, Socket } from 'socket.io-client';

let socket: Socket;

export const connectToServer = (token: string | null) => {

    if (token) {

        const manager = new Manager('http://localhost:3000/socket.io/socket.io.js', {

            extraHeaders: {
                hola: 'mundo',
                authentication: token
            }
        });

        socket?.removeAllListeners();
        socket = manager.socket('/');

        return socket
    }
    return socket


}



