<script lang="ts">
	import UserButton from "clerk-sveltekit/client/UserButton.svelte";
	import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
	import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
</script>

<SignedIn>
	<UserButton afterSignOutUrl="/" />
</SignedIn>
<SignedOut>
	<a href="/sign-in">Sign in</a> <span>|</span> <a href="/sign-up">Sign up</a>
</SignedOut>

<slot></slot>
