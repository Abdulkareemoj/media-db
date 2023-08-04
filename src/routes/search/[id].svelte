<script>export async function load({ fetch, params }) {
		const res = fetch(`//add req`);
		const data = await res.json();
		if (res.ok) {
			return {
				props: { popular: data.results }
			};
		}
	}</script>