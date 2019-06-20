<template>
  <div class="q-ml-sm">
    <q-timeline layout="dense" side="right" color="primary">
        <q-timeline-entry v-for="job in jobs" :key="job.date"
          :title="job.title"
          :subtitle="job.date"
        >
          <p v-html="job.description"></p>
        </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<style lang="stylus">
</style>

<script>
// import ContactBox from '../components/ContactBox'

export default {
  name: 'Experience',

  components: {
    // ContactBox
  },

  mounted () {
  },

  data () {
    return {
      jobs: [
        {
          date: 'Oct. 2017 - Dec. 2018',
          title: 'Ingénieur développement logiciel',
          description: `<b>Travail sur Maitre’D (solution de point de vente)</b><br>
                        Amélioration, maintenance et correction de bug<br>
                        Développement et intégration d’une nouvelle GUI pour les stations de travail Maitre’D`,
          company: 'Posera',
          place: 'Montréal - Canada',
          logoPath: ''
        },
        {
          date: 'Mai 2016 – Mai 2017',
          title: 'Ingénieur développement logiciel',
          description: `<b>Consultant pour Fresenius KABI</b><br>
                        Tests d’intégration et développement d’outils pour appareils médicaux<br><br>
                        <b>Projets internes</b><br>
                        Développement de nouvelles fonctionnalités pour le firmware d’un système
                        de simulation de signaux analogiques et d’une GUI cliente<br>
                        <ul>
                        <li>Développement de drivers bas-niveau et extension d’un protocol de communication</li>
                        <li>Diagnostic et debuggage matériel et logiciel</li>
                        <li>Développement et configuration sur cible Zynq (Xilinx)</li>
                        <li>Développement d’une interface de tests pour un système électronique de sonar</li>
                        </ul>`,
          company: 'Posera',
          place: 'Montréal - Canada',
          logoPath: ''
        },
        {
          date: 'Sept. 2015 – Feb. 2016',
          title: 'Ingénieur développement logiciel',
          description: `<b>Consultant pour SNCF</b><br>
                        Prototypage d’une application web pour gérer les requêtes du service SI<br>
                        <ul>
                        <li>Développement Back-end et Front-end</li>
                        </ul>
                        <br>
                        <b>Projets internes</b><br>
                        Diagnostic et debuggage d’application C# pour des clients<br>
                        Développement web et développement Windows`,
          company: 'SII',
          place: 'Grenoble - France',
          logoPath: ''
        },
        {
          date: 'Oct. 2012 – Sep. 2013',
          title: 'Ingénieur système embarqué',
          description: `Développement d’un nouveau BMS (Battery Management System)<br>
                        <ul>
                        <li>Définition d’architecture logicielle et choix matériel (microprocesseur)</li>
                        <li>Développement du firmware et intégration des périphériques</li>
                        <li>Définition et implémentation d’un protocole de communication</li>
                        <li>Diagnostic et débogage materiel et logiciel</li>
                        </ul>`,
          company: 'CEA',
          place: 'Grenoble - France',
          logoPath: ''
        }
      ]
    }
  }
}
</script>
