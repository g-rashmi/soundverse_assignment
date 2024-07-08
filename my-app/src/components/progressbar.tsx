

const ProgressBar = ({ currentDay, goal }) => {
  const progressPercentage = (currentDay / goal) * 100;

  return (
    <div className="w-full bg-gray-300 rounded-full h-4 ">
      <div className="bg-purple-600 h-4 rounded-full" style={{ width: `${progressPercentage}%` }}> 


      </div>
    </div>
  );
};

export default ProgressBar;