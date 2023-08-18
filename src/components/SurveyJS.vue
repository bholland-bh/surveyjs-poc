<script setup>
import { Model } from "survey-core";
import { themeJson } from "../theme";
import { surveyJson } from '../surveyJson';

let survey = new Model(surveyJson);
survey.applyTheme(themeJson);
survey.onComplete.add((sender) => {
  console.log(JSON.stringify(sender.data, null, 3));
});

</script>

<template>
  <SurveyComponent :model="survey" />
</template>

<style scoped>

</style>