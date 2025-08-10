<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <!-- Header -->
    <header class="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              <span class="text-sm font-medium">Back to Home</span>
            </NuxtLink>
            <div class="w-1 h-4 bg-gray-300 rounded-full"></div>
            <h1 class="text-xl font-bold text-gray-900">Sign In</h1>
          </div>
          <div class="flex items-center space-x-2 text-sm text-gray-500">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Secure</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-6 py-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Sign in to your account</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome back! Please sign in to access your dashboard and continue your work.
        </p>
      </div>

      <div class="flex justify-center">
        <div class="w-full max-w-md">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div v-if="errorMessage" class="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ errorMessage }}
                </div>
              </div>
              
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    required
                    :class="[
                      'w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white',
                      emailError ? 'border-red-300' : 'border-gray-200'
                    ]"
                    :aria-invalid="emailError ? 'true' : 'false'"
                    :aria-describedby="emailError ? 'email-error' : ''"
                    placeholder="Enter your email"
                    @blur="validateEmail"
                  />
                  <p v-if="emailError" id="email-error" class="mt-1 text-sm text-red-600">
                    {{ emailError }}
                  </p>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    id="password"
                    v-model="form.password"
                    type="password"
                    autocomplete="current-password"
                    required
                    :class="[
                      'w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white',
                      passwordError ? 'border-red-300' : 'border-gray-200'
                    ]"
                    :aria-invalid="passwordError ? 'true' : 'false'"
                    :aria-describedby="passwordError ? 'password-error' : ''"
                    placeholder="Enter your password"
                    @blur="validatePassword"
                  />
                  <p v-if="passwordError" id="password-error" class="mt-1 text-sm text-red-600">
                    {{ passwordError }}
                  </p>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    v-model="form.rememberMe"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                  <NuxtLink to="/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </NuxtLink>
                </div>
              </div>

              <button
                type="submit"
                :disabled="loading"
                class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span v-if="loading" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
                <span v-else class="flex items-center justify-center">
                  Sign In
                  <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                  </svg>
                </span>
              </button>

              <div class="text-center">
                <p class="text-sm text-gray-600">
                  Don't have an account?
                  <NuxtLink to="/signup" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Create one here
                  </NuxtLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white/50 backdrop-blur border-t border-gray-100 mt-16">
      <div class="max-w-6xl mx-auto px-6 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div class="flex items-center space-x-2 mb-2 md:mb-0">
            <span>Work with AI</span>
            <div class="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Secure Login</span>
          </div>
          <div class="text-xs text-gray-400">
            Your security is our priority
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const form = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const loading = ref(false)
const errorMessage = ref('')
const emailError = ref('')
const passwordError = ref('')

const validateEmail = () => {
  if (!form.email) {
    emailError.value = 'Email is required'
    return false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    emailError.value = 'Please enter a valid email address'
    return false
  }
  
  emailError.value = ''
  return true
}

const validatePassword = () => {
  if (!form.password) {
    passwordError.value = 'Password is required'
    return false
  }
  
  if (form.password.length < 6) {
    passwordError.value = 'Password must be at least 6 characters'
    return false
  }
  
  passwordError.value = ''
  return true
}

const validateForm = () => {
  const isEmailValid = validateEmail()
  const isPasswordValid = validatePassword()
  return isEmailValid && isPasswordValid
}

const handleSubmit = async () => {
  if (!validateForm()) return
  
  loading.value = true
  errorMessage.value = ''
  
  try {
    // TODO: Replace with actual authentication service
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock authentication logic
    if (form.email === 'test@example.com' && form.password === 'password') {
      // Success - redirect to dashboard
      await navigateTo('/')
    } else {
      throw new Error('Invalid email or password')
    }
  } catch (error) {
    errorMessage.value = error.message || 'An error occurred. Please try again.'
  } finally {
    loading.value = false
  }
}

// Set page title
useHead({
  title: 'Sign In - Work with AI'
})
</script>