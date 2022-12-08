<script>
	import ApplicationForm from './ApplicationForm.svelte';
	import { Divider, GradientHeading } from '@skeletonlabs/skeleton';
	import ApplicationResult from './ApplicationResult.svelte';

	let applicationResult = {};
	$: applicationResult;
</script>

<div
	class="min-h-3/4 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl shadow-black"
>
	<div class="flex h-full flex-col  gap-y-4 md:flex">
		<div class="mb-auto flex  flex-col items-center justify-start gap-y-4  pt-8 md:flex">
			<GradientHeading
				class="uppercase"
				direction="bg-gradient-to-r"
				from="from-primary-500"
				tag="h1"
				to="to-accent-500"
			>
				Ahoy Application Form
			</GradientHeading>
			<Divider borderWidth="border-t-4 w-3/4" />
		</div>

		<div class="flex h-full flex-col items-center justify-center  px-6 py-4 md:flex">
			{#if Object.keys(applicationResult).length === 0}
				<ApplicationForm bind:applicationResult />
			{:else}
				<ApplicationResult {applicationResult} />
			{/if}
		</div>
	</div>
</div>
