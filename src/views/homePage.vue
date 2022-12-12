<template>
  <div>
    <v-sheet
      id="bidSheet"
      class="py-16"
      color="grey-lighten-4"
      >
      <section id="filter">
        <v-container>
          <v-row justify="center">
            <img
              id="bidNftImg"
              src="src/assets/images/honeybee.png"
            />

            <v-col cols="12" md="2"></v-col>

            <v-col cols="auto">
              <!-- <v-responsive width="500"> -->
                <p style="color: #808080d6">
                  TEAM NAME: -1°C(마이너스 일도씨)
                </p>
                <h1 id="bidTitle">
                  Save the honeybee <span style="color: #c82c2c99">#1</span>
                </h1>

                <v-row class="mt-3">
                  <v-col cols="12" md="6">
                    <p style="color: #808080d6">
                      현재 입찰가
                    </p>
                    <p style="font-size: 30px">
                      <img src="src/assets/images/klaytn.png" />
                      130 KLAY
                    </p>
                  </v-col>
                  <v-col cols="12" md="6">
                    <p style="color: #808080d6">
                      경매 종료까지 남은 시간
                    </p>
                    <p style="font-size: 30px">
                      {{ auctionTime }}
                    </p>
                  </v-col>
                </v-row>

                <v-row class="my-5" align="center" justify="center">
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

                <v-row 
                  v-for="participant in participants"
                  :key="participant"
                  class="mt-5"
                  style="border-bottom: 0.2px dashed gray"
                  align="center"
                >
                  <v-col cols="12" md="2">
                    <img
                      src="src/assets/images/background_1.jpg"
                      style="width: 30px; height: 30px; border-radius: 50%; display: block; margin: auto"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    {{ participant.address }}
                  </v-col>
                  <v-col cols="12" md="4">
                    <img src="src/assets/images/klaytn.png" style="width: 15px; padding-right: 3px" />
                    <strong>{{ participant.bid }}</strong> KLAY
                  </v-col>
                </v-row>

              <!-- </v-responsive> -->
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-sheet>

    <!-- 프로젝트 소개 -->
    <v-sheet
      id="infoSheet"
      class="py-16"
      color="grey-lighten-3"
      >
      <v-container>
        <v-row justify="center" style="font-family: 'ONE-Mobile-POP'; font-size: 30px;">
          <span style="color: #d61d1dd4; margin-right: 15px;">
            -1°C
          </span>프로젝트 목표
        </v-row>
        <v-row class="my-16" justify="center">
          <v-col cols="12" md="4">
            <h1>
              Save the honeybee ?
            </h1>
          </v-col>
          <v-col cols="12" md="2"></v-col>
          <v-col cols="12" md="6">
            <p style="line-height: 30px">
              지구 온난화로 인해 매년 꿀벌의 개체 수가 감소하고 있습니다.<br />
              산업화 이후 지구의 온도는 계속해서 상승하고 있고,<br />
              이로 인해 생태계가 파괴되고 있습니다.<br />
              이대로 방치한다면 지구는 곧 생명체가 살 수 없는 공간이 될 것입니다.<br />
              <br />
              Save the honeybee 프로젝트는 환경을 위한 움직임입니다.<br />
              작은 움직임들이 모이면, 큰 움직임을 만들어 낼 수 있습니다.<br />
              <br />
              저희 -1도씨 팀은 커뮤니티를 형성할 뿐입니다.<br />
              모든 움직임은 블록체인 기술로 투명하게 공개되며,<br />
              모든 결정은 DAO에 의해 결정됩니다.<br />
              <br />
              지구를 위한 작은 움직임에 동참해 주세요.<br />
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- 팀원 소개 -->
    <v-sheet
      class="py-16"
      color="grey-lighten-4"
      >
        <v-container>
          <v-row justify="center" style="font-family: 'ONE-Mobile-POP'; font-size: 30px;">
            <span style="color: #d61d1dd4; margin-right: 15px;">
              -1°C
            </span>팀원 소개
          </v-row>

          <v-row justify="center" class="mt-16">
            <v-col cols="12" md="4" style="text-align: center;">
              <img
                src="src/assets/images/background_1.jpg"
                class="teamImg"
              />
              <p class="mt-5" style="font-size: 20px;">
                # TAEK
              </p>
              <p style="color: rgb(214 29 29 / 55%);">
                Developer
              </p>
            </v-col>
            <v-col cols="12" md="4" style="text-align: center;">
              <img
                src="src/assets/images/background_2.jpg"
                class="teamImg"
              />
              <p class="mt-5" style="font-size: 20px;">
                # TAEK
              </p>
              <p style="color: rgb(214 29 29 / 55%);">
                Developer
              </p>
            </v-col>
            <v-col cols="12" md="4" style="text-align: center;">
              <img
                src="src/assets/images/background_1.jpg"
                class="teamImg"
              />
              <p class="mt-5" style="font-size: 20px;">
                # TAEK
              </p>
              <p style="color: rgb(214 29 29 / 55%);">
                Developer
              </p>
            </v-col>
          </v-row>

        </v-container>
    </v-sheet>

    <!-- FAQ -->
    <v-sheet
      class="py-16"
      color="grey-lighten-3"
    >
      <v-container>
        <v-row justify="center" style="font-family: 'ONE-Mobile-POP'; font-size: 30px;">
          FAQ
        </v-row>

        <v-row justify="center" class="mt-16">
          <v-col cols="12" md="2"></v-col>
          <v-col cols="12" md="8">
            <v-expansion-panels id="faqPanel">
              <v-expansion-panel
                title="<Save the honeybee>는 어떤 NFT인가요?"
                text="Save the honeybee는 환경 운동을 함께하기 위해 만들어진 멤버십 NFT입니다. NFT홀더들은 DAO의 구성원으로써 함께 환경 보존에 움직임을 결정하고 나아갑니다."
                style="border-radius: 10px !important; margin-bottom: 20px;"
              ></v-expansion-panel>
              <v-expansion-panel
                title="<Save the honeybee>는 몇 개가 발행되나요?"
                text="총 7,777개 발행됩니다."
                style="border-radius: 10px !important; margin-bottom: 20px;"
              ></v-expansion-panel>
              <v-expansion-panel
                title="<Save the honeybee>는 어떤 혜택을 제공하나요?"
                text="DAO에 의해 결정된 프로젝트를 오프라인으로 함께할 경우 소정의 코인을 받을 수 있습니다."
                style="border-radius: 10px !important; margin-bottom: 20px;"
              ></v-expansion-panel>
              <v-expansion-panel
                title="<Save the honeybee>는 왜 경매로 진행되나요?"
                text="환경 운동에 꾸준한 관심을 도모하고자 경매시스템을 도입하게 되었습니다."
                style="border-radius: 10px !important; margin-bottom: 20px;"
              ></v-expansion-panel>
              <v-expansion-panel
                title="<Save the honeybee>는 자금의 출처는 어떻게 되나요?"
                text="NFT를 판매한 자금을 통해 환경 관련 프로젝트를 진행하고자 합니다. 홀더 수가 많아지면 더 큰 프로젝트를 진행할 수 있습니다. 물론 모든 자금의 흐름은 블록체인에 투명하게 공개됩니다."
                style="border-radius: 10px !important; margin-bottom: 20px;"
              ></v-expansion-panel>
              <v-expansion-panel
                title="<Save the honeybee>는 어떤 블록체인을 사용하나요?"
                text="클레이튼 블록체인을 사용합니다."
                style="border-radius: 10px !important; margin-bottom: 20px; box-shadow: none;"
              ></v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          <v-col cols="12" md="2"></v-col>
        </v-row>
      </v-container>
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
  #bidSheet #bidNftImg {
    border-radius: 10px;
  }
  #bidSheet #bidTitle {
    font-family: 'ONE-Mobile-POP';
    font-size: 40px;
  }
  .teamImg {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    opacity: 0.8;
    display: block;
    margin: auto;
  }
  #faqPanel div {
    box-shadow: none !important;
  }

</style>