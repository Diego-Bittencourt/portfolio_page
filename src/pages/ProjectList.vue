<template>
  <ul>
    <list-item
      v-for="project in projectList"
      :key="project.title"
      :title="project.title"
      :desc="project.desc"
      :gitlink="project.gitlink"
      :livelink="project.livelink"
    ></list-item>
  </ul>
</template>

<script>
import ListItem from "../components/projects/ListItem.vue";
export default {
  components: {
    ListItem,
  },
  data() {
    return {
      projectList: [
        {
          title: "Find a Code Buddy",
          desc: "A small social media in which you create an account, create code requests, register as a mentor, send a message to a mentor and see other users code requests. Back end provided by FireBase.",
          gitlink: "https://github.com/Diego-Bittencourt/find_mentor",
          livelink: "https://codebuddy-9e0d9.web.app/",
        },
        {
          title: "Rock, scissors, paper, lizard and Spock",
          desc: "An extended version of the popular Rock, Scissors and Paper game. It was popular in The Big Bang Theory tv show.",
          gitlink: "https://github.com/Diego-Bittencourt/rock-paper-scissors-lizard-spock",
          livelink: "https://jankenpo-94798.web.app/",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 2.5rem;
  padding: 2rem;
  margin: 0 auto;
}
</style>
