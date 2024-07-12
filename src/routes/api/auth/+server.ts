import { json, type RequestEvent, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (e: RequestEvent) => {
    const requestBody = e.request.body
    return json({posted: requestBody});
};