export function Bolt({ height = 22, width = 56 }: { height?: number; width?: number }) {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 76 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.8 0L6.2 16h9.6L13.2 32 26 13.8h-9.8L17.8 0z" />
      <path d="M38.2 8c-4.2 0-7.6 3.4-7.6 7.6v.8c0 4.2 3.4 7.6 7.6 7.6 4.2 0 7.6-3.4 7.6-7.6v-.8c0-4.2-3.4-7.6-7.6-7.6zm3.2 8.4c0 1.8-1.4 3.2-3.2 3.2s-3.2-1.4-3.2-3.2v-.8c0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2v.8zM52.4 2h-4.2v21.8h4.2V2zM64.2 8h-4.6v4h-2.4v3.8h2.4v4.6c0 2 1.6 3.6 3.6 3.6H68v-4h-3.8v-4.2H68V12h-3.8V8zM76 12h-4v12h4V12z" />
      <path d="M74 6a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  )
}
