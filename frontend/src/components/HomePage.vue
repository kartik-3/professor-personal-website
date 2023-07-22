<template>
  <v-container>
    <v-sheet color="grey lighten-5" rounded class="pt-3 pb-3" elevation="1">
      <v-row class="pt-1 pb-1 px-4">
        <v-col cols="3">
          <v-img :height="300" :width="250" :aspect-ratio="4 / 5" :src="`${publicPath}images/rohini_srihari.jpeg`"
            class="grey lighten-2">
          </v-img></v-col>
        <v-col>
          <div>
            <div class="black--text py-3">
              <span id="professorTitle">Professor and Associate Chair, </span> <span id="department"><a
                  href="https://engineering.buffalo.edu/computer-science-engineering.html">Department of Computer Science
                  and Engineering</a></span>
              <br>
              <span id="university"><a href="https://www.buffalo.edu/">University at Buffalo, The State University of New York</a></span>
              <br>
              <span id="officeAddress">Office Address: 338D Davis Hall, Buffalo, NY 14260</span>
              <br>
              <span id="phoneNumber">Phone: <a href="tel:+1-716-645-1602">+1 (716) 645-1602</a></span>
              <br>
              <span id="emailAddress">E-mail: <a href="mailto:rohini@buffalo.edu">rohini@buffalo.edu</a></span>
              </div>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
    <v-divider  class="my-6"></v-divider>
    <v-alert v-if="$vuetify.breakpoint.width > 1000" class="my-6 text-justify text-h6 white--text light-blue accent-3" dense
      text elevation="2">
      <strong>Biography</strong>
    </v-alert>
    <p>
      Rohini Srihari is a scientist, educator and entrepreneur. Dr. Srihari is a professor in the Dept. of Computer
      Science
      and Engineering at the State University of New York, Buffalo where her research focuses on natural language
      processing, artificial intelligence, machine learning and information retrieval. She teaches graduate courses in
      information retrieval and natural language processing and offers seminars in various topics in AI including
      conversational AI, deep learning in NLP and AI for social good. She supervises students’ research in both the CSE
      department as well as the Linguistics department. Her work has been funded by agencies such as The National Science
      Foundation, DARPA and IARPA. She has also worked extensively with the US Government in developing innovative
      multilingual text mining solutions.
    </p>
    <p>
      She recently supervised an interdisciplinary student team (Team Proto) that competed and won the bronze prize in the
      Alexa Prize Socialbot Grand Challenge 4. Here is the announcement of winners and a video describing the challenges
      of
      the compeition and featuring the top three contestants. Her recent research focuses on advancing the
      state-of-the-art
      in socialbots capable of engaging in empathetic, interesting and purposeful conversations.
    </p>
    <p>
      She has published over 100 research papers in computer science journals and conference proceedings. Her Google
      Scholar
      h-index is 40. She is also the author of two US patents, one on multilingual text mining. A selected list of
      publications and talks is available elsewhere on this site.
    </p>
    <p>
      She recently served as Chief Data Scientist at PeaceTech Lab, a non-profit incubated within the United States
      Institute of Peace in Washington, DC. She directed a multidisciplinary team in the development of an AI platform
      that
      leverages diverse data sources to provide scalable solutions for conflict prevention and early warning of social
      disruption in fragile countries. Her research is currently focused on AI for Social Good and includes topics such as
      predicting social unrest, identifying and combating disinformation, and conversational AI (chatbots).
    </p>
    <p>
      She has also founded and directed technology start-ups, focusing on “big data” analytics solutions for various
      markets. Two of these companies were subsequently acquired by large media analytics companies. In her roles as
      founder, CEO and chief scientist at these companies, she has handled all aspects of launching a technology start-up,
      including raising venture capital, building technical and business teams, directing product development, and
      marketing
      and sales.
    </p>
    <p>
      Dr. Srihari received her B. Math degree from the University of Waterloo (Canada) and her PhD in Computer Science
      from
      the State University of New York.
    </p>
    <div class="mb-12"></div>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',

  data: () => ({
    publicPath: process.env.BASE_URL
  }),
}
</script>
