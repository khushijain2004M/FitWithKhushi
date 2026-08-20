import profileData from "../../data/profileData";

import {
  Watch,
  Activity,
  Smartphone
} from "lucide-react";


const icons = {

  "Apple Watch":Watch,

  "MyFitnessPal":Activity,

  "Google Fit":Smartphone

};



function ConnectedDevices(){


  const devices = profileData.devices || [];



  return (

    <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-6">


      <h2 className="text-xl font-semibold">
        Connected Devices
      </h2>


      <p className="text-sm text-slate-500 mt-1 mb-4">
        Active integrations.
      </p>



      <div className="space-y-3">


        {
          devices.map((device)=>{


            const Icon =
              icons[device.name] || Smartphone;



            return (

              <div
                key={device.id}
                className="flex items-center justify-between bg-slate-50 hover:bg-white transition border border-slate-100 rounded-2xl px-4 py-3"
              >


                <div className="flex items-center gap-3">


                  <Icon
                    size={18}
                    className="text-blue-500"
                  />


                  <div>


                    <p className="text-sm font-medium text-slate-800">
                      {device.name}
                    </p>


                    <p className="text-xs text-slate-500">
                      Last Sync: {device.lastSync}
                    </p>


                  </div>


                </div>



                <span
                  className={`text-xs font-semibold ${
                    device.status === "Connected"
                    ? "text-green-600"
                    : "text-slate-400"
                  }`}
                >

                  {device.status}

                </span>


              </div>

            );

          })
        }



        {
          devices.length === 0 &&
          <p className="text-sm text-slate-400">
            No connected devices.
          </p>
        }



      </div>


    </div>

  );

}


export default ConnectedDevices;