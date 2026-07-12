import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;

    onModuleInit() {
        this.isConnected = true;
        console.log('DatabaseService connected!');
    }

    onApplicationShutdown(signal?: string) {
        this.isConnected = false;
        console.log(`DatabaseService disconnected! Signal: ${signal}`);
    }

    getStatus() {
        return this.isConnected ? 'Connected' : 'Disconnected';
    }
}
