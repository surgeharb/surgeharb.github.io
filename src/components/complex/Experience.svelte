<script>
	import Card from '../simple/Card.svelte';
	import TabView from '../simple/TabView.svelte';
	import Companies from './Tabs/Companies.svelte';
	import Projects from './Tabs/Projects.svelte';
	import Skills from './Tabs/Skills.svelte';
</script>

<Card>
	<TabView
		tabs={[
			{ name: 'Projects', component: Projects },
			{ name: 'Skills', component: Skills },
			{ name: 'Companies', component: Companies }
		]}
	/>
</Card>
