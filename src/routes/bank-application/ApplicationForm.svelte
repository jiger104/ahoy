<script>
	import { focusTrap, ProgressRadial } from '@skeletonlabs/skeleton';
	import { clsx } from 'clsx';
	import { enhance } from '$app/forms';
	import { toast } from 'svelte-french-toast';

	let submitted = false;

	export let applicationResult = {};

	const handleSubmit = () => {
		submitted = true;
		return async ({ result, update }) => {
			if (result.status === 200 && result.data.outcome) {
				applicationResult = result.data;
			} else {
				console.log(result);
				toast.error('Sorry an unknown error occured, please try again later');
			}
			await update({ reset: false });
		};
	};
</script>

<form id="applicationForm" method="post" use:focusTrap={true} use:enhance={handleSubmit}>
	<div class="-mx-3 mb-4  md:flex">
		<div class="mb-6 px-3 md:mb-0 md:w-1/2">
			<label
				class="mb-2 block text-xs font-bold uppercase tracking-wide text-accent-200"
				for="grid-first-name"
			>
				First Name
			</label>
			<input
				class="bg-grey-lighter border-red mb-3 block w-full appearance-none rounded border px-4 py-3 text-accent-200"
				id="grid-first-name"
				name="firstName"
				placeholder="Jane"
				required
				type="text"
			/>
		</div>
		<div class="px-3 md:w-1/2">
			<label
				class="mb-2 block text-xs font-bold uppercase tracking-wide text-accent-200"
				for="grid-last-name"
			>
				Last Name
			</label>
			<input
				class="bg-grey-lighter border-grey-lighter block w-full appearance-none rounded border px-4 py-3 text-accent-200"
				id="grid-last-name"
				name="lastName"
				placeholder="Doe"
				required
				type="text"
			/>
		</div>
	</div>
	<div class="-mx-3 mb-4 md:flex">
		<div class="px-3 md:w-1/2">
			<label
				class="mb-2 block text-xs font-bold uppercase tracking-wide text-accent-200"
				for="grid-ssn"
			>
				SSN
			</label>
			<input
				class="bg-grey-lighter border-grey-lighter mb-3 block w-full appearance-none rounded border px-4 py-3 text-accent-200"
				id="grid-ssn"
				name="ssn"
				placeholder="123456789"
				pattern="^\d&#123;9&#125;$"
				required
				type="text"
				title="SSN should be 9 digits with no dashes"
			/>
		</div>
		<div class="px-3 md:w-1/2">
			<label
				class="mb-2 block text-xs font-bold uppercase tracking-wide text-accent-200"
				for="grid-dob"
			>
				Date of Birth
			</label>
			<input
				class="bg-grey-lighter border-grey-lighter mb-3 block w-full appearance-none rounded border px-4 py-3 text-accent-200"
				id="grid-dob"
				max={new Date().toISOString().split('T')[0]}
				name="dob"
				required
				type="date"
			/>
		</div>
	</div>
	<div class="-mx-3 mb-4 md:flex">
		<div class="px-3 md:w-full">
			<label
				class="mb-2 block text-xs font-bold uppercase tracking-wide text-accent-200"
				for="grid-email"
			>
				Email
			</label>
			<input
				class="bg-grey-lighter border-grey-lighter mb-3 block w-full appearance-none rounded border px-4 py-3 text-accent-200"
				id="grid-email"
				name="email"
				placeholder="jane@doe.com"
				required
				type="email"
			/>
		</div>
	</div>
	<div class="-mx-3 mb-4 md:flex">
		<div class="px-3 md:w-1/2">
			<label
				class="mb-2 block text-xs font-bold uppercase tracking-wide text-accent-200"
				for="grid-email"
			>
				Address line 1
			</label>
			<input
				class="bg-grey-lighter border-grey-lighter mb-3 block w-full appearance-none rounded border px-4 py-3 text-accent-200"
				id="grid-address-line-1"
				name="addressLine1"
				placeholder="123 Ahoy Ave"
				required
				type="text"
			/>
		</div>
		<div class="px-3 md:w-1/2">
			<label
				class="mb-2 block text-xs font-bold uppercase tracking-wide text-accent-200"
				for="grid-email"
			>
				Address line 2
			</label>
			<input
				class="bg-grey-lighter border-grey-lighter mb-3 block w-full appearance-none rounded border px-4 py-3 text-accent-200"
				id="grid-address-line-2"
				name="addressLine2"
				placeholder="Apt 321"
				required
				type="text"
			/>
		</div>
	</div>
	<div class="-mx-3 mb-4 md:flex">
		<div class="mb-4 px-3 md:mb-0 md:w-1/2">
			<label
				class="mb-2 block text-xs font-bold uppercase tracking-wide text-accent-200"
				for="grid-city"
			>
				City
			</label>
			<input
				class="bg-grey-lighter border-grey-lighter block w-full appearance-none rounded border px-4 py-3 text-accent-200"
				id="grid-city"
				name="city"
				placeholder="New York"
				required
				type="text"
			/>
		</div>
		<div class="px-3 md:w-1/2">
			<label
				class="mb-2 block text-xs font-bold uppercase tracking-wide text-accent-200"
				for="grid-state"
			>
				State
			</label>
			<input
				class="bg-grey-lighter border-grey-lighter block w-full appearance-none rounded border px-4 py-3 text-accent-200"
				id="grid-state"
				name="state"
				maxlength="2"
				pattern="^[a-zA-Z]&#123;2&#125;$"
				required
				placeholder="NY"
				type="text"
				title="State should be in 2 letter format e.g. TX"
			/>
		</div>
		<div class="px-3 md:w-1/2">
			<label
				class="mb-2 block text-xs font-bold uppercase tracking-wide text-accent-200"
				for="grid-zip"
			>
				Zip
			</label>
			<input
				class="bg-grey-lighter border-grey-lighter block w-full appearance-none rounded border px-4 py-3 text-accent-200"
				id="grid-zip"
				maxlength="5"
				name="zip"
				pattern="\d*"
				placeholder="90210"
				required
				type="text"
			/>
		</div>
		<div class="px-3 md:w-1/2">
			<label
				class="mb-2 block text-xs font-bold uppercase tracking-wide text-accent-200"
				for="grid-country"
			>
				Country
			</label>
			<input
				class="bg-grey-lighter border-grey-lighter mb-3 block w-full appearance-none rounded border px-4 py-3 text-accent-200"
				disabled
				id="grid-country"
				name="country"
				type="text"
				value="US"
			/>
		</div>
	</div>

	<div
		class={clsx(
			'h-12 w-1/2 md:flex',
			'mx-auto  rounded-full',
			!submitted ? 'bg-primary-500' : 'bg-primary-400'
		)}
	>
		{#if !submitted}
			<button class="btn btn-lg w-full p-2 font-bold text-white">Submit</button>
		{:else}
			<ProgressRadial
				class="mx-auto my-auto w-8"
				track="stroke-primary"
				stroke="150"
				meter="stroke-white"
			/>
		{/if}
	</div>
</form>
