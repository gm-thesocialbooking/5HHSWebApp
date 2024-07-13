import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({request}) => {
    const { name } = await request.json()
    return json({posted: name});
};