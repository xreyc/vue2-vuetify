<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">
      

      <v-row  no-gutters>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="ma-3">
            <v-responsive class="text-center pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text class="text-center">
              <div class="subtitle-1">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn depressed color="transparent">
                <v-icon small left class="grey--text">mdi-message</v-icon>
                <span class="grey--text">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-row>

    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'TeamPage',
    data() {
      return {
        team: [
          { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
          { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
          { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
          { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
          { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
        ]
      }
    }
  }
</script>
