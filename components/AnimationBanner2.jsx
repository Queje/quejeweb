import React, { useRef } from "react";

export default function AnimationBanner2() {
  const ref = useRef(null);

  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <lottie-player
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="https://assets10.lottiefiles.com/packages/lf20_M9wchH.json"
        style={{ width: "600px", height: "300px" }}
    ></lottie-player>
  );
}