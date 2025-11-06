
// Event Manager: Publisher

export class EventManager {
    private listeners: Map<string, Listener[]> = new Map<string, Listener[]>();

    public subscribe(eventType: string, listener: Listener): void {
        if (!this.listeners.has(eventType)) {
            this.listeners.set(eventType, []);
        }
        this.listeners.get(eventType)?.push(listener);
    }

    public unsubscribe(eventType: string, listener: Listener): void {
        this.listeners.get(eventType)?.filter((l) => l !== listener);
    }

    public emit(eventType: string, data: unknown): void {
        this.listeners
            .get(eventType)
            ?.forEach((listener) => listener.update(data));
    }
}

// Listeners / Subscribers Interface

export interface Listener {
    update(data: unknown): void;
}
