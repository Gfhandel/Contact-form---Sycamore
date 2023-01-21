<template>
  <div id="app">
    <div class="max-w-screen-xl mx-auto">
      <NavBar />

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-3 mt-24">
        <div class="col-span-5 text-center mb-10">
          <h2 class="section-heading">Got a question? Contact Us!</h2>
          <p>Get in touch with us if you have any questions.</p>
        </div>
        <div
          class="
            col-span-5
            lg:col-span-2
            mb-10
            lg:mb-0
            text-center
            flex
            items-center
          "
        >
          <img src="@/assets/contact.svg" alt="Contact Us" />
        </div>
        <div
          class="bg-white rounded-lg shadow-lg px-8 py-10 col-span-3"
          id="contact"
        >
          <form @submit.prevent="submitForm" ref="submitForm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="mb-5">
                <label for="first-name" class="form-label field-required"
                  >First Name</label
                >
                <input
                  v-model="contactForm.firstName"
                  type="text"
                  id="first-name"
                  class="form-input"
                  required
                  placeholder="First name"
                />
              </div>
              <div class="mb-5">
                <label for="last-name" class="form-label field-required"
                  >Last Name</label
                >
                <input
                  v-model="contactForm.lastName"
                  type="text"
                  id="last-name"
                  class="form-input"
                  required
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="mb-5">
                <label for="email" class="form-label field-required"
                  >Email</label
                >
                <input
                  v-model="contactForm.email"
                  type="email"
                  id="email"
                  class="form-input"
                  required
                  placeholder="Email"
                />
              </div>
              <div class="mb-5">
                <label for="phone-number" class="form-label field-required"
                  >Phone Number</label
                >
                <input
                  v-model="contactForm.phoneNumber"
                  type="tel"
                  id="phone-number"
                  class="form-input"
                  required
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div class="mb-5">
              <label for="state" class="form-label field-required">State</label>
              <select
                id="state"
                required
                class="form-input"
                v-model="contactForm.state"
              >
                <option value="">Select a State</option>
                <option
                  v-for="(key, id) in states"
                  :value="key.state"
                  :key="id"
                >
                  {{ key.state }}
                </option>
              </select>
            </div>
            <div class="mb-5">
              <label for="message" class="form-label field-required"
                >Message</label
              >
              <textarea
                v-model="contactForm.message"
                id="message"
                cols="10"
                rows="3"
                class="form-input"
                required
                placeholder="Message"
              >
              </textarea>
            </div>
            <div class="mb-5">
              <label for="policy" class="form-label field-required">
                <input
                  v-model="contactForm.hasAcceptedPolicy"
                  type="checkbox"
                  id="policy"
                  required
                />
                I agree to the privacy policy
              </label>
              <p class="text-left text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur suscipit quidem possimus ipsa eveniet.
              </p>
            </div>
            <div class="mt-5">
              <button type="submit" class="btn-primary cursor-pointer w-full">
                Send Message
              </button>
              <p v-if="enquiryIsSent" class="p-5 bg-green-100 mt-5 text-center">
                Message sent! We will get back to you shortly.
              </p>
            </div>
          </form>
        </div>
      </div>

      <div class="my-24">
        <div v-if="showEnquiries">
          <div>
            <h2 class="section-heading text-center mb-10">
              Manage Contact Enquiries
            </h2>
            <p
              v-if="enquiryIsDeleted"
              class="p-5 bg-green-100 w-96 mx-auto mt-5 text-center"
            >
              Enquiry has been deleted
            </p>
            <div class="text-right mb-5">
              <button
                @click="toggleEnquiryVisibility"
                class="btn-primary cursor-pointer"
              >
                Hide Enquiries
              </button>
            </div>
            <div>
              <div v-if="enquiries.length" class="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>State</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Message</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(enquiry, index) in enquiries" :key="index">
                      <td>{{ enquiry.state }}</td>
                      <td>{{ enquiry.firstName }}</td>
                      <td>{{ enquiry.lastName }}</td>
                      <td>
                        <a
                          :href="`mailto:${enquiry.email}`"
                          class="text-green-500"
                        >
                          {{ enquiry.email }}
                        </a>
                      </td>
                      <td>
                        <a
                          :href="`tel:${enquiry.phoneNumber}`"
                          class="text-green-500"
                        >
                          {{ enquiry.phoneNumber }}
                        </a>
                      </td>
                      <td>{{ enquiry.message }}</td>
                      <td>
                        <button
                          @click="deleteEnquiry(index)"
                          class="
                            btn-primary
                            cursor-pointer
                            w-full
                            text-sm
                            bg-red-500
                            ml-3
                          "
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <template v-else>
                <div class="text-center">
                  No enquiries added yet! <br />
                  <a
                    href="#contact"
                    class="btn-primary cursor-pointer inline-block"
                  >
                    Add Some!
                  </a>
                </div>
              </template>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="section-heading text-center mb-10">Manage Duplicates</h2>
            <div>
              <div v-if="enquiries.length" class="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>State</th>
                      <th>Full Name</th>
                      <th>Phone Number</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(duplicateEnquiry, index) in duplicateEnquiries"
                      :key="index"
                    >
                      <td>
                        <a
                          :href="`mailto:${duplicateEnquiry.email}`"
                          class="text-green-500"
                        >
                          {{ duplicateEnquiry.email }}
                        </a>
                      </td>
                      <td>{{ duplicateEnquiry.state }}</td>
                      <td>
                        {{
                          `${duplicateEnquiry.firstName} ${duplicateEnquiry.lastName}`
                        }}
                      </td>
                      <td>
                        <a
                          :href="`tel:${duplicateEnquiry.phoneNumber}`"
                          class="text-green-500"
                        >
                          {{ duplicateEnquiry.phoneNumber }}
                        </a>
                      </td>
                      <td>
                        <button
                          @click="deleteEnquiry(index)"
                          class="
                            btn-primary
                            cursor-pointer
                            w-full
                            text-sm
                            bg-red-500
                            ml-3
                          "
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <template v-else>
                <div class="text-center">
                  No enquiries added yet! <br />
                  <a
                    href="#contact"
                    class="btn-primary cursor-pointer inline-block"
                  >
                    Add Some!
                  </a>
                </div>
              </template>
            </div>
          </div>
        </div>

        <div v-else class="text-center">
          <button
            @click="toggleEnquiryVisibility"
            class="btn-primary cursor-pointer"
          >
            Manage Enquiries
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StateJson from "@/models/states";
import SampleEnquiries from "@/models/enquiries";
import NavBar from "@/components/Generics/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },

  data() {
    return {
      contactForm: {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        state: null,
        hasAcceptedPolicy: false,
        message: null,
      },

      states: StateJson,

      enquiries: this.$store.getters.getEnquiries,
      duplicateEnquiries: [],
      duplicateSummary: [],

      // sample data to test with
      // enquiries: SampleEnquiries,

      showEnquiries: false,
      enquiryIsSent: false,
      enquiryIsDeleted: false,
    };
  },

  computed: {},

  watch: {},

  methods: {
    submitForm() {
      let payload = Object.assign({}, this.contactForm);

      this.$store.commit("addEnquiry", payload);

      this.initForm();

      this.enquiryIsSent = true;

      setTimeout(() => {
        this.enquiryIsSent = false;
      }, 5000);

      // sort array of objects
      this.sortArrayObjects();
    },

    async toggleEnquiryVisibility() {
      this.showEnquiries = this.showEnquiries ? false : true;
    },

    deleteEnquiry(index) {
      this.$store.commit("deleteEnquiry", index);

      this.enquiryIsDeleted = true;

      setTimeout(() => {
        this.enquiryIsDeleted = false;
      }, 5000);
    },

    initForm() {
      this.contactForm.firstName = null;
      this.contactForm.lastName = null;
      this.contactForm.email = null;
      this.contactForm.phoneNumber = null;
      this.contactForm.state = null;
      this.contactForm.hasAcceptedPolicy = false;
      this.contactForm.message = null;
    },

    /**
     * Sorts array of objects by email
     *
     * @sortParams object from an array:
     * @return sorted array of objects by email
     */
    sortArrayObjects() {
      this.duplicateEnquiries = this.enquiries;

      this.duplicateEnquiries = this.duplicateEnquiries.sort((obj1, obj2) => {
        let email1 = obj1.email.toLowerCase();
        let email2 = obj2.email.toLowerCase();

        if (email1 > email2) {
          return 1;
        }
        if (email1 < email2) {
          return -1;
        }

        return 0;
      });

      // most occurred to the top (reverse)
      this.duplicateEnquiries.reverse();
    },
  },

  mounted() {},
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: #fbfbfb;
  font-family: "Montserrat", sans-serif !important;
  color: #232020;
  box-sizing: border-box;
}

.field-required:after {
  content: " *";
  color: #ff0000;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
