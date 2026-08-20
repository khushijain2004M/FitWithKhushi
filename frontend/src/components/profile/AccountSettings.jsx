import { useState } from "react";


function AccountSettings(){


  const [settings,setSettings] =
    useState({

      notifications:true,

      darkMode:false,

      units:true

    });




  const toggle=(key)=>{


    setSettings((previous)=>({

      ...previous,

      [key]:!previous[key]

    }));


  };




  const items=[


    {
      label:"Notifications",
      key:"notifications"
    },


    {
      label:"Dark Mode",
      key:"darkMode"
    },


    {
      label:"Metric Units",
      key:"units"
    }


  ];




  return (

    <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-6">


      <h2 className="text-xl font-semibold">
        Account Settings
      </h2>


      <p className="text-sm text-slate-500 mt-1 mb-4">
        Manage your preferences.
      </p>



      <div className="space-y-3">


        {
          items.map((item)=>(


            <div
              key={item.key}
              className="flex items-center justify-between py-2 border-b border-slate-100 last:border-none"
            >


              <span className="text-sm text-slate-700">
                {item.label}
              </span>




              <button

                onClick={()=>toggle(item.key)}

                className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                  settings[item.key]
                    ? "bg-blue-500"
                    : "bg-slate-300"
                }`}

              >


                <div

                  className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
                    settings[item.key]
                    ? "translate-x-5"
                    : "translate-x-0"
                  }`}

                />

              </button>



            </div>


          ))
        }



      </div>


    </div>

  );

}


export default AccountSettings;