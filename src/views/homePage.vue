<template>
  <div>
    <v-sheet
      id="bidSheet"
      class="py-16"
      color="grey-lighten-4"
      >
      <section id="filter">
        <v-container>
          <v-row justify="space-between">
            <v-img
              max-width="400"
              src="src/assets/images/honeybee.png"
            />

            <v-col cols="auto">
              <!-- <v-responsive width="500"> -->
                <p class="text-gray">
                  Project -1dosi
                </p>
                <h1 class="text-h3">
                  Save the honeybee #1
                </h1>

                <v-row class="mt-3">
                  <v-col cols="12" md="6">
                    <p>
                      현재 경매가
                    </p>
                    <p class="text-h4">
                      130 KLAY
                    </p>
                  </v-col>
                  <v-col cols="12" md="6">
                    <p>
                      경매 종료까지 남은 시간
                    </p>
                    <p class="text-h4">
                      {{ auctionTime }}
                    </p>
                  </v-col>
                </v-row>

                <v-row class="mt-5" align="center" justify="center">
                  <v-col cols="12" md="8">
                    <v-text-field
                      :hide-details=true
                      clearable
                      variant="outlined"
                      label="입찰 금액"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-btn id="bidBtn" variant="outlined">
                      입찰
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row v-for="participant in participants" :key="participant" class="mt-5">
                  <v-col cols="12" md="8">
                    {{ participant.address }}
                  </v-col>
                  <v-col cols="12" md="4">
                    <strong>{{ participant.bid }}</strong> KLAY
                  </v-col>
                </v-row>

              <!-- </v-responsive> -->
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-sheet>

    <v-sheet
      id="infoSheet"
      class="py-16"
      color="grey-lighten-2"
      >
      <section id="filter">
        <v-container>
          <v-row justify="space-between">
            <v-img
              max-width="400"
              src="src/assets/images/honeybee.png"
            />

            <v-col cols="auto">
              <!-- <v-responsive width="500"> -->
                <p class="text-gray">
                  Project -1dosi
                </p>
                <h1 class="text-h3">
                  Save the honeybee #1
                </h1>

                <v-row class="mt-3">
                  <v-col cols="12" md="6">
                    <p>
                      현재 경매가
                    </p>
                    <p class="text-h4">
                      130 KLAY
                    </p>
                  </v-col>
                  <v-col cols="12" md="6">
                    <p>
                      경매 종료까지 남은 시간
                    </p>
                    <p class="text-h4">
                      {{ auctionTime }}
                    </p>
                  </v-col>
                </v-row>

                <v-row class="mt-5" align="center" justify="center">
                  <v-col cols="12" md="8">
                    <v-text-field
                      :hide-details=true
                      clearable
                      variant="outlined"
                      label="입찰 금액"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-btn id="bidBtn" variant="outlined">
                      입찰
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row v-for="participant in participants" :key="participant" class="mt-5">
                  <v-col cols="12" md="8">
                    {{ participant.address }}
                  </v-col>
                  <v-col cols="12" md="4">
                    <strong>{{ participant.bid }}</strong> KLAY
                  </v-col>
                </v-row>

              <!-- </v-responsive> -->
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-sheet>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        auctionTime: '',
        participants: [
          {
            address: '0x141234',
            bid: '150',
          },
          {
            address: '0x241234',
            bid: '100',
          },
          {
            address: '0x111884',
            bid: '80',
          },
        ],
      }
    },
    created () {
      this.getCurrentTime();
    },
    methods: {
      getCurrentTime () {
        setInterval(() => {
          const nowTime = new Date();
          
          this.auctionTime = `${nowTime.getHours()}h ${nowTime.getMinutes()}m ${nowTime.getSeconds()}s`
        }, 1000);
      },
    },
  }
</script>

<style scoped>
  #bidSheet #bidBtn {
    border-radius: 5px !important;
    height: 56px !important;
    min-width: 100px !important;
    color: white !important;
    background: gray;
    font-size: 20px; 
  }

  #infoSheet {
    height: 100vh;
    width: 100vw;
    background-image: url(src/assets/images/background_1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>