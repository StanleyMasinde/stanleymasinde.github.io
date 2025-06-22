<script setup lang="ts">
import { z } from 'zod'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

// Local state
const isSuccess = ref < Boolean > (false)

const schema = toTypedSchema(z.object({
  name: z
    .string({ message: 'Name must be text' }) // fallback for non-string
    .trim()
    .min(1, 'Your name is required.')
    .min(2, 'Please enter your full name.')
    .max(100, 'Your name is too long — 100 characters max.'),

  email: z
    .string({ message: 'Email must be a string' })
    .trim()
    .min(1, 'We need your email to reply.')
    .email('That doesn’t look like a valid email address.'),

  message: z
    .string({ message: 'Message must be text' })
    .trim()
    .min(1, 'Don’t leave this empty — we’d love to hear from you.')
    .min(5, 'A bit more detail would help us respond better.')
    .max(2000, 'Keep it concise — max 2000 characters.'),
}))

const { handleSubmit, isSubmitting, meta } = useForm({ validationSchema: schema })

const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: message, errorMessage: messageError } = useField('message')

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  await $fetch('/contact', {
    method: 'POST',
    body: values,
  })

  isSuccess.value = true
  resetForm()

  setTimeout(() => isSuccess.value = false, 5000)
})
</script>

<template>
  <div>
    <div
      v-if="isSuccess"
      class="rounded-lg border border-green-300 bg-green-50 p-4 text-green-800 flex items-start gap-3 my-2"
    >
      <svg
        class="w-5 h-5 mt-1 text-green-600 shrink-0"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>

      <div>
        <h3 class="font-semibold">
          Message sent!
        </h3>
        <p class="text-sm mt-1">
          Thanks for reaching out — we’ll get back to you soon.
        </p>
      </div>
    </div>

    <!-- Form -->
    <form
      class=""
      @submit.prevent="onSubmit"
    >
      <div>
        <label
          for="name"
          class="block font-semibold mb-1"
        >Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          placeholder="John Doe"
          class="text-input"
          :class="{ 'ring-2 ring-red-500 border-red-500': nameError }"
        >
        <p
          v-if="nameError"
          class="text-sm text-red-500 mt-1"
        >
          {{ nameError }}
        </p>
      </div>

      <div>
        <label
          for="email"
          class="block font-semibold mb-1"
        >Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="john@example.com"
          class="text-input"
          :class="{ 'ring-2 ring-red-500 border-red-500': emailError }"
        >
        <p
          v-if="emailError"
          class="text-sm text-red-500 mt-1"
        >
          {{ emailError }}
        </p>
      </div>

      <div>
        <label
          for="message"
          class="block font-semibold mb-1"
        >Message</label>
        <textarea
          id="message"
          v-model="message"
          rows="5"
          placeholder="Your message..."
          class="text-input resize-none"
          :class="{ 'ring-2 ring-red-500 border-red-500': messageError }"
        />
        <p
          v-if="messageError"
          class="text-sm text-red-500 mt-1"
        >
          {{ messageError }}
        </p>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting || !meta.valid"
        class="bg-tertiary text-white font-semibold px-6 py-2 rounded-lg transition
         hover:bg-tertiary/90
         disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? 'Sending…' : 'Send Message' }}
      </button>
    </form>
  </div>
</template>
