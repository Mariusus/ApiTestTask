<template>
  <div>
    <div id="Detail">
      <div id="containerDetail">
        <div id="gameDetail">
          <i class="pi check" name="ticket-alt" scale="1.8" color="#e5e5e5" />
        </div>
          <div id="gameDescription">
            <div id="gameTitle">
              <h1>{{ patient.name }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
  name: "PatientView",
  data() {
    return {
      patient: [],
    };
  },
  props: { id: Number },
  components: {

  },
  computed: {

  },
  mounted() {
    this.getPatientInfo()
  },
  methods: {
    async getPatientInfo() {
      try {
        const response = await axios.get(
            "https://patiro-developer.azurewebsites.net/api/Member/{id}"
        );
        // JSON responses are automatically parsed.
         this.patient = response;
     //   console.log(this.patient);
      } catch (error) {
     //  console.log(error);
      }
    },
  }
};
</script>

