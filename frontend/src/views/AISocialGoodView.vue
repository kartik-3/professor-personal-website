<template>
  <v-container>
    <v-sheet color="grey lighten-5" rounded class=" my-5" elevation="1">
      <v-card class="" outlined elevation="2">
        <p class="pa-6">
          Artificial Intelligence (AI) is ubiquitous in our society today. Till recently, this powerful technology has
          primarily
          been used to drive revenue in commercial applications. For example, AI solutions power the recommendation
          engines used
          by Netflix, Facebook and Amazon. This is partly due to the voluminous amounts of data and resources that these
          companies have access to, enabling the development of high performing models. This is also what is enabling the
          development of self-driving vehicles.
          <br>
          Optimistically, there is now keen interest in harnessing the power of AI for social good. This is evidenced by
          sessions devoted to this topic at conferences and workshops, the establishment of academic units devoted to AI
          and
          Society, and numerous start-ups focused on developing technology for social good. One area where AI has had
          significant impact is in the medical domain: AI-based radiology systems are in some cases outperforming humans
          due to
          their ability to detect patterns that are difficult for humans to see. AI systems have also been used in
          judicial
          support systems, albeit with some controversy.
          <br>
          There is interest now in leveraging AI to tackle broader societal problems. I recently led a team in the
          development
          of Groundtruth Global, an AI platform for early warning of social and economic disruption in emerging economies.
          Other
          applications in this vein include predicting refugee migration patterns, increase in civil unrest, deforestation
          and
          illegal poaching or mining, and potential supply chain disruption. Causes for these types of disruption could
          involve
          climate (e.g. drought), civil unrest, government leadership and numerous other natural and man-made causes.
          Early
          warning systems need to provide sufficient lead times to be usable and support mitigation or intervention
          efforts.
          Lead time is the number of minutes, hours, days or months before an event is predicted to happen: this ranges
          from
          minutes (in the case of missile attacks), to days (violent conflict), to months (drought, refugee migration).
          <br>
          There are numerous intellectual and technological challenges if such systems are to be successful. In order to
          be
          useful, early warning systems must reflect geographical specificity (e.g. a suburb of a city, rather than a
          country as
          a whole). It begins with the curation and collection of data sources that provide real-time information at the
          local
          level. While social media and news may provide some of this information, they are not sufficient to synthesize
          the
          full context of the local situation. Satellite imagery, sensor data, and local observational data collected by
          human
          volunteers through mobile apps can fill this void. The challenge then is to develop AI learning models that can
          handle
          such disparate data. An interesting solution inovlving cell phone data, drones and satellite imagery has been
          developed to ensure sustainable palm oil production.
          <br>
          Early warning systems must be accurate and explainable. In fact, there are situations where the reason for a
          prediction is sometimes more useful than the prediction itself. Deep learning models, particularly recent
          advances in
          self-attention and transformer architectures can be leveraged for this purpose. Explaining a decision involves
          both
          the mathematical evidence, as well as a more generally accessible explanation such as a textual summary. The
          capabilities of technologies such as the recently announced GPT3 language models can be used for this purpose.
          There
          has also been a resurgence of interest in symbolic AI for this purpose that can exploit knowledge graphs: the
          term
          neuro-symbolic AI models refers to the combination of knowledge-based models with the newer neural (deep
          learning)
          models.
          <br>
          Finally, the development of these sophisticated AI predictive models lead to questions about ethical use,
          transparency
          as well as bias. Given the sensitivity associated with predicting social unrest, peacekeepers and humanitarian
          organizations are very mindful that they could unintentionally fall into the hands of bad actors. Since their
          guiding
          prinicple is do no harm, they are wary of using these AI systems. Thus, any deployment must be carefully
          considered
          and monitored. Beyond the ethics question, it is also necessary to document (in a reproducable manner), the
          algorithms
        and data used to generate the AI systems. There has been much controversy about biased data being used in
        judicial
        systems that suggest sentencing guidelines based on learning from past data.
        <br>
        AI for Social Good is in its infancy, both on the technology frontier as well as the impact and consequences it
        may
        have on society. It is a truly multidisciplinary area requiring collaboration among computer and data
        scientists,
        social scientists, ethnographers, development and aid organizations, peacekeeping and conflict experts, and
        regulatory
        experts. The current pandemic while taking a heavy toll on society, is also inspiring new innovations in AI for
        Social
        Good.
      </p>
    </v-card>
  </v-sheet>
</v-container></template>

<script>
import HomePage from '../components/HomePage'

export default {
  name: 'AISocialGood',

  components: {
    HomePage,
  },
}
</script>
