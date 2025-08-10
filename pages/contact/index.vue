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
            <h1 class="text-xl font-bold text-gray-900">Contact Us</h1>
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
      <!-- Page Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or need support? We're here to help. Send us a message and we'll get back to you as soon as possible.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    required
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                  >
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    required
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                  >
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  v-model="form.subject"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white"
                  placeholder="What is this regarding?"
                >
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none bg-gray-50 focus:bg-white"
                  placeholder="Tell us more about your inquiry or how we can help you..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
                <span v-else class="flex items-center justify-center">
                  Send Message
                  <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                </span>
              </button>
            </form>
            
            <!-- Success Message -->
            <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <p class="font-medium">Message sent successfully!</p>
                  <p class="text-sm text-green-600">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Info Sidebar -->
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 text-sm">Email</h4>
                  <p class="text-gray-600 text-sm">hello@workai.com</p>
                  <p class="text-gray-500 text-xs mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 text-sm">Phone</h4>
                  <p class="text-gray-600 text-sm">+1 (555) 123-4567</p>
                  <p class="text-gray-500 text-xs mt-1">Mon-Fri, 9AM-6PM PST</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 text-sm">Office</h4>
                  <p class="text-gray-600 text-sm">123 AI Street<br>Tech City, TC 12345</p>
                  <p class="text-gray-500 text-xs mt-1">Open for appointments</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Quick Support</h3>
            <p class="text-gray-600 text-sm mb-4">
              Need immediate help? Check out our frequently asked questions or browse our documentation.
            </p>
            <div class="space-y-2">
              <button class="w-full text-left px-3 py-2 text-sm text-indigo-700 bg-white rounded-lg hover:bg-indigo-50 transition-colors">
                📚 Documentation
              </button>
              <button class="w-full text-left px-3 py-2 text-sm text-indigo-700 bg-white rounded-lg hover:bg-indigo-50 transition-colors">
                ❓ FAQ
              </button>
              <button class="w-full text-left px-3 py-2 text-sm text-indigo-700 bg-white rounded-lg hover:bg-indigo-50 transition-colors">
                💬 Live Chat
              </button>
            </div>
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
            <span>Contact Support</span>
          </div>
          <div class="text-xs text-gray-400">
            We typically respond within 24 hours
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Page meta
useHead({
  title: 'Contact Us - Work with AI'
})

// Form state
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

// Form submission
const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form and show success
  form.value = { name: '', email: '', subject: '', message: '' }
  showSuccess.value = true
  isSubmitting.value = false
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>