import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Calendar as CalendarIcon } from 'lucide-react';
import ProgressBar from './progressbar';

const ChallengeCard = ({ day, goal, tokens }) => {
  return (
    <Card className="max-w-sm mx-auto bg-black text-white">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Compose Daily and Win Tokens!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">
          Challenge yourself to create a new tune each day! Earn 500 tokens after 3 days and an extra 1000 tokens after 7 days. Stay creative and keep composing to unlock your rewards!
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Day {day} of {goal} ({tokens} Tokens)
          </span>
        </div>

        <div className="mt-3"><ProgressBar currentDay={day} goal={goal} /> 
        </div>

      </CardContent>
    </Card>
  );
};

export default ChallengeCard;
