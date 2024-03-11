"use client";

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <SignIn
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              width: "100%",
            },
          },
        }}
      />
    </div>
  );
}
