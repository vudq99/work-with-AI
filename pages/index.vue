<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <!-- Header -->
    <header class="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Work with AI
            </h1>
            <p class="text-sm text-gray-600 mt-1">Cloud Application Gateway</p>
          </div>
          <div class="flex items-center space-x-2 text-sm text-gray-500">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Online</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-6 py-8">
      <!-- Welcome Section -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
        </div>
        
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Feature <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Listings</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Access your cloud application modules from this central hub. Each feature is designed for seamless team collaboration.
        </p>
      </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

        <!-- Contact Us Feature -->
        <NuxtLink 
          to="/contact"
          class="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-indigo-200 transition-all duration-300 overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              Professional contact form with team communication channels and support integration.
            </p>
            
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                Ready
              </span>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Login Feature -->
        <NuxtLink 
          to="/login"
          class="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-indigo-200 transition-all duration-300 overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Login</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              Login site for registered users. You can also sign up from here.
            </p>
            
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                Ready
              </span>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Placeholder Card 1 -->
        <div class="group relative bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 overflow-hidden opacity-60">
          <div class="relative p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
              <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
            
            <h3 class="text-lg font-semibold text-gray-500 mb-2">Feature Module</h3>
            <p class="text-gray-400 text-sm mb-4">
              New features will be added here as development progresses.
            </p>
            
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                Coming Soon
              </span>
              <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Placeholder Card 2 -->
        <div class="group relative bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 overflow-hidden opacity-60">
          <div class="relative p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
              <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
            
            <h3 class="text-lg font-semibold text-gray-500 mb-2">Feature Module</h3>
            <p class="text-gray-400 text-sm mb-4">
              New features will be added here as development progresses.
            </p>
            
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                Coming Soon
              </span>
              <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="text-2xl font-bold text-gray-900 mb-1">1</div>
            <div class="text-sm text-gray-600">Active Features</div>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div class="text-2xl font-bold text-gray-900 mb-1">∞</div>
            <div class="text-sm text-gray-600">Possibilities</div>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="text-2xl font-bold text-gray-900 mb-1">24/7</div>
            <div class="text-sm text-gray-600">Available</div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white/50 backdrop-blur border-t border-gray-100 mt-16">
      <div class="max-w-6xl mx-auto px-6 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div class="flex items-center space-x-2 mb-2 md:mb-0">
            <span>Powered by</span>
            <span class="font-semibold text-gray-700">Nuxt 3</span>
            <div class="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Built for teams</span>
          </div>
          <div class="text-xs text-gray-400">
            Last updated: {{ new Date().toLocaleDateString() }}
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Page meta
useHead({
  title: 'Home'
})

// Ensure consistent rendering
onMounted(() => {
  // Force a repaint to ensure styles are applied
  document.body.offsetHeight
})
</script>