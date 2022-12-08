<script>
	export let applicationResult;
	import { Confetti } from 'svelte-confetti';
</script>

{#if applicationResult.outcome === 'Approved'}
	<Confetti />

	<h2>
		Congratulations {applicationResult.data.firstName}, your application has been approved! 🎉🎉🎉
	</h2>
{:else if applicationResult.outcome === 'Manual Review'}
	<h2>
		Thanks for submitting your application {applicationResult.data.firstName} , we’ll be in touch shortly
	</h2>
{:else if applicationResult.outcome === 'Denied'}
	<div class="flex flex-col items-center justify-center gap-y-6">
		<img width="100" height="100" src="sad-face.svg" />
		<h2>Sorry {applicationResult.data.firstName} your application was not successfull</h2>
	</div>
{/if}
