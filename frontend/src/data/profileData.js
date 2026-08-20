const profileData = {


  // Temporary fitness data
  // Will later come from FitnessProfile API


  level:"Intermediate",

  weight:"72 kg",

  height:"178 cm",

  goal:"Fat Loss",


  workouts:42,

  caloriesBurned:12500,

  totalHours:38,

  streak:7,



  goals:[

    {
      label:"Weight",
      value:75,
      current:72
    },


    {
      label:"Protein",
      value:150,
      current:145
    },


    {
      label:"Workouts",
      value:5,
      current:4
    },


    {
      label:"Steps",
      value:10000,
      current:8200
    }

  ],



  devices:[

    {
      id:1,
      name:"Apple Watch",
      status:"Connected",
      lastSync:"2 min ago"
    },


    {
      id:2,
      name:"Google Fit",
      status:"Connected",
      lastSync:"Just now"
    }

  ],




  weeklyActivity:[

    3,
    5,
    2,
    6,
    4,
    7,
    5

  ],




  recentActivity:[

    {
      id:1,
      name:"Morning Run",
      type:"5.2 km completed",
      time:"8:10 AM"
    },


    {
      id:2,
      name:"Upper Body Workout",
      type:"45 min strength session",
      time:"Yesterday"
    },


    {
      id:3,
      name:"Daily Goal",
      type:"10,000 steps achieved",
      time:"Yesterday"
    }

  ]

};


export default profileData;