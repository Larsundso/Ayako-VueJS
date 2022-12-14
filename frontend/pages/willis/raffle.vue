<script setup lang="ts">
const raffleResponse = await fetch("https://api.ayakobot.com/raffle");
const Raffle = (await raffleResponse.json()) as {
  msgid: string;
  endtime: string;
  description: string;
  winners: string;
  price: string;
  channelid: string;
  participants: {
    discordid: string;
    twitchid: string;
    bank: string;
    claimed: string;
    twitchusername: string;
    tickets: number;
  }[];
  ended: boolean;
};
</script>

<template>
  <div class="main">
    <div class="raffle">
      <h1>Current Raffle</h1>
      <div class="rafflePropertyWrapper">
        <div class="prop">
          <h3>Prize</h3>
          <br />
          {{ Raffle.description }}
        </div>
        <div class="prop">
          <h3>Possible Winners</h3>
          <br />
          {{ Raffle.winners }} Winner(s)
        </div>
        <div class="prop">
          <h3>Entry Price</h3>
          <br />
          {{ Raffle.price }} Gems
        </div>
      </div>
    </div>

    <h1>Raffle Entries</h1>
    <div v-for="p in Raffle.participants">
      <div class="rafflePropertyWrapper">
        <div class="prop">
          <br />
          {{ p.twitchusername || "Unkown Name" }}
        </div>
        <div class="prop">
          <br />
          {{ p.tickets }} Tickets
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rafflePropertyWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.prop {
  text-align: center;
  border: 3px solid grey;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  margin: 0.2rem;
}

h1 {
  text-align: center;
  margin-right: 3rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
}
</style>
