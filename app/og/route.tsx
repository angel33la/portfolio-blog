import { ImageResponse } from "next/og";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Angella's Blog Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "32px 16px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "36px",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    ) as any,
    {
      width: 1200,
      height: 630,
    }
  );
}
