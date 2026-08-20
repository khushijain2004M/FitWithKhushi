import {
  Dumbbell,
  Clock3,
  Flame,
} from "lucide-react";

function RecentWorkouts({ workouts = [] }) {
  return (
    <div
      className="
      bg-white
      rounded-[28px]
      border
      border-slate-200
      shadow-sm
      p-6
      h-[300px]
      relative
      overflow-hidden
    "
    >
      <div
        className="
        absolute
        -top-10
        -left-10
        w-40
        h-40
        bg-blue-100
        rounded-full
        blur-3xl
        opacity-30
      "
      />

      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Recent Workouts
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Your latest training sessions
            </p>
          </div>

          <button
            className="
            text-sm
            px-4
            py-2
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            hover:bg-slate-100
            transition
          "
          >
            View All
          </button>
        </div>

        <div className="space-y-3">
          {workouts.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              No workouts found.
            </div>
          ) : (
            workouts.map((workout) => (
              <div
                key={workout._id}
                className="
                flex
                items-center
                justify-between
                p-4
                rounded-2xl
                hover:bg-slate-50
                hover:shadow-md
                transition-all
                duration-300
                cursor-pointer
              "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                  "
                  >
                    <Dumbbell
                      size={20}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {workout.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {workout.category}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end gap-1 text-slate-600">
                    <Clock3 size={14} />

                    <span className="text-sm">
                      {workout.duration} min
                    </span>
                  </div>

                  <div className="flex items-center justify-end gap-1 mt-1 text-orange-500">
                    <Flame size={14} />

                    <span className="text-sm font-medium">
                      {workout.caloriesBurned} kcal
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentWorkouts;