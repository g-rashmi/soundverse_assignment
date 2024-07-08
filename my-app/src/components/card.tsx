
"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProgressBar from "./progressbar";

const ChallengeCard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [total, setTotal] = useState(4000);
  const [day, setDay] = useState(1);
  const [tokens, setTokens] = useState(500);
  const [goal, setGoal] = useState(3);
  const [tune, setTune] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHour = new Date().getHours();
      if (currentHour === 0 && tune) {
        setDay((prevDay) => (prevDay < 7 ? prevDay + 1 : 1));
        setTune(false);
      }
    }, 3600000);

    if (day === 4) {
      setTokens(1000);
      setGoal(7);
      setTotal((c) => c + 500);
    } else if (day === 8) {
      setDay(1);
      setGoal(3);
      setTotal((c) => c + 1000);
      setTokens(500);
    }

    return () => clearInterval(interval);
  }, [day, tune]);

  return (
    <div >
    <div className=" mt-5 flex justify-center gap-3 flex-wrap" >
      <Card className="max-w-sm  bg-black text-white">
        <CardHeader>
          <CardTitle className="text-lg font-bold">
            Compose Daily and Win Tokens!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">
            Challenge yourself to create a new tune each day! Earn 500 tokens
            after 3 days and an extra 1000 tokens after 7 days. Stay creative
            and keep composing to unlock your rewards!
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="flex items-center">
              <Link href="/token">
                <Wallet className="mr-2 h-7 w-7" />
              </Link>
              Day {day} of {goal} ({tokens} Tokens)
            </span>
          </div>

          <div className="mt-3">
            <ProgressBar currentDay={day} goal={goal} />
          </div>
        </CardContent>
      </Card>

      <div >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disablePast={!tune} 
          className="rounded-md"

        />
      </div>

</div> 
<div className="mt-5 text" >
        <Button variant="outline" onClick={() => setTune(true)}>
          Create Tune
        </Button>
      </div>
    </div>
  );
};

export default ChallengeCard;
