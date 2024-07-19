import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { handleClerk } from 'clerk-sveltekit/server'
// If there is an error with the import, try building the project
import { SECRET_CLERK_AUTH } from '$env/static/private'

export const handle: Handle = sequence(
	handleClerk(SECRET_CLERK_AUTH, {
		debug: true,
		protectedPaths: ['/admin'],
		signInUrl: '/sign-in',
	})
)