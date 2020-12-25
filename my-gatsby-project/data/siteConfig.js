module.exports = {
  siteTitle: 'Bonjour! Je suis Asma!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Asma Chouk',
  twitterUsername: '_AsmaChouk',
  githubUsername: 'asmachouk',
  authorAvatar: '/images/asma.jpg',
  authorDescription: `Etudiante en troisième année cycle d’ingénieur dans la spécialité Ingénierie <br />
    du Développement Logiciel. <br />
  Je suis à la recherche d’un PFE (minimum de 4 mois). <br />  </strong>`,
  COMPETENCES: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'Android',
      level: 60
    },
    {
      name: 'Java/JEE',
      level: 60
    },
    {
      name: 'AngularJs',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "NeoXam",
      begin: {
        month: 'Aou',
        year: '2020'
      },
      duration: '1 mois' ,
      occupation: "Stage d'été",
      description: "Développement d’une application de gestion des postes et des formation  pour les employés de NeoXam(Hibernate, AngularJs, Rest API)."
  
    },  {
      company: "Ministère de L’équipement, de l’Habitat, et de l’Aménagement du Territoire Agence d’Urbanisme",
      begin: {
        month: 'fév',
        year: '2017'
      },
      duration: '4 mois'  ,
      occupation: "Stage de fin d’étude",
      description: "Création d’une application de géo localisation des équipements sociaux collectifs sous Android."
  
    }, {
      company: "Société oxygène",
      begin: {
        month: 'Jan',
        year: '2016'
      },
      duration: '1 mois',
      occupation: " Stage de perfectionnement",
      description: "Développer une application de gestion de stock en utilisant le langage java et comme SGBD WampServer."
    }, {
      company: "Délice Danone",
      begin: {
        month: 'Jan',
        year: '2015'
      },
      duration: '1 mois' ,
      occupation: "Stage d’initiation",
      description: "Maitriser le logiciel de travail collaboratif, Lotus Note et Se familiariser par le logiciel EasyVista et l’architecture réseau adaptée par l’entreprise."
  
    },
  ],
  
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/_asmachouk",
    linkedin: "https://www.linkedin.com/in/asma-chouk-b0005b14a",
    github: "https://github.com/asmachouk",
    email: "asmachouk88@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}