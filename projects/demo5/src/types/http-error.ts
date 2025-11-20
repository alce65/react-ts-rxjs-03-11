export class HttpError extends Error {
    status: number;
    statusText: string;
    constructor(
        status: number,
        statusText: string,
        message: string,
        cause?: Error,
        options?: ErrorOptions
    ) {
        super(message, { cause, ...options });
        this.name = 'HttpError';
        this.status = status;
        this.statusText = statusText;
    }
}
