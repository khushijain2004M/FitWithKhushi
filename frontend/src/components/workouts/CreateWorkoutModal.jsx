import { useState } from "react";
import { useDispatch } from "react-redux";

import { addWorkout } from "../../store/slices/workoutSlice";


function CreateWorkoutModal({ onClose }) {

  const dispatch = useDispatch();


  const [form, setForm] = useState({
    title: "",
    category: "Strength",
    duration: "",
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async () => {
    await dispatch(addWorkout(form));
    onClose();
  };


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-[400px]">

        <h2 className="text-lg font-semibold mb-4">
          Create Workout
        </h2>


        <input
          name="title"
          placeholder="Workout title"
          className="w-full border p-2 mb-2"
          onChange={handleChange}
        />


        <input
          name="category"
          placeholder="Category"
          className="w-full border p-2 mb-2"
          onChange={handleChange}
        />


        <input
          name="duration"
          placeholder="Duration (mins)"
          className="w-full border p-2 mb-4"
          onChange={handleChange}
        />


        <div className="flex gap-2 justify-end">

          <button
            onClick={onClose}
            className="px-3 py-1 border rounded"
          >
            Cancel
          </button>


          <button
            onClick={handleSubmit}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}


export default CreateWorkoutModal;