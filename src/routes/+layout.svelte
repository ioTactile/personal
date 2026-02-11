<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import myself from '$lib/assets/myself.png';

	let { children, data } = $props<{
		children: unknown;
		data: {
			locale: string;
			messages: Record<string, unknown>;
		};
	}>();

	const locale = $derived(data.locale);
	const messages = $derived(data.messages);
	const app = $derived((messages?.app ?? {}) as { title?: string; description?: string });
	const nav = $derived(
		(messages?.nav ?? {}) as {
			home?: string;
			projects?: string;
			about?: string;
			contact?: string;
		}
	);
	const layout = $derived(
		(messages?.layout ?? {}) as {
			name?: string;
			role?: string;
			badge?: string;
			footer?: string;
			lang_switch_label?: string;
			lang_switch_fr?: string;
			lang_switch_en?: string;
		}
	);

	const langQuery = $derived(`?lang=${locale}`);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{#if app.title}
		<title>{app.title}</title>
	{/if}
	{#if app.description}
		<meta name="description" content={app.description} />
	{/if}
	<meta name="language" content={locale} />
</svelte:head>

<div class="bg-body font-body min-h-screen text-main">
	<div class="relative isolate">
		<div
			class="pointer-events-none fixed inset-0 -z-10 bg-linear-to-b from-surface/80 to-bg-body/80"
			aria-hidden="true"
		></div>

		<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
			<div
				class="rounded-lg border-2 border-main/80 bg-surface/90 shadow-[8px_8px_0px_rgba(43,42,42,0.8)]"
			>
				<header
					class="flex items-center justify-between gap-4 border-b-2 border-main/70 bg-primary/10 px-4 py-3 sm:px-6 sm:py-4"
				>
					<div class="flex items-center gap-3">
						<div
							class="h-10 w-10 overflow-hidden rounded-full border-2 border-main shadow-[4px_4px_0px_rgba(43,42,42,0.8)]"
						>
							<img
								src={myself}
								alt={layout.name ?? 'Photo de profil'}
								class="h-full w-full object-cover"
							/>
						</div>
						<div class="leading-tight">
							<p class="font-display text-xs tracking-[0.2em] text-secondary uppercase">
								{layout.name ?? 'Jordan Biesmans'}
							</p>
							<p class="text-xs text-main/80 sm:text-sm">
								{layout.role ?? 'Développeur web — Next.js, React, Node.js, TypeScript'}
							</p>
						</div>
					</div>

					<div class="flex items-center gap-3">
						<nav class="font-display hidden items-center gap-4 text-xs uppercase md:flex">
							<a
								href={`/${langQuery}`}
								class="rounded border border-transparent px-3 py-1 transition hover:border-secondary hover:bg-secondary/10"
							>
								{nav.home ?? 'Accueil'}
							</a>
							<a
								href={`/${langQuery}#projects`}
								class="rounded border border-transparent px-3 py-1 transition hover:border-secondary hover:bg-secondary/10"
							>
								{nav.projects ?? 'Projets'}
							</a>
							<a
								href={`/${langQuery}#about`}
								class="rounded border border-transparent px-3 py-1 transition hover:border-secondary hover:bg-secondary/10"
							>
								{nav.about ?? 'À propos'}
							</a>
							<a
								href={`/${langQuery}#contact`}
								class="rounded border border-transparent px-3 py-1 transition hover:border-secondary hover:bg-secondary/10"
							>
								{nav.contact ?? 'Contact'}
							</a>
						</nav>

						<div class="inline-flex overflow-hidden rounded border border-main/60 bg-surface/80">
							<a
								href="?lang=fr"
								class={`px-2 py-1 transition ${
									locale === 'fr' ? 'bg-secondary text-surface' : 'text-main hover:bg-secondary/10'
								}`}
							>
								{layout.lang_switch_fr ?? 'FR'}
							</a>
							<a
								href="?lang=en"
								class={`border-l border-main/40 px-2 py-1 transition ${
									locale === 'en' ? 'bg-secondary text-surface' : 'text-main hover:bg-secondary/10'
								}`}
							>
								{layout.lang_switch_en ?? 'EN'}
							</a>
						</div>
					</div>
				</header>

				<main class="px-4 py-6 sm:px-6 sm:py-8">
					{@render children()}
				</main>

				<footer
					class="flex flex-col justify-between gap-1 border-t-2 border-main/60 bg-surface/90 px-4 py-3 text-[11px] text-main/70 sm:flex-row sm:gap-3 sm:px-6 sm:py-4 sm:text-xs"
				>
					<p class="font-display tracking-[0.18em] uppercase">
						{layout.badge ?? 'Frontend / Next.js / React'}
					</p>
					<p>
						© {new Date().getFullYear()} Jordan Biesmans — {layout.footer ??
							'Développeur web spécialisé frontend.'}
					</p>
				</footer>
			</div>
		</div>
	</div>
</div>
