<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		eyebrow?: string;
		title?: string;
		description?: string;
		children?: Snippet;
	};

	let { id, eyebrow, title, description, children }: Props = $props();
</script>

<section {id} class="space-y-3">
	{#if eyebrow}
		<p class="font-display text-secondary text-xs tracking-[0.3em] uppercase">
			{eyebrow}
		</p>
	{/if}

	{#if title}
		<h2
			class="font-display text-main text-2xl font-semibold leading-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)] sm:text-3xl"
		>
			{title}
		</h2>
	{/if}

	{#if description}
		<p class="text-main/85 max-w-xl text-sm sm:text-base">
			{description}
		</p>
	{/if}

	<div class="pt-3">
		{@render children?.()}
	</div>
</section>
