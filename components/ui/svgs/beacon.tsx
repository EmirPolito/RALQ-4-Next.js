export function Beacon({ height = 24, width = 80 }: { height?: number; width?: number }) {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 120 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 4c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
      <circle cx="16" cy="16" r="4" />
      <path d="M40 8h6c4.4 0 8 3.6 8 8s-3.6 8-8 8h-6V8zm4 12h2c2.2 0 4-1.8 4-4s-1.8-4-4-4h-2v8zm16-12h10v4H64v2h6v4h-6v2h6v4H60V8zm16 0h10v4h-6v2h4v4h-4v2h6v4H76V8zm16 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm4 0c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4zm16-8h4l6 8V8h4v16h-4l-6-8v8h-4V8z" />
    </svg>
  )
}
