import { Loader2 } from "lucide-react";

import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "bg-teal-600 hover:bg-teal-700 text-white w-full py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"}
    >
      {isLoading ? (
        <div className="flex items-center gap-3">
          <Loader2 className="mr-2 size-5 animate-spin" />
          Processing...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;