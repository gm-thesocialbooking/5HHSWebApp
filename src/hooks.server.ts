import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { handleClerk } from '$lib/server'
import { SECRET_CLERK_KEY } from '$env/static/private'

const publicPaths = ['sign-in', 'sign-up'];

// protect all paths except for explicit public paths (e.g. sign in and sign up)
function isPublicPath(url: URL){
    const currentPath = new URL(url)?.pathname?.toLowerCase();
    return publicPaths.some(path => currentPath.includes(path));
}

export const handle: Handle = sequence(
	handleClerk(SECRET_CLERK_KEY, {
		debug: true,
		protectedPaths: [({ url }) => !isPublicPath(url)],
		signInUrl: '/sign-in',
	})
)