import type { HandleClientError } from '@sveltejs/kit'
import { initializeClerkClient } from './lib/client/index'
import { PUBLIC_CLERK_KEY } from '$env/static/public'

initializeClerkClient(PUBLIC_CLERK_KEY, {
	afterSignInUrl: '/admin/',
	afterSignUpUrl: '/admin/',
	signInUrl: '/sign-in',
	signUpUrl: '/sign-up',
})

export const handleError: HandleClientError = async ({ error, event }) => {
	console.error(error, event)
}
