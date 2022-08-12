


<template>

  <div class="members-list">
    <div v-for="member in members">
      <div>
        <b-dropdown  id="dropdown-grouped" :text=member.name class="m-2">
          <b-dropdown-item-button>
           {{member.name}}
            <input type="text" v-model="form.name"/>
          </b-dropdown-item-button>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-group id="dropdown-group-1" header="Illnesses">
            <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
            <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
          </b-dropdown-group>
          <b-dropdown-group id="dropdown-group-1" header="Weight">
            <b-dropdown-item-button>{{member.height}}</b-dropdown-item-button>
            <input type="text" v-model="form.height"/>
          </b-dropdown-group>
          <b-dropdown-group id="dropdown-group-1" header="Height">
            <b-dropdown-item-button>{{member.weight}}</b-dropdown-item-button>
            <input type="text" v-model="form.weight"/>
          </b-dropdown-group>
          <b-dropdown-group id="dropdown-group-2" header="Status">
            <b-dropdown-item-button >{{ member.status == "0" ? 'New' :  member.status == "1" ? "Pending": member.status == "2" ? "Disqualified": member.status == "3" ? 'Qualified':  "Incorrect Status"  }}</b-dropdown-item-button>
            <input type="text" v-model="form.status"/>
          </b-dropdown-group>
          <b-dropdown-group id="dropdown-group-3" header="Address">
            <b-dropdown-item-button >{{ member.address }}</b-dropdown-item-button>
            <input type="text" v-model="form.address"/>
          </b-dropdown-group>
          <b-dropdown-group id="dropdown-group-4" header="PhoneNumber">
            <b-dropdown-item-button >{{ member.phone}}</b-dropdown-item-button>
            <input type="text" v-model="form.phone"/>
          </b-dropdown-group>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item-button>
            <button v-on:click="updateData(member.id)">Update Details</button>
          </b-dropdown-item-button>
        </b-dropdown>
      </div>
      <div @click="showDetail(member.id)">
        <button>{{ member.name }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from "axios";
  import getDocumentElement from "@popperjs/core/lib/dom-utils/getDocumentElement";

  export default {
    name: "HomeComponent",
    data() {
      return {
        form: {
          name: '',
          height: '',
          weight: '',
          status: '',
          address: '',
          phone: '',
        },
        members: [],
        propType: this.types
      };
    },
    mounted() {
      this.getData();
      //this.getGameDetail();
    },
    methods: {
      async getData() {
        try {
          const response = await axios.get(
              "https://patiro-developer.azurewebsites.net/api/Member"
          );
          // JSON responses are automatically parsed.
          this.members = response.data;

          console.log(this.members);
        } catch (error) {
          console.log(error);
        }
      },
      showDetail(id) {
        console.log(id)

      },
     async updateData() {
        try {
          const response = await axios.patch(
              "https://patiro-developer.azurewebsites.net/api/Member/{id}", this.form)
              .then(function(response){
                alert('Patient Updated')
                // Handle success
              }.bind(this));
          // JSON responses are automatically parsed.
          this.members = response.data;

          console.log(this.members);
        } catch (error) {
          console.log(error);
        }
      },

    }
  };
</script>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
.members-list {
  max-height: 800px;
}


</style>
