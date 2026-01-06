<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero Section -->
    <section class="bg-indigo-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
        <p class="text-lg md:text-xl">We would love to hear from you! Reach out with any questions.</p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-12 flex-1 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">
          <h2 class="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name -->
            <div>
              <label class="block mb-2 font-semibold">Name</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block mb-2 font-semibold">Email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <!-- Subject -->
            <div>
              <label class="block mb-2 font-semibold">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="Subject"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <!-- Message -->
            <div>
              <label class="block mb-2 font-semibold">Message</label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Write your message..."
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
              <button
                type="submit"
                class="px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <p v-if="successMessage" class="mt-4 text-green-600 font-semibold text-center">
            {{ successMessage }}
          </p>
        </div>
      </div>
    </section>

    <!-- Map & Contact Info Section -->
    <section class="py-12">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div class="flex flex-col justify-center space-y-4">
          <h2 class="text-3xl font-bold mb-2">Our Contact Information</h2>
          <p>123 Education Street, Phnom Penh, Cambodia</p>
          <p>Email: info@schoolmanagement.com</p>
          <p>Phone: +855 123 456 789</p>
        </div>

        <!-- Google Map Embed -->
        <div class="h-64 md:h-full rounded-lg overflow-hidden shadow">
          <iframe
            class="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.602508892868!2d104.9056784152604!3d11.55659829169402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095139d58fcb47%3A0xa15c6db0daaa3f13!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            style="border:0;"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default defineComponent({
  name: "ContactPage",
  setup() {
    const form = reactive<ContactForm>({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const successMessage = ref<string>("");

    const submitForm = (): void => {
      console.log("Form submitted:", form);

      // Reset form
      form.name = "";
      form.email = "";
      form.subject = "";
      form.message = "";

      // Show success message
      successMessage.value = "Your message has been sent successfully!";
      setTimeout(() => (successMessage.value = ""), 5000);
    };

    return {
      form,
      submitForm,
      successMessage,
    };
  },
});
</script>

<style scoped>
/* Optional smooth hover / shadow transitions */
</style>
