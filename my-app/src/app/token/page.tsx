// TokenPage.tsx
"use client"
import { useSearchParams } from 'next/navigation'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wallet } from "lucide-react";

const TokenPage = () => {
  const searchParams = useSearchParams()
  const total  = searchParams.get('total');
  const tokens = parseInt(total as string, 10) + 4000; // Parse 'total' from query and add 4000 to initialize

  return (
    <div className="mt-5 flex justify-center gap-3">
      <Card className="max-w-sm bg-black text-white">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Token Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mt-4">
            <span className="flex items-center">
              <Wallet className="mr-2 h-7 w-7" />
              Tokens: {tokens}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TokenPage;
