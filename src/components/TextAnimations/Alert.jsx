import { Alert } from "@material-tailwind/react";
 
export function SuccessAlert() {
  return (
    <Alert
      className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
    >
      A simple alert for showing message.
    </Alert>
  );
}