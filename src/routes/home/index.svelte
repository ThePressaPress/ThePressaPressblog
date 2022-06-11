<script lang=ts>
	import i from "$lib/info";
	export let posts: Array<any>;
	const latestpost = posts.slice().sort((a, b) => b.creationdate - a.creationdate)[0]
</script>

<div class="bg-white shadow h-full overflow-hidden sm:rounded-md">
	<ul class="flex h-full flex-col">
	  <li class="px-4 py-4 sm:px-6 text-center">
		<h1 class="text-2xl">{i.blogname}</h1>
		<h2 class="text-lg text-gray-400">By {i.author}</h2>
	  </li>
	  {#if posts.length}
		<li class="px-4 py-4 sm:px-6 text-center flex-grow mx-10">
				<div class="bg-white flex-shrink overflow-hidden shadow rounded-lg">
					<div class="px-4 ml-5 py-5 sm:px-6 text-left">
						Latest Post
					</div>
					<div class="flex flex-row">
						<div class="px-4 py-5 sm:p-6s flex flex-col">
							<span class="text-3xl text-left">
								{latestpost.title}
							</span>
							<span class="text-xs text-left">
								Created {new Date(latestpost.creationdate).toDateString()}
							</span>
						</div>
						<div class="flex-grow px-4 py-5 sm:p-6s flex flex-col">
							<a href="/p/{latestpost.handle}" class="group my-auto ">
								<span class="inline">Read</span>
								<span class="inline transition-transform absolute translate-x-1 group-hover:translate-x-3">&rarr;</span>
							</a>
						</div>
					</div>
				</div>
		</li>
		<li class="px-4 py-4 sm:px-6 text-center flex-grow">
			TODO: List of blog posts
		  </li>
	  {:else}
		<li class="px-4 py-4 sm:px-6 text-center">
			<h4 class="text-lg">No Posts</h4>
		</li>
	  {/if}
	</ul>
</div>
  