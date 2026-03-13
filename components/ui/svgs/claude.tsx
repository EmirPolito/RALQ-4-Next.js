export function Claude({ height = 26, width = 90 }: { height?: number; width?: number }) {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 120 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12c2.8 0 5.4-1 7.5-2.6l-2.4-3.2C19.5 23.4 17.8 24 16 24c-4.4 0-8-3.6-8-8s3.6-8 8-8c1.8 0 3.5.6 4.9 1.6l2.4-3.2C21.3 5 18.7 4 16 4zm14 4h4v16h-4V8zm10 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm4 0c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4zm24-8h4v12c0 2.2-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4V8h4v12h4V8zm10 0h4v12h4V8h4v16H78V8zm20 16h-4V8h4v4l4-4h6l-6 6 6 10h-6l-4-6v6z" />
    </svg>
  )
}
