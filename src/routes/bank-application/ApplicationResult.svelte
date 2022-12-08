<script>
	export let applicationResult;
</script>

{#if applicationResult.outcome === 'Approved'}
	<h2>
		Congratulations {applicationResult.data.firstName}, your application has been approved! 🎉🎉🎉
	</h2>
{:else if applicationResult.outcome === 'Manual Review'}
	<h2>
		Thanks for submitting your application {applicationResult.data.firstName} , we’ll be in touch shortly
	</h2>
{:else if applicationResult.outcome === 'Denied'}
	<h2>Sorry {applicationResult.data.firstName} your application was not successfull</h2>
{/if}
