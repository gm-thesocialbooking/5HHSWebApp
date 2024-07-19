import type { HandleClientError } from '@sveltejs/kit'
// To use Clerk components:
import { initializeClerkClient } from 'clerk-sveltekit/client'
// Or for headless mode:
// import { initializeClerkClient } from 'clerk-sveltekit/headless'
// If there is an error with the import, try building the project
import { PUBLIC_CLERK_AUTH } from '$env/static/public'

initializeClerkClient(PUBLIC_CLERK_AUTH, {
	afterSignInUrl: '/admin/',
	afterSignUpUrl: '/admin/',
	signInUrl: '/sign-in',
	signUpUrl: '/sign-up',
})

export const handleError: HandleClientError = async ({ error, event }) => {
	console.error(error, event)
}