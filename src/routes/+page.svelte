<script lang="ts">
	function testAuthEndpoint(user: string) {
		fetch("./api/auth", {
			method: "POST",
			body: JSON.stringify({ name: user }),
		});
	}

	function testEducationEndpoint() {
		fetch("./api/education", {
			method: "GET",
		});
	}

	function testProfileEndpoint() {
		fetch("./api/profile", {
			method: "GET",
		});
	}

	function testRewardsEndpoint() {
		fetch("./api/rewards", {
			method: "GET",
		});
	}
</script>

<h1>Home</h1>

<button on:click={() => testAuthEndpoint("Bob Ross")}>
	Test Auth Endpoint
</button>
<button on:click={() => testEducationEndpoint()}>
	Test Education Endpoint
</button>
<button on:click={() => testProfileEndpoint()}> Test Profile Endpoint </button>
<button on:click={() => testRewardsEndpoint()}> Test Rewards Endpoint </button>
