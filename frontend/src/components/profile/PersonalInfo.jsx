import { useSelector } from "react-redux";
import profileData from "../../data/profileData";


function PersonalInfo() {

  const { user } = useSelector(
    (state) => state.auth
  );



  const info = [

    {
      label: "Name",
      value: user?.fullName || "Not available"
    },

    {
      label: "Email",
      value: user?.email || "Not available"
    },

    {
      label: "Height",
      value: profileData.height
    },

    {
      label: "Weight",
      value: profileData.weight
    },

    {
      label: "Goal",
      value: profileData.goal
    },

    {
      label: "Level",
      value: profileData.level
    }

  ];



  return (

    <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-6">


      <h2 className="text-xl font-semibold">
        Personal Info
      </h2>


      <p className="text-sm text-slate-500 mt-1 mb-4">
        Basic fitness details.
      </p>



      <div className="divide-y divide-slate-100">


        {info.map((item)=>(

          <div
            key={item.label}
            className="flex justify-between py-3 hover:bg-slate-50 transition"
          >

            <span className="text-sm text-slate-500">
              {item.label}
            </span>


            <span className="font-semibold text-slate-900">
              {item.value}
            </span>


          </div>


        ))}


      </div>


    </div>

  );

}


export default PersonalInfo;