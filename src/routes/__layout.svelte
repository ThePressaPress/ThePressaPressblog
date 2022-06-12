<script>
	import '../app.css';
  import 'highlight.js/styles/github-dark.css'
  import i from '$lib/info';
</script>

<svelte:head>
  <title>{i.blogname}</title>
</svelte:head>

<div class="flex-col flex h-screen">
  <nav class="bg-gray-100 sticky">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <!-- <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"> -->
            <a href="/" class="text-gray-800 h-8 w-auto">{i.blogname}</a>
          </div>
        </div>
        <div class="flex-1 flex transition-all justify-center px-2 lg:ml-6 lg:justify-end">
          <div class="max-w-lg transition-all w-full lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <!-- Heroicon name: solid/search -->
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" autocomplete="off" type="search">
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  <main class="flex-grow">
    <slot />
  </main>
</div>

