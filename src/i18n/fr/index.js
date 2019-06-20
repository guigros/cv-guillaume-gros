// This is just an example,
// so you can safely delete all default props below

export default {
  profile: `Ingénieur en développement logiciel polyvalent et motivé. J’ai travaillé sur
  différents projets allant de l’intégration, du diagnostic et la vérification au développement d’outils et de prototypes; et ce dans divers domaines tel que le
  médical, la gestion de l’énergie ou encore l’industrie hôtelière. J’apprécie découvrir, apprendre et mettre en pratique de nouvelles technologies`,
  skill: 'Compétences',
  experience: 'Expériences',
  education: 'Formations',
  diplomas: [
    {
      title: 'Diplôme d\'Ingénieur',
      subtitle: 'Electronique et informatique industrielle (par apprentissage)',
      place: 'Université Joseph Fourier – Grenoble, France',
      school: 'Polytech Grenoble',
      year: 2012,
      logoPath: 'statics/logo_polytech.jpg'
    },
    {
      title: 'DUT GEII',
      subtitle: 'Electronique et informatique industrielle ',
      place: 'Université Joseph Fourier – Grenoble, France',
      school: 'IUT 1 Grenoble',
      year: 2009,
      logoPath: 'statics/logo_iut.jpg'
    }
  ],
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
                    </ul>
                    Développement et configuration sur cible Zynq (Xilinx)<br>
                    <ul>
                    <li>Développement d’une interface de tests pour un système électronique de sonar</li>
                    </ul>`,
      company: 'Centum Adeneo',
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
