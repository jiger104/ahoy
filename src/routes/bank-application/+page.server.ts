import { invalid, type Actions } from '@sveltejs/kit';
import { ALLOY_BASE_URL, ALLOY_WORKFLOW_SECRET, ALLOY_WORKFLOW_TOKEN } from '$env/static/private';

/** @type {import("./$types").Actions} */
export const actions: Actions = {
	default: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());
		// const data = {
		// 	firstName: 'John',
		// 	lastName: 'review',
		// 	email: 'john.doe@example.com',
		// 	dob: '1985-01-23',
		// 	addressLine1: '1717 E Test St',
		// 	addressLine2: 'Unit 313',
		// 	city: 'Richmond',
		// 	state: 'VA',
		// 	ssn: '123456789',
		// 	zip: '23220',
		// 	country: 'US'
		// };
		const url = ALLOY_BASE_URL + 'evaluations';
		const headers = {
			'Content-Type': 'application/json',
			Authorization:
				'Basic ' +
				Buffer.from(ALLOY_WORKFLOW_TOKEN + ':' + ALLOY_WORKFLOW_SECRET).toString('base64')
		};
		const body = JSON.stringify({
			name_first: data.firstName,
			name_last: data.lastName,
			email_address: data.email,
			birth_date: data.dob,
			address_line_1: data.addressLine1,
			address_line_2: data.addressLine2,
			address_city: data.city,
			address_state: data.state.toString().toUpperCase(),
			document_ssn: data.ssn,
			address_postal_code: data.zip,
			address_country_code: 'US'
		});
		const response = await fetch(url, { method: 'POST', headers, body });
		const responseBody = await response.json();
		const outcome = responseBody.summary?.outcome || null;
		console.log(responseBody);
		if (!response.ok || !outcome) {
			const message = `An error has occured: ${response.status}`;
			return invalid(400, { message });
		} else {
			return { data, outcome };
		}
	}
};
