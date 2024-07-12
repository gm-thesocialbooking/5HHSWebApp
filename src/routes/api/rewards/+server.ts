import { json, type RequestEvent, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (e: RequestEvent) => {
    return json({points: 500});
};